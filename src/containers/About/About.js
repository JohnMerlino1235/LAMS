import React, { useState, useRef, useEffect } from 'react';
import { useFormik } from "formik";
import { useParams } from 'react-router-dom';
import HamburgerMenu from "../shared/HamburgerMenu";
import Ellipses from "../shared/Ellipses";
import Header from '../shared/Header';


function About() {
  const params = useParams()

    const formik = useFormik({
        initialValues: {},
        
        //TO-DO
        onSubmit: (values) => {
            console.log({ values });
        },
    });

  return (
    <form className="root-syle" onSubmit={formik.handleSubmit}>
      <Ellipses/>

      <HamburgerMenu/>

      <Header headerName={'About'}/>

      <p style={{textAlign: "center", marginLeft: "8%", marginRight: "8%"}}>
        <b>We are LAMS! </b>
        <br></br>
        The LAMS team has designed and built an at-home monitoring system for persons recovering from an injury involving the biceps femoris, vastus lateralis, and soleus muscles of the leg. Such a system is aimed at providing a bridge between clinical recovery and at-home exercises while ensuring patient accountability. Our system has a wide range of potential applications such as remotely monitoring muscle recovery and strengthening and introducing surface electromyography (sEMG) data to a clinical setting in an easy-to-understand format for physical therapists unfamiliar with sEMG data.

      </p>

    </form>
  );
};

export default About;