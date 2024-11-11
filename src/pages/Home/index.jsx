


import Header from '../Header';
import Footer from '../Footer';
//import axios from 'axios';
import api from  '../../services/api';
import { useEffect, useState } from 'react';

// Components Home
import Hero from './Hero/';
import Main from './Main/';
import Banner from './Banner/';
import Card from './Card';

// Images
import iconStar from 'svg/icon-star.svg';

const Home = () => {

  let post = {
    "id": 1,
    "id_user": 1,
    "date": "14 NOV 2021",
    "imageUrl": "https://nyousefali.com.br/blog/img/01.png",
    "category": "games",
    "title": "O que tem de novo no PS5?",
    "resume": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque. Ultricies habitasse pretium purus viverra.",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque. Ultricies habitasse pretium purus viverra.",
    "duration": "10min"
  }

  // Variáveis de estado
  const [mostseen, setMostseen] = useState([]);
  const [main, setMain] = useState([post]);
  const [banner, setBanner] = useState([]);


  /* 
  HOOK USEEFFECT PARA PUXAR OS DADOS DA API
  ==========================================
  É utilizado o hook useEffect aqui pois 
  quero que ele puxe os dados apenas quando o 
  componente montar, por isso tem o array vazio
  como parâmetro [].

  Se eu colocasse ele fora do useEffect, toda 
  vez que o componente Home fosse 
  atualizado, iria ser feita uma nova requisição.
  */
  useEffect(() => {

    api.get('/posts?_limit=3')
    .then((response)=>{
      setMostseen(response.data);
      //console.log(mostseen);
    })

    
    api.get('/posts?star=5&_limit=3')
    .then((response)=>{
      setMain(response.data);
      //console.log(response.data);
    })


    api.get('/posts?_sort=date&_order=desc&_limit=1')
    .then((response)=>{
      setBanner(response.data);
      console.log(response.data);
    })

  }, []);

  

  return (
    <div>
      <Header />

      <Hero />


      <section className="container">
        <div className="row">
            <div className="grid-5 pt-5 pb-3 bb-black">

              <img src={iconStar} className="icon-l my-2" alt="" />
              <h6 className="uppercase color-primary"> OS MELHORES </h6>
              <h2 className="mt-1"> Os posts mais bem votados </h2>
              <p className="my-1">
                A seguir serão listados os 3 posts com 5 estrelas nas 
                votações. Leia e vote também.
              </p>


            </div>
            <div className="grid-7">

              {
                /*==================================================== 
                Abrir os dados do array mostseen e plotar no componente
                Main, que é a seção onde tem os posts mais bem votados.
                =====================================================*/
                main.map((item) => {
                  return <Main key={item.id} content={item} />
                })
              }

                
            </div>
        </div>
    </section>




      <div className="bg-section">
        <section className="container">
          <h3 className="ml-2 mb-3">Mais vistos</h3>
            <div className="row">

              
              {
                /*==================================================== 
                Abrir os dados do array mostseen e plotar no componente
                MostSeen, que é a seção onde tem os posts mais vistos.
                =====================================================*/
                mostseen.map((item) => {
                  return <Card key={item.id} content={item} />
                })
              }


            </div>
        </section>
      </div>



      {
      /*==================================================== 
        Abrir os dados do array mostseen e plotar no componente
        Banner, que é a seção onde tem o post mais recente cadastrado.
      =====================================================*/
        banner.map((item) => {
          return <Banner key={item.id} content={item} />
        })
      }

      


      <Footer />
    </div>
  );
}
  
export default Home;
  