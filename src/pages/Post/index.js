


import Header from '../Header';
import Footer from '../Footer';
import { useParams } from 'react-router-dom';
import api from 'services/api';

import { useEffect, useState } from 'react';

const Post = () => {

  const { idPost } = useParams();

  const [post, setPost] = useState([]);
  const [user, setUser] = useState([]);

  //console.log(idPost);

  useEffect(() => {

    if(idPost){

      api.get("/posts/" + idPost)
      .then((response) => {
        setPost(response.data);

        console.log('teste');
        console.log(response.data);

        api.get("/user/" + response.data.id_user)
        .then((r) => {

          setUser(r.data);

          //console.log(r.data);
        })
      })

    }
    
  }, [idPost])

  

    return (
        <>
          <Header />
          
          <section className="container">
            <h6 className="uppercase color-primary text-center">{ post.category }</h6>
            <h3 className="text-center">{ post.title }</h3>

            <div className="flex-center my-3">
                <div className="profile">
                  <img src={user.ImageProfile} className="profile-img" alt="" />
                </div>
                <div className="ml-2">
                  <h6 className="color-primary">{ user.name + " " + user.surname}</h6>
                  <h6 className="color-gray"> @{ user.user }</h6>
                </div>
                <p className="ml-4">{ post.date} - {post.duration}min read</p>
            </div>

            <div className="img-banner hidden">
              <img src={post.imageUrl} alt="" />
            </div>

            <div className="row my-3">
                <h4>Esse aqui é o primeiro título</h4>
                <p className="mt-1">
                  {post.content}
                </p>
            </div>

            <div className="row">
                <div className="grid-3 disappear"></div>
                <div className="grid-6 card">
                    <div className="row">
                        <div className="grid-3 flex-center pl-1">
                            <div className="profile-big">
                              <img src={user.ImageProfile} className="profile-img" alt="" />
                            </div>
                        </div>
                        <div className="grid-9">
                            <h6 className="color-primary">{ user.name + " " + user.surname}</h6>
                            <h6 className="color-gray">{user.user}</h6>
                            <p className="mt-1">
                                {user.description}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid-3 disappear"></div>
            </div>

        </section>
          



          <Footer />
        </>
      );
}
  
export default Post;