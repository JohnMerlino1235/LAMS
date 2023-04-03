import React, { useState, useRef, useEffect } from 'react';
import { useFormik } from "formik";
import HamburgerMenu from '../shared/HamburgerMenu';
import Ellipses from "../shared/Ellipses";
import Header from '../shared/Header';
import { useParams } from 'react-router-dom';
import TextInstructions from './TextInstructions';
import ButtonsInstructons from './ButtonsInstructions';

function Instructions() {
  const params = useParams()
  
  const formik = useFormik({
    initialValues: {},

    // TO-DO
    onSubmit: (values) => {
      console.log({ values });
    },
  });

  return (
    <form className="root-syle" onSubmit={formik.handleSubmit}>
      <Ellipses/>

      <HamburgerMenu />

      <Header headerName={"Text Instructions"}/>

      <TextInstructions/>

      <ButtonsInstructons/>
    </form>
  );
}

export default Instructions
