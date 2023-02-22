import React, { useState, useRef, useEffect } from 'react';
import { useFormik } from "formik";
import './css/home-page.css';
import Rectangle from 'react-rectangle';
import sheep from './sheep.gif';
import './css/hamburger-menu.css'


function About() {

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

      <nav className="hamburgerMenu" role="navigation">
        <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
            <a href="home-page"><li>Home</li></a>
            <a href="profile"><li>Profile</li></a>
                <a href="messages"><li>Messages</li></a>
                <a href="settings-help"><li>Settings/Help</li></a>
                <a href="about"><li>About</li></a>
            </ul>
        </div>
      </nav>

      <div className="title">
        <h1>LAMS</h1>
        <p className="title-fix">Leg Activity Monitoring System</p>
        <h2 className="title-fix">Profile</h2>
      </div>

      <div className="sheep">
        <img src={sheep} className="sheep-image" alt="Loading..." />
      </div>

    </form>
  );
};

export default About;