

import {Link} from 'react-router-dom';
import api from 'services/api';

import { useState, useEffect } from 'react';


const Main = ( {content} ) => {

    const [user, setUser] = useState([]);


    useEffect(() => {

        api.get("/user/" + content.id_user)
        .then((response) => {
            setUser(response.data);
        })

    }, [])


    return (
        <>
          {/* ======== MAIN POSTS ========*/}
          <div className="py-3 bb-black ">

            <h6 className="color-gray"> {content.date} </h6>
            <h6 className="uppercase color-primary"> {content.category} </h6>

            <Link to={"/post/" + content.id} className="link-title">
                <h4 className="mt-1"> {content.title} </h4>
            </Link>
                
            <p className="mt-2">
                {content.resume}
            </p>
            <div className="mt-2 flex-space">
                <div className="flex-start-row">
                    <div className="profile">
                        <img src={user.ImageProfile} className="profile-img" alt=""/>
                    </div>
                    <div className="ml-2">
                        <h6 className="color-primary">{user.name} {user.surname}</h6>
                        <h6 className="color-gray">@{user.user}</h6>
                    </div>
                </div>
            </div>
        </div>
      
        </>
      );
}
  
export default Main;