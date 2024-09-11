import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header>
      <div id='image-div'>
        <div>
          <img style={{marginLeft : 50}} height='200' src="https://res.cloudinary.com/dhptzqzqd/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1726048208/305666982_5389525247803807_1663113495869955407_n_nopqfq.jpg" alt="Udhay Kiran" />
        </div>
        <div style={{marginLeft :100}}>
         <h1>Udhay Kiran Kaitha</h1>
         <h4>Full Stack web-Developer</h4>
         <h5 style={{marginTop : 5}}>Email : udhaykaitha575@gmail.com</h5>
         <h5 style={{marginTop : 5}}>Phone : 6305465943</h5>
      <nav>
        <ul style={{position:"relative",top:25}}>
          <li ><a href="#about">About</a></li>
          <li ><a href="#projects">Projects</a></li>
          <li ><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      </div>
      <div style={{marginLeft : 200}}>
        <img src='https://res.cloudinary.com/dhptzqzqd/image/upload/c_thumb,w_200,g_face/v1726049729/vecteezy_software-engineer-png-graphic-clipart-design_20962986_eynebf.png'/>
      </div>
      </div>

    </header>
  );
};

export default Header;
