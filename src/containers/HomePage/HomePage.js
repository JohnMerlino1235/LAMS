import React, { useState, useRef, useEffect } from "react";
import { useFormik } from "formik";
import { useParams } from 'react-router-dom';
import HamburgerMenu from "../shared/HamburgerMenu";
import Ellipses from "../shared/Ellipses";
import Header from "../shared/Header";
import TextHomePage from "./TextHomePage";
import ButtonsHomePage from "./ButtonsHomePage";


function HomePage() {
  const formik = useFormik({
    initialValues: {},

    // TO-DO
    onSubmit: (values) => {
      console.log({ values });
    },
  });

  const params = useParams()

  return (
    <form className="root-syle" onSubmit={formik.handleSubmit}>

      <Ellipses/>

      <HamburgerMenu />

      <Header/>

      <TextHomePage/>

      <ButtonsHomePage/>

    </form>
  );
}

export default HomePage;
