import React, { useState } from 'react';
import { useFormik } from "formik";
import lamb from './Lamb.png'

function ForgotPasswordPage() {
    //once we decide to format it to "Login.js":
    const mystyle = {
        color: "black",
        padding: "10px",
        textAlign: "center",
      };
    const formik = useFormik({
        initialValues: {
            email: '',
            newPassword: '',
            newPasswordAgain: ''
        },
        onSubmit: values => {
            console.log({ values });
        },
    });

    //Template format just for now:
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordAgain, setNewPasswordAgain] = useState('');

    const handleEmailChange = event => {
        setEmail(event.target.value);
    };

    const handleNewPasswordChange = event => {
        setNewPassword(event.target.value);
    };

    const handleNewPasswordAgainChange = event => {
        setNewPasswordAgain(event.target.value);
    };

    const handleChangePassword = event => {
        event.preventDefault();
        // validate email and new password against the database
        // if valid, redirect to different page
        // if invalid, alert user of reason
    };

    const handleCancel = event => {
        event.preventDefault();
        // void user's data and return to login page
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
                <h2>Change Password:</h2>
            </div>
            {/* <div>
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
            New Password:
            <input
                type="password"
                value={newPassword}
                onChange={handleNewPasswordChange}
                required
            />
            </div>
            <br />
            <div>
            Re-Enter New Password:
            <input
                type="password"
                value={newPasswordAgain}
                onChange={handleNewPasswordAgainChange}
                required
            />
            </div>
            <br />
        <button type="submit">
          <a href="/log-in" class="href">
            Change Password
          </a>
        </button>
        <button>
          <a href="/log-in" class="href">
            Cancel
          </a>
        </button> */}
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
                <label htmlFor="password">New Password:</label>
                <div>
                    <input
                        id="password"
                        name="password"
                        type={"password"}
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                </div>
            </div>  
            <div style={mystyle}>
                <label htmlFor="newPassword">Re-Enter New Password:</label>
                <div>
                    <input
                        id="newPassword"
                        name="newPassword"
                        type={"newPassword"}
                        onChange={formik.handleChange}
                        value={formik.values.newPassword}
                    />
                </div>
            </div>
            <button type="submit">
          <a href="/log-in" class="href">
            Change Password
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

export default ForgotPasswordPage;
