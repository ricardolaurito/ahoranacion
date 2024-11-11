

import Header from '../Header';
import Footer from '../Footer';

import BlogHome from '../../svg/blog.svg';

function About() {
    return (
      <>
        <Header />


        {/* ======== SECTION ABOUT ========*/}
        <section className="container flex-center">
          <div className="row mt-9">
            <div className="grid-4">
              <h1 className="h0">blog<span>.</span> </h1>
              <p className="mt-1"> 
                Trata-se de uma aplicação feita em React.js para 
                aprendizagem da biblioteca dentro do curso FrontPUSH.
              </p>
              <a 
              href="https://www.frontpush.com.br/" 
              target="_blank" 
              className="btn mt-2"
              rel="noreferrer"
              >Quero ver mais</a>

              </div>
              <div className="grid-1"></div>

              <div className="grid-6 flex-center">
                <img src={BlogHome} alt="" />
              </div>

              <div className="grid-1"></div>
          </div>
        </section>

        
        <Footer />
      </>
    );
}
  
export default About;
  