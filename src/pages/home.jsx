import React from "react";

import MenuNav from '../components/MenuHome/index';
import DivPrincipalHomePage from '../components/DivPrincipalHomePage/index';
import QuemSomos from '../components/QuemSomos/index';
import Localiza from '../components/LocalizaCursinho/index';


const Home = () => {
  return (
    <div>
      <MenuNav />
      <DivPrincipalHomePage/>
      <QuemSomos />
      <Localiza/>
    </div>
  );
};

export default Home;
