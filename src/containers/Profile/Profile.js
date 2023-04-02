import React, { useState } from 'react';
import { useFormik } from "formik";
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import HamburgerMenu from '../shared/HamburgerMenu';
import Ellipses from "../shared/Ellipses";
import Header from '../shared/Header';
import InputsProfile from './InputsProfile';
import ButtonsProfile from './ButtonsProfile';

function Profile() {
  const navigate = useNavigate()

  const params = useParams()

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },

    onSubmit: (values) => {
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

  const [menuDisabled, setMenuDisabled] = useState(true)

  const handleCheckboxChange = (event) => {
    setMenuDisabled(!event.target.checked);
  };

  return (
    <form className="root-syle" onSubmit={formik.handleSubmit}>
      <Ellipses/>

      <HamburgerMenu />

      <Header/>

      <InputsProfile/>

      <ButtonsProfile/>

    </form>
  );
}

export default Profile
