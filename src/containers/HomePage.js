import React, { useState, useRef, useEffect } from "react";
import { useFormik } from "formik";
import "./css/home-page.css";
import Rectangle from "react-rectangle";
import sheep from "./sheep.gif";
import "./css/hamburger-menu.css";
import { useParams } from 'react-router-dom';
import HamburgerMenu from "./HamburgerMenu";

function HomePage() {
  const formik = useFormik({
    initialValues: {},

    //TO-DO
    onSubmit: (values) => {
      console.log({ values });
    },
  });

  const params = useParams()


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
        <h2 className="title-fix">Home</h2>
      </div>

      <div className="sheep">
        <img src={sheep} className="sheep-image" alt="Loading..." />
      </div>

      <div className="welcome-message">
        <p className="welcome-text">
          Welcome Back {params.email}! <br></br>
          You still have exercises to do today...
        </p>
      </div>

      <div className="buttons-home">
        <button className="button-style-home" type="submit">
          <a class="button-text" href="/instructions">
            Exercise
          </a>
        </button>
        <button className="button-style-home" type="submit">
          <a class="button-text" href="/results">
            Results
          </a>
        </button>
        <button className="button-style-home" type="submit">
          <a class="button-text" href="/todo">
            My Notebook
          </a>
        </button>
      </div>
    </form>
  );
}

export default HomePage;
