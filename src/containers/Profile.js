import React, { useState, useRef, useEffect } from 'react';
import { useFormik } from "formik";
import './css/home-page.css';
import Rectangle from 'react-rectangle';
import sheep from './sheep.gif';
import { useParams } from 'react-router-dom';
import './css/hamburger-menu.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import HamburgerMenu from './HamburgerMenu';

function Profile() {

  let navigate = useNavigate();

  const params = useParams()


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
            
        },
        // {
        //   axios
        //     .post(`http://127.0.0.1:5000//fetch_user_from_db/${values.name}`, {
        //       name: values.name,
        //     })
        //     .then((response) => console.log(response.data));
        // }
    });

    const [menuDisabled, setMenuDisabled] = useState(true);

    const handleCheckboxChange = (event) => {
      setMenuDisabled(!event.target.checked);
    };

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
        <h2 className="title-fix">Profile</h2>
      </div>

      <div className="sheep">
        <img src={sheep} className="sheep-image" alt="Loading..." />
      </div>

      <div className="profile">
        <div>
          Name:
        </div>

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
        <div>
          Email:
        </div>

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
        <div>
          Height:
        </div>

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
        <div>
          Weight:
        </div>

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

      <div className="buttons-home">
        <button className="button-style-home" type="submit">
          <a class="button-text" href={`/forgot-password/${params.email}`}>
            Change Password
          </a>
        </button>
       </div>

       <div className="buttons-2nd-row">
        <button className="button-style" type="submit">
        <a class="button-text">
            Cancel
          </a>
        </button>
        <button className="button-style">
          <a class="button-text">
            Save
          </a>
        </button>
      </div>
      

    </form>
  );
};

export default Profile;