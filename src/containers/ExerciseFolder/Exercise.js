import React, { useState, useRef, useEffect } from 'react';
import { useFormik } from "formik";
import './css/home-page.css';
import Rectangle from 'react-rectangle';
import sheep from './sheep.gif';
import './css/hamburger-menu.css';
import HamburgerMenu from '../HamburgerMenuFolder/HamburgerMenu';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
          if (response) {
            // this is the data from the device
            console.log(response);
          }
        })
        .catch((error) => {
          console.log(error);
        })
    },
  })

  return (
    <form className="root-syle" onSubmit={formik.handleSubmit}>
      <div className="ellipses">
        <Rectangle className="ellipse-blue">
          <Rectangle className="ellipse-red"></Rectangle>
        </Rectangle>
      </div>

      <HamburgerMenu />

      <div className="title">
        <h1>LAMS</h1>
        <p className="title-fix">Leg Activity Monitoring System</p>
      </div>

      <div className="sheep">
        <img src={sheep} className="sheep-image" alt="Loading..." />
      </div>

      <div className="title">
        <h2 className="title-fix">Exercise</h2>
      </div>
      <button type="submit">
        Click to start exercise
      </button>
    </form>
  );
}

export default Exercise
