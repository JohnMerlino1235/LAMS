import React, { useState } from 'react';
import { useFormik } from "formik";
import lamb from './Lamb.png'

const SignUpPage = () => {
    const mystyle = {
        color: "black",
        padding: "10px",
        textAlign: "center",
      };
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            console.log({ values });
        },
    });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleFirstNameChange = event => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = event => {
    setLastName(event.target.value);
  };

  const handleHeightChange = event => {
    setHeight(event.target.value);
  };

  const handleWeightChange = event => {
    setWeight(event.target.value);
  };

  const handleCancel = event => {
    event.preventDefault();
    // void user's data and return to login page
  };

  const handleSignUp = event => {
    event.preventDefault();
    // validate user information
    // if valid, create account for user and store data in database
    // if invalid, alert user of reason
    // redirect to login page
  };

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
    <div>
        <div style={mystyle}>
                <h1>LAMS</h1>
                <p>Leg Activity Monitoring System</p>
                <p>Sign-Up Page:</p>
            </div>
      <form>
        <div>
          Email: 
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <br />
        <div>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <br />
        <div>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
        </div>
        <br />
        <div>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
        </div>
        <br />
        <div>
          Height:
          <input
            type="number"
            value={height}
            onChange={handleHeightChange}
            required
          />
        </div>
        <br />
        <div>
          Weight:
          <input
            type="number"
            value={weight}
            onChange={handleWeightChange}
            required
          />
        </div>
        <br />
        <button onClick={handleSignUp}>Sign Up</button>
        <button onClick={handleCancel}>Cancel</button>
      </form>
    </div>
    </form>
  );
};

export default SignUpPage;