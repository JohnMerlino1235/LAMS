import React, { useState, useRef, useEffect } from 'react';
import { useFormik } from "formik";
import './css/home-page.css';
import Rectangle from 'react-rectangle';
import sheep from './sheep.gif';
import './css/hamburger-menu.css'
import { useParams } from 'react-router-dom';


function Profile() {
  const params = useParams()


    const formik = useFormik({
        initialValues: {
        },
        
        //TO-DO
        onSubmit: values => {
            console.log({ values });
        },
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

      <nav className="hamburgerMenu" role="navigation">
        <div id="menuToggle">
            <input
             id="check"
             type="checkbox"
             onChange={handleCheckboxChange}
             checked={!menuDisabled} />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
            <a href={`/home-page/${params.email}`}><li>Home</li></a>
                <a href={`/profile/${params.email}`}><li>Profile</li></a>
                <a href={`/messages/${params.email}`}><li>Messages</li></a>
                <a href={`/settings-help/${params.email}`}><li>Settings/Help</li></a>
                <a href={`/about/${params.email}`}><li>About</li></a>
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

export default Profile;