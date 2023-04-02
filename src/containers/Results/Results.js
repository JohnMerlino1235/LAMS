import React, { useState, useRef, useEffect } from 'react';
import { useFormik } from "formik";
import HamburgerMenu from '../shared/HamburgerMenu';
import Ellipses from "../shared/Ellipses";
import Header from '../shared/Header';
import TextResults from './TextResults';

function Results() {
  const formik = useFormik({
    initialValues: {},

    // TO-DO
    onSubmit: (values) => {
      console.log({ values });
    }
  });

  return (
    <form className="root-syle" onSubmit={formik.handleSubmit}>
      <Ellipses/>

      <HamburgerMenu />

      <Header/>

      <TextResults/>
    </form>
  );
}

export default Results
