import React, { useState, useRef, useEffect } from 'react';
import { useFormik } from "formik";

import { useParams } from 'react-router-dom';
import HamburgerMenu from '../shared/HamburgerMenu';
import Ellipses from "../shared/Ellipses";
import Header from '../shared/Header';

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
      <Ellipses/>

      <HamburgerMenu />

      <Header headerName={'Settings'}/>

      <div className="buttons">
        <button className="button-style-else" type="submit">
          <a className="button-text" href={`/forgot-password`}>
            Change Password
          </a>
        </button>
      </div>

    </form>
  );
}

export default SettingsHelp
