import React from 'react';
import web from './home.jpg'
//import { NavLink } from 'react-router-dom';
import Common from './Common';



const  Home = () => {
  return (
    <>
        <Common
            name ="Grow Your Skills with" 
            imgsrc={web} 
            visit="/service" 
            btname="Get Started"
        />
    </>
  );
}

export default Home;
