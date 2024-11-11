
import Logo from '../../svg/blog-logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import Context from 'pages/Context';
import { useState, useContext, useEffect } from 'react';

import api from 'services/api';

const Header = () => {

  const initialValueForm = {
    search: ''
  }

  // Puxando o token do Context
  const { token, idUser, setToken, setIdUser } = useContext(Context);
  const [nameUser, setNameUser] = useState('');
  const [form, setForm] = useState(initialValueForm);
  const navigate = useNavigate();


  // Se tiver o token e iduser, buscar o nome do usuário
  if(token && idUser){

    api.get(`/user?id=${idUser}`)
    .then((response) => {
      setNameUser(response.data[0].name);
    })

  }

  // Função para realizar o logout do usuário
  function handleLogout(event){
    event.preventDefault();

    // Zera o token e o Id user na sessão
    setToken('');
    setIdUser('');

    // Faz o redirect para a home
    navigate('/');
  }

  function onChange(event){

    // Desestruturação do nome e valor da propriedade do campo
    const { value, name } = event.target;

    // Pega o valor antigo e adiciona o novo que veio
    setForm({ ...form, [name]: value});

    //console.log(form);
  }

  function handleSearch(){
    navigate(`/search/${form.search}`);
  }

  return (
  <>
  
    <header className="py-1 px-2">
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <ul className="menu">
          <li><Link to="/about" className="p-1">Sobre</Link></li>
          <li><Link to="/contact" className="p-1">Contato</Link></li>
        </ul>
      </nav>
      <div className="bx"></div>
      <div className="flex-start-row">
        <div className="search">
          <form onSubmit={handleSearch} className="flex">
            <input type="text" name="search" placeholder="Buscar..." onChange={onChange} />
            <button className="btn-search"></button>
          </form>
        </div>

        {

          !token
          ? (
            <>
              <div className="cta-desktop ml-3">
                <Link to="/login" className="btn">Login</Link>
              </div>
              <div className="cta-mobile mr-1">
                <Link to="/login" className="link">Login</Link>
              </div>
            </>
          )
          : (
            <>
              <div className="cta-desktop ml-3">
                <Link to="/profile" className="link">{nameUser}</Link>
                <span> &nbsp; | &nbsp;</span>
                <a href="#" onClick={handleLogout} className="link">Sair</a>
              </div>
              <div className="cta-mobile mr-1">
                <Link to="/profile" className="link">{nameUser}</Link>
                <span> &nbsp; | &nbsp;</span>
                <a href="#" onClick={handleLogout} className="link">Sair</a>
              </div>
            </>
          )

        }
        
      </div>
    </header>

    <div className="relative">
      <div className="menu-mobile">
        <ul className="nav-mobile">
          <li><Link to="/about" className="link-menu-mobile">Sobre</Link></li>
          <li><Link to="/contact" className="link-menu-mobile">Contato</Link></li>
          <li className="py-2 pl-2">
          <form onSubmit={handleSearch} className="flex">
            <input type="text" name="search" placeholder="Buscar..." onChange={onChange} />
            <button className="btn-search"></button>
          </form>
          </li>
        </ul>

      </div>
    </div>

  </>
  );
}
  
export default Header;
  