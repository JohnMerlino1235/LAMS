import React, { useState, useRef, useEffect } from 'react';
import { useFormik } from "formik";
import HamburgerMenu from '../shared/HamburgerMenu';
import Ellipses from "../shared/Ellipses";
import Header from '../shared/Header';
import TextResults from './TextResults';
import { useParams } from 'react-router-dom';
import UserResults from './UserResults';

function Results() {
  const params  = useParams();

  return (
    <div className="root-syle">
      <Ellipses/>

      <HamburgerMenu />

      <Header/>

      <TextResults/>

      <UserResults />
    </div>
  );
}

export default Results
