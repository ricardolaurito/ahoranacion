

import IconFacebook from '../../svg/icon-facebook.svg';
import IconInstagram from '../../svg/icon-instagram.svg';
import IconYoutube from '../../svg/icon-youtube.svg';
import IconTwitter from '../../svg/icon-twitter.svg';
import BlogLogo from '../../svg/blog-logo2.svg';

import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <>
    <footer className="bg-section bt-black">
        <section className="container pb-0 ">
            <div className="row flex-center">
              <img src={BlogLogo} className="icon-l" alt=""></img>
            </div>

            <div className="row pb-3 bb-black">
                <div className="grid-3">
                    <h4>Posts</h4>
                    <div className="flex-start-column mt-2">
                        <Link to="/post" className="color-gray link-footer">Mais vistos</Link>
                        <Link to="/post" className="color-gray link-footer">Mais comentados</Link>
                        <Link to="/post" className="color-gray link-footer ">Mais populares</Link>
                        <Link to="/post" className="color-gray link-footer">Mais recentes</Link>
                    </div>
                    
                </div>

                <div className="grid-3">
                    <h4>Categorias</h4>
                    <div className="flex-start-column mt-2">
                        <Link to="/post" className="color-gray link-footer">Tecnologia</Link>
                        <Link to="/post" className="color-gray link-footer">Games</Link>
                        <Link to="/post" className="color-gray link-footer">Fotografia</Link>
                        <Link to="/post" className="color-gray link-footer">Cinema</Link>
                    </div>
                </div>

                <div className="grid-6">
                    <h4 className="mb-2">Quer ser avisado dos novos posts do blog?</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Ornare urna pharetra ut ac, pellentesque. 
                    </p>
                    <div className="flex-start-row mt-2">
                      <input type="text" name="search" id="" placeholder="Digite seu e-mail aqui" />
                      <button className="btn ml-2">Cadastrar</button>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="grid-9">
                    <p>2021 | Todos os direitos reservados. 
                      Projeto de React.js do curso &nbsp;
                      <a 
                      href="https://www.frontpush.com.br/" 
                      target="_blank"
                      rel="noreferrer"
                      >FrontPUSH.
                      </a> 
                    </p>
                </div>

                <div className="grid-3">
                    <img src={IconFacebook} className="icon-s" alt="" />
                    <img src={IconInstagram} className="icon-s ml-2" alt="" />
                    <img src={IconYoutube} className="icon-s ml-2" alt="" />
                    <img src={IconTwitter} className="icon-s ml-2" alt="" />
                </div>
            </div>

            

        </section>
    </footer>
      </>
    );
}
  
export default Footer;
  