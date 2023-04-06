import React, { useState } from 'react';
import { useFormik } from "formik";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Ellipses from "../shared/Ellipses";
import Header from '../shared/Header';
import InputsSignUp from './InputsSignUp';
import ButtonsSignUp from './ButtonsSignUp';
import SignUpForm from './SignupForm';


function SignUpPage() {
  return (
    <div className="root-syle">
      <Ellipses/>

      <Header/>

      <SignUpForm />
    </div>
  );
}

export default SignUpPage
