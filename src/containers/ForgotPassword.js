import React, { useState } from 'react';
import { useFormik } from "formik";
import lamb from './Lamb.png'

const ForgotPasswordPage = () => {
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
    <div>
        <div style={mystyle}>
                <h1>LAMS</h1>
                <p>Leg Activity Monitoring System</p>
                <p>Change Password:</p>
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
            <button onClick={handleChangePassword}>Change Password</button>
            <button onClick={handleCancel}>Cancel</button>
        </form>
        </div>
        </form>
    );
};

export default ForgotPasswordPage;
