import React, { useState, useRef, useEffect } from 'react';
import { useFormik } from "formik";
import './css/home-page.css';
import Rectangle from 'react-rectangle';
import sheep from './sheep.gif';
import './css/hamburger-menu.css';
import HamburgerMenu from './HamburgerMenu';
import axios from 'axios';

function Calibrate() {
  const [comPort, setComPort] = useState("");
  console.log(comPort);
  const formik = useFormik({
    initialValues: {},

    onSubmit: (values) => {
      axios
        .post("http://127.0.0.1:5000//device_pairing")
        .then((response) => {
          if (response) {
            setComPort(response.data.comport_name);
          }
        })
        .catch((error) => {
          console.log(error);
        })
    }
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
        <h2 className="title-fix">Wait for Calibration...</h2>
      </div>

      <div className="buttons-home">
        <button className="button-style-home" type="submit">
          <a className="button-text" href="/exercise">
            Next
          </a>
        </button>

        <button className="button-style-home" type="submit">
          <a className="button-text" href="/instructions">
            Back
          </a>
        </button>
      </div>
    </form>
  );
}

export default Calibrate
