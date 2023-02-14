import { useFormik } from "formik";
import Rectangle from 'react-rectangle';
import './global.css';
import sheep from './sheep.gif';

function ForgotPasswordPage() {
    //once we decide to format it to "Login.js":
    const mystyle = {
        color: "black",
        padding: "-100px",
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

    return (
        <form className={mystyle} onSubmit={formik.handleSubmit}>
        <div className="Global-ellipses">
            <Rectangle className="Global-ellipse-blue">
                <Rectangle className="Global-ellipse-red">
                </Rectangle>
            </Rectangle>
        </div>
        <div style={mystyle}>
            <h1>LAMS</h1>
            <p>Leg Activity Monitoring System</p>
            <h2>Change Password</h2>
        </div>
        <div className="Global-sheep-div">
            <img src={sheep} className="Global-sheep" alt="Loading..."/>
        </div>
        <div className="Global-test">
            <div>
                <input className="Global-input-box"
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    placeholder="Email"
                    required
                />
            </div>
        </div>
        <div className="Global-test-2">
            <div>
                <input className="Global-input-box"
                    id="newPassword"
                    name="newPassword"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.newPassword}
                    placeholder="New Password"
                    required
                />
            </div>
        </div>
        <div className="Global-test-2">
            <div>
                <input className="Global-input-box"
                    id="newPasswordAgain"
                    name="newPasswordAgain"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.newPasswordAgain}
                    placeholder="Confirm New Password"
                    required
                />
            </div>
        </div>
        <div className="Global-button-div">
            <button class="Global-button-sign-up" type="submit">
                <a class="Global-button-href-styling" href="/log-in">
                    Change Password
                </a>
            </button>
            <button class="Global-button-sign-up" type="button">
                <a class="Global-button-href-styling" href="/log-in">
                    Cancel
                </a>
            </button>
      </div>
        </form>
    );
};

export default ForgotPasswordPage;
