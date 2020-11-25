import React from "react";

import MenuNav from '../components/Home/MenuHome/index';
import DivPrincipalHomePage from '../components/Home/DivPrincipalHomePage/index';
import QuemSomos from '../components/Home/QuemSomos/index';
import Localiza from '../components/Home/LocalizaCursinho/index';
import Footer from '../components/Home/Footer/index';
import Apoiadores from '../components/Home/Patrocinadores/index';


const Home = () => {
  return (
    <div>
      <MenuNav />
      <DivPrincipalHomePage/>    
      <QuemSomos />    
      <Localiza/>
      <Apoiadores/>
      <Footer/>
    </div>
  );
};

export default Home;
