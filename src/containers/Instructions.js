import React, { useState, useRef, useEffect } from 'react';
import { useFormik } from "formik";
import './css/home-page.css';
import Rectangle from 'react-rectangle';
import sheep from './sheep.gif';
import './css/hamburger-menu.css'
import HamburgerMenu from './HamburgerMenu';


function Instructions() {


    const formik = useFormik({
        initialValues: {
        },
        
        //TO-DO
        onSubmit: values => {
            console.log({ values });
        },
    });



  return (
    <form className="root-syle" onSubmit={formik.handleSubmit}>
      <div className="ellipses">
        <Rectangle className="ellipse-blue">
          <Rectangle className="ellipse-red"></Rectangle>
        </Rectangle>
      </div>

      <HamburgerMenu/>

      <div className="title">
        <h1>LAMS</h1>
        <p className="title-fix">Leg Activity Monitoring System</p>
        
      </div>

      <div className="sheep">
        <img src={sheep} className="sheep-image" alt="Loading..." />
      </div>

      <div className="title">
        <h2 className="title-fix">Learn To Properly Attach Device</h2>
      </div>

      <div className="welcome-message">
        <p className="welcome-text">
          Instructions: <br></br>
          1. <br></br>
          2. 
        </p>
      </div>

      <div className="buttons-home">
        <button className="button-style-home" type="submit">
          <a class="button-text" href="/calibrate">
            Calibrate
          </a>
        </button>
    </div>

    </form>
  );
};

export default Instructions;