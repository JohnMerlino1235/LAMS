import React, { useState } from 'react';
import { useFormik } from "formik";
import axios from "axios";
import Ellipses from "../shared/Ellipses";
import Header from '../shared/Header';
import InputsDetails from './InputsDetails';
import ButtonsDetails from './ButtonsDetails';
import TextDetails from './TextDetails';

function PersonalDetailsPage() {
  const mystyle = {
    color: "black",
    padding: "10px",
    textAlign: "center",
  };
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      height: '',
      weight: '',
      targetArea: '',
    }
  });

  return (
    <form style={mystyle} onSubmit={formik.handleSubmit}>
      <Ellipses/>

      <Header/>
      <TextDetails/>

      <InputsDetails/>

      <ButtonsDetails/>



    </form>
  );
}

export default PersonalDetailsPage
