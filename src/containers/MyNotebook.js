import React, { useState, useRef, useEffect } from 'react';
import { useFormik } from "formik";
import './css/home-page.css';
import Rectangle from 'react-rectangle';
import sheep from './sheep.gif';
import './css/hamburger-menu.css';
import HamburgerMenu from './HamburgerMenu';
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
      <div className="ellipses">
        <Rectangle className="ellipse-blue">
          <Rectangle className="ellipse-red"></Rectangle>
        </Rectangle>
      </div>

      <HamburgerMenu />

      <div className="title">
        <h1>LAMS</h1>
        <p className="title-fix">Leg Activity Monitoring System</p>
      </div>

      <div className="sheep">
        <img src={sheep} className="sheep-image" alt="Loading..." />
      </div>

      <div className="title">
        <h2 className="title-fix">My Notebook</h2>
      </div>

      <div className="date-picker">
        <DatePicker
          selected={startDate}
          // onSelect={handleDateSelect} //when day is clicked
          // onChange={handleDateChange} //only when value has changed
          onChange={(date) => setStartDate(date)}
        />
      </div>

      <div className="profile">
        <textarea
          className="input-box-notebook"
          id="notes"
          name="notes"
          type="notes"
          onChange={formik.handleChange}
          value={formik.values.notes}
          placeholder="How do you feel today?"
          required
        />
      </div>

      <div className="buttons">
        <button className="button-style" type="submit">
          <a className="button-text">Save</a>
        </button>
      </div>
    </form>
  );
}

export default MyNotebook
