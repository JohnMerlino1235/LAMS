import React, { useState } from 'react';
import { useFormik } from "formik";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Ellipses from "../shared/Ellipses";
import Header from '../shared/Header';
import InputsSignUp from './InputsSignUp';
import ButtonsSignUp from './ButtonsSignUp';


function SignUpPage() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },

    onSubmit: (values) => {
      axios
        .post("http://127.0.0.1:5000//signup", {
          email: values.email,
          password: values.password,
          first_name: values.firstName,
          last_name: values.lastName,
        })
        .then((response) => {
          if (response.data.success) {
            navigate("/log-in");
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

      <Header/>

      <InputsSignUp/>

      <ButtonsSignUp/>

    </form>
  );
}

export default SignUpPage
