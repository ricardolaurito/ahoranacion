

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Post from './pages/Post';
import NotFound from './pages/NotFound';
import Search from 'pages/Search';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Context from 'pages/Context';
import { useContext } from 'react';


function PrivateRoute({ children }) {
  const { token } = useContext(Context);

  return token ? children : <Navigate to="/login" />;
}

const Paths = () => {
  return (
    <>
    
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="login" element={<Login/>}/>

          <Route path="profile" 
          element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
          } />  

          <Route path="post/:idPost" element={<Post/>}/>
          <Route path="search/:word_search" element={<Search/>}/>

          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default Paths;