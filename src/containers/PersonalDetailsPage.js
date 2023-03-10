import React, { useState } from 'react';
import { useFormik } from "formik";
import lamb from './Lamb.png'
import axios from "axios";

function PersonalDetailsPage() {
  const mystyle = {
    color: "black",
    padding: "10px",
    textAlign: "center",
  };
const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      height: '',
      weight: '',
      targetArea: ''
    }
});


return (
    <form style={mystyle} onSubmit={formik.handleSubmit}>
    <div>
        <img
            src={lamb}
            alt="LAMB"
            style={{
                width: "100px",
                borderRadius: "50%",
                objectFit: "cover",
                marginTop: "0"
            }}
        />
    </div>
        <div style={mystyle}>
            <h1>LAMS</h1>
            <p>Leg Activity Monitoring System</p>
            <h2>Personal Details</h2>
        </div>
        <div style={mystyle}>
            <label htmlFor="firstName">First Name:</label>
            <div>
                <input
                    id="firstName"
                    name="firstName"
                    type="firstName"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                />
            </div>
        </div>
        <div style={mystyle}>
            <label htmlFor="lastName">Last Name:</label>
            <div>
                <input
                    id="lastName"
                    name="lastName"
                    type="lastName"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                />
            </div>
        </div>
        <div style={mystyle}>
            <label htmlFor="email">Email Address:</label>
            <div>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
            </div>
        </div>
        <div style={mystyle}>
            <label htmlFor="height">Height:</label>
            <div>
                <input
                    id="height"
                    name="height"
                    type="height"
                    onChange={formik.handleChange}
                    value={formik.values.height}
                />
            </div>
        </div>
        <div style={mystyle}>
            <label htmlFor="weight">Weight:</label>
            <div>
                <input
                    id="weight"
                    name="weight"
                    type="weight"
                    onChange={formik.handleChange}
                    value={formik.values.weight}
                />
            </div>
        </div>
        <div style={mystyle}>
        <label htmlFor="targetArea">Target Area:</label>
            <div>
                <select
                  id="targetArea"
                  name="targetArea"
                  type="targetArea"
                  onChange={formik.handleChange}
                  value={formik.values.targetArea}>
                  <option value="upperLeg">Upper Leg</option>
                  <option value="lowerLeg">Lower Leg</option>
                </select>
            </div>
        </div>
        <div style={mystyle}>
        <button>
                <a href="/forgot-password" class="href">
                    Change Password
                </a>
            </button>
        </div>
</form>
  );
}

export default PersonalDetailsPage;