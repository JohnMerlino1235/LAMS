import React, { useState, useRef, useEffect } from 'react';
import { useFormik } from "formik";
import HamburgerMenu from '../shared/HamburgerMenu';
import Ellipses from "../shared/Ellipses";
import Header from '../shared/Header';
import TextCalibrate from './TextCalibrate';
import ButtonsCalibrate from './ButtonsCalibrate';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";




function Calibrate() {


  const params = useParams();
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {},

    onSubmit: (values) => {
      axios
        .post("http://127.0.0.1:5000//device_pairing")
        .then((response) => {
          if (response.data.success) {
            navigate(`/exercise/${params.email}/${response.data.comport_name}`);
          }
        })
        .catch((error) => {
          console.log(error);
        })
    }
  })

  return (
    <form className="root-syle" onSubmit={formik.handleSubmit}>
      <Ellipses/>

      <HamburgerMenu/>

      <Header/>

      <TextCalibrate/>

      <ButtonsCalibrate/>
      
    </form>
  );
};

export default Calibrate;