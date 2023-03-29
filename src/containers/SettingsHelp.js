import React, { useState, useRef, useEffect } from 'react';
import { useFormik } from "formik";
import './css/home-page.css';
import Rectangle from 'react-rectangle';
import sheep from './sheep.gif';
import './css/hamburger-menu.css';
import { useParams } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';

function SettingsHelp() {
  const params = useParams()

  const formik = useFormik({
    initialValues: {},

    // TO-DO
    onSubmit: (values) => {
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

      <HamburgerMenu />

      <div className="title">
        <h1>LAMS</h1>
        <p className="title-fix">Leg Activity Monitoring System</p>
        <h2 className="title-fix">Settings</h2>
      </div>

      <div className="sheep">
        <img src={sheep} className="sheep-image" alt="Loading..." />
      </div>
    </form>
  );
}

export default SettingsHelp
