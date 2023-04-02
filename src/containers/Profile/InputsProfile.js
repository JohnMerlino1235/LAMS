import React, { useState } from 'react';
import { useFormik } from "formik";
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function InputsProfile() {
    const formik = useFormik({
        initialValues: {
          name: "",
          email: "",
        },
    
        onSubmit: (values) => {
          // console.log({ values });
          axios
            .post(`http://127.0.0.1:5000//fetch_user_from_db/${values.email}`, {
              email: values.email,
            })
            .then((response) => console.log(response.data));
    
          axios
            .post(`http://127.0.0.1:5000//fetch_user_from_db/${values.name}`, {
              name: values.name,
            })
            .then((response) => console.log(response.data));
        }
    });
    return(
        <div>
        <div className="profile">
        <div>Name:</div>

        <input
          className="input-box-profile"
          id="name"
          name="name"
          type="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          placeholder="Name"
          required
        />
      </div>

      <div className="profile">
        <div>Email:</div>

        <input
          className="input-box-profile"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="Email"
          required
        />
      </div>

      <div className="profile">
        <div>Height:</div>

        <input
          className="input-box-profile"
          id="height"
          name="height"
          type="height"
          onChange={formik.handleChange}
          value={formik.values.height}
          placeholder="Height"
          required
        />
      </div>

      <div className="profile">
        <div>Weight:</div>

        <input
          className="input-box-profile"
          id="weight"
          name="weight"
          type="weight"
          onChange={formik.handleChange}
          value={formik.values.weight}
          placeholder="Weight"
          required
        />
      </div>
      </div>
    )
}

export default InputsProfile;