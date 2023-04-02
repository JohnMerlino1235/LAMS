import React, { useState } from 'react';
import { useFormik } from "formik";
import HamburgerMenu from '../shared/HamburgerMenu';
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import Ellipses from "../shared/Ellipses";
import Header from '../shared/Header';
import TextNotebook from './TextNotebook';
import CalendarNotebook from './CalendarNotebook';
import NotesNotebook from './NotesNotebook';
import ButtonsNotebook from './ButtonsNotebook';

function MyNotebook() {
  const formik = useFormik({
    initialValues: {
      notes: "",
    },

    onSubmit: (values) => {
      axios
        .post(`http://127.0.0.1:5000//fetch_user_from_db/${values.notes}`, {
          notes: values.notes,
        })
        .then((response) => console.log(response.data));
    }
  });

  const [startDate, setStartDate, handleDateSelect, handleDateChange] =
    useState(new Date())

  return (
    <form className="root-syle" onSubmit={formik.handleSubmit}>
      <Ellipses/>

      <HamburgerMenu />

      <Header/>

      <TextNotebook/>

      <CalendarNotebook/>

      <NotesNotebook/>

      <ButtonsNotebook/>
    </form>
  );
}

export default MyNotebook
