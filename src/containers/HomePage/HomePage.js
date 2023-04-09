import React, { useState, useRef, useEffect } from "react";
import { useFormik } from "formik";
import { useParams } from 'react-router-dom';
import HamburgerMenu from "../shared/HamburgerMenu";
import Ellipses from "../shared/Ellipses";
import Header from "../shared/Header";
import TextHomePage from "./TextHomePage";
import ButtonsHomePage from "./ButtonsHomePage";
import Sheep from "../shared/sheep";
import HomeScreen from "./HomePageComponent";


function HomePage() {

  return (
    <div className="root-syle">

      <Ellipses/>

      <HamburgerMenu />
      
      <HomeScreen />

      <ButtonsHomePage/>

    </div>
  );
}

export default HomePage;
