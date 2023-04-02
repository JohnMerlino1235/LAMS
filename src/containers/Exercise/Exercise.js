import React, { useState, useRef, useEffect } from 'react';
import { useFormik } from "formik";


import { useParams } from 'react-router-dom';
import axios from 'axios';
import HamburgerMenu from '../shared/HamburgerMenu';
import Ellipses from "../shared/Ellipses";
import Header from '../shared/Header';
import TextExercise from './TextExercise';
import ButtonsExercise from './ButtonsExercise';


function Exercise() {
  const params = useParams();
  console.log(params);

  const formik = useFormik({
    initialValues: {},

    // TO-DO
    onSubmit: (values) => {
      console.log(params);
      axios
        .post("http://127.0.0.1:5000//read_data", {
          com_port: params.comPort,
        })
        .then((response) => {
          console.log(response);
          if (response) {
            // this is the data from the device
            console.log(response);
            axios
            .post("http://127.0.0.1:5000//data_filter", {
              data_list: response.data.data,
            })
            .then((response) => {
              console.log(response);

              if (response) {
                // this is the data from the device
                console.log(response);
              }
            })
            .catch((error) => {
              console.log(error);
            })
          }
        })
        .catch((error) => {
          console.log(error);
        })
    },
  })

  return (
    <form className="root-syle" onSubmit={formik.handleSubmit}>
      <Ellipses/>

      <HamburgerMenu />

      <Header/>

      <TextExercise/>

      <ButtonsExercise/>
     
    </form>
  );
}

export default Exercise
