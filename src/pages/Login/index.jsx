
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import { useState, useContext } from 'react';
import api from 'services/api';
import Context from 'pages/Context';

import BlogLogo from '../../svg/blog-logo2.svg';

import MD5 from "crypto-js/md5";

const initialState = {
    user: '',
    password: ''
}

const Login = () => {

    //console.log(MD5("123456").toString().toUpperCase());

    // Variáveis de estado
    const [form, setForm] = useState(initialState);
    const [danger, setDanger] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const { setToken, setIdUser} = useContext(Context);

    /**
     * Função para atualizar a variável de estado form
     * a cada mudança de entrada de dados nos inputs
     **/

    function onChange(event){

        // Desestruturação do nome e valor da propriedade do campo
        const { value, name } = event.target;

        // Pega o valor antigo e adiciona o novo que veio
        setForm({ ...form, [name]: value});

        //console.log(form);
    }

    /**
     * Função para prevenir o valor default de enviar 
     * o formulário via GET ou POST para a URL 
     * especificada em action.
     **/

    function handleLogin(event){
        event.preventDefault();

        console.log(form.user);

        api.get(`/user?user=${form.user}`)
        .then((response) => {
            if(response.data.length === 1){
                /*
                Significa que o usuário está cadastrado no banco
                de dados. Porém, é necessário autenticar sua senha.
                Lembrando que isso é regra de negócio, é para o 
                back-end fazer isso, porém estamos fazendo uma 
                exceção e simulando no front-end.
                */

                if(response.data[0].token === MD5(form.password).toString().toUpperCase()){
                    // Se sim, a senha está ok

                    setDanger("");
                    setSuccess("Login feito com sucesso! Aguarde...");
                    setToken(response.data[0].token);
                    setIdUser(response.data[0].id);
                    navigate("/profile");
                }
                else{
                    // Se não, a senha está errada!
                    setDanger("A senha não corresponde!");
                    //navigate("/");
                }
                
            }
            else{
                // Ou está duplicado ou não encontrou!
                setDanger("Usuário não encontrado!")
                //navigate("/");
            }
        })

    }

    return (
        <>
          <Header />
          
          <section className="container">
            <div className="row flex-center">
                <img src={BlogLogo} className="icon-l" alt="" />
            </div>

            <div className="row">
                <div className="grid-4 disappear"></div>
                <div className="grid-4">

                    <form onSubmit={handleLogin}>
                        <h5 className="text-center">
                            Olá, faça o login para continuar.
                        </h5>

                        <div className="mt-4">
                            <label htmlFor="user" className="mb-2"><h6>Nome de usuário </h6> </label>
                            <input type="text" id="user" name="user" className="mt-1" onChange={onChange} placeholder="Digite seu usuário" value={form.email} />
                        </div>

                        <div className="mt-3">
                            <label htmlFor="password" ><h6>Senha</h6></label>
                            <input type="password" id="password" name="password" className="mt-1" onChange={onChange} placeholder="Digite sua senha"  value={form.password} />
                        </div>

                        {
                            // Renderização condicional para erros

                            danger 
                            ? (
                                <div className="card-danger p-2 mt-3">
                                    <h6 className="h7 color-red">{danger}</h6>
                                </div>
                            ) : (<div></div>)
                            
                        }

                        {
                            // Renderização condicional para erros

                            success 
                            ? (
                                <div className="card-success p-2 mt-3">
                                    <h6 className="h7 color-green">{success}</h6>
                                </div>
                            ) : (<div></div>)
                            
                        }
                        
                        <button className="btn w-100 mt-5">Entrar</button>
                    </form>
                </div>
                <div className="grid-4 disappear"></div>
            </div>
          </section>



          <Footer />
        </>
      );
}
  
export default Login;