import React, { useState } from 'react';
import { useFormik } from "formik";
import './global.css';
import Rectangle from 'react-rectangle';
import sheep from './sheep.gif';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUpPage() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },

    onSubmit: (values) => {
      axios
        .post("http://127.0.0.1:5000//signup", {
          email: values.email,
          password: values.password,
          first_name: values.firstName,
          last_name: values.lastName,
        })
        .then((response) => {
          if (response.data.success) {
            navigate("/log-in");
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

      <div className="title">
        <h1>LAMS</h1>
        <p className="title-fix">Leg Activity Monitoring System</p>
        <h2 className="title-fix">Sign Up</h2>
      </div>

      <div className="sheep">
        <img src={sheep} className="sheep-image" alt="Loading..." />
      </div>

      <div className="inputs">
        <input
          className="input-box"
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          placeholder="First Name"
          required
        />
        <input
          className="input-box"
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
          placeholder="Last Name"
          required
        />
        <input
          className="input-box"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="Email"
          required
        />
        <input
          className="input-box"
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="Password"
          required
        />
      </div>

      <div className="buttons">
        <button className="button-style" type="submit">
          Create Account
        </button>
        <button
          className="button-style"
          onClick={() => navigate('/log-in')}
        ></button>
      </div>
    </form>
  );
}

export default SignUpPage
