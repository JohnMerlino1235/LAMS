import React, { useState } from 'react';
import { useFormik } from "formik";
import './global.css';
import Rectangle from 'react-rectangle';
import sheep from './sheep.gif';


function SignUpPage() {

    //once we decide to format it to "Login.js":
    const mystyle = {
        color: "black",
        padding: "-100px",
        textAlign: "center",
      };
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            height: '',
            weight: '',
            targetArea: ''
        },
        //TO-DO
        onSubmit: values => {
            console.log({ values });
        },
    });

  return (
    <form className={mystyle} onSubmit={formik.handleSubmit}>
      <div className="Global-ellipses">
          <Rectangle className="Global-ellipse-blue">
            <Rectangle className="Global-ellipse-red">
            </Rectangle>
          </Rectangle>
      </div>
      <div style={mystyle}>
          <h1>LAMS</h1>
          <p>Leg Activity Monitoring System</p>
          <h2>Sign Up</h2>
      </div>
      <div className="Global-sheep-div">
            <img src={sheep} className="Global-sheep" alt="Loading..."/>
      </div>
      <div className="Global-test">
        <div>
          <input className="Global-input-box"
            id='firstName'
            name='firstName'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.firstName}
            placeholder='First Name'
            required
            />
        </div>
      </div>
      <div className="Global-test-2">
        <div>
          <input className="Global-input-box"
            id='lastName'
            name='lastName'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.lastName}
            placeholder='Last Name'
            required
            />
        </div>
      </div>
      <div className="Global-test-2">
        <div>
          <input className="Global-input-box"
            id='email'
            name='email'
            type='email'
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder='Email'
            required
            />
        </div>
      </div>
      <div className="Global-test-2">
        <div>
          <input className="Global-input-box"
            id='password'
            name='password'
            type='password'
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder='Password'
            required
            />
        </div>
      </div>
      <div className="Global-button-div">
        <button class="Global-button-sign-up" type="submit">
          <a class="Global-button-href-styling" href="/log-in">
            Create Account
          </a>
        </button>
        <button class="Global-button-sign-up" type="button">
          <a class="Global-button-href-styling" href="/log-in">
            Cancel
          </a>
        </button>
      </div>
    </form>
  );
};

export default SignUpPage;