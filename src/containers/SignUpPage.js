import React, { useState } from 'react';
import { useFormik } from "formik";
import lamb from './Lamb.png'


function SignUpPage() {

    //once we decide to format it to "Login.js":
    const mystyle = {
        color: "black",
        padding: "10px",
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

    //Template format just for now:
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
        <div style={mystyle}>
                <h1>LAMS</h1>
                <p>Leg Activity Monitoring System</p>
                <h2>Sign-Up Page:</h2>
            </div>
      {/* <form>
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
        <button type="submit">
          <a href="/log-in" class="href">
              Create Account
          </a>
        </button>
        <button>
          <a href="/log-in" class="href">
            Cancel
          </a>
          </button>
      </form> */}
      <div style ={mystyle}>
        <label htmlFor='firstName'>First Name:</label>
        <div>
            <input
                id='firstName'
                name='firstName'
                type='firstName'
                onChange={formik.handleChange}
                value={formik.values.firstName}
                />
        </div>
      </div>
      <div style ={mystyle}>
        <label htmlFor='lastName'>Last Name:</label>
        <div>
            <input
                id='lastName'
                name='lastName'
                type='lastName'
                onChange={formik.handleChange}
                value={formik.values.lastName}
                />
        </div>
      </div>
      <div style ={mystyle}>
        <label htmlFor='email'>Email Address:</label>
        <div>
            <input
                id='email'
                name='email'
                type='email'
                onChange={formik.handleChange}
                value={formik.values.email}
                />
        </div>
      </div>
      <div style ={mystyle}>
        <label htmlFor='password'>Password:</label>
        <div>
            <input
                id='password'
                name='password'
                type='password'
                onChange={formik.handleChange}
                value={formik.values.password}
                />
        </div>
      </div>
      <div style ={mystyle}>
        <label htmlFor='height'>Height:</label>
        <div>
            <input
                id='height'
                name='height'
                type='height'
                onChange={formik.handleChange}
                value={formik.values.height}
                />
        </div>
      </div>
      <div style ={mystyle}>
        <label htmlFor='weight'>Weight:</label>
        <div>
            <input
                id='weight'
                name='weight'
                type='weight'
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
      <button type="submit" onChange={formik.onSubmit}>
          <a href="/log-in" class="href">
              Create Account
          </a>
        </button>
        <button>
          <a href="/log-in" class="href">
            Cancel
          </a>
          </button>
    </form>
  );
};

export default SignUpPage;