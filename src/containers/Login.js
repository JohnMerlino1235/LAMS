import { useFormik } from "formik";
import lamb from './Lamb.png'
import axios from "axios";
import './global.css';
import Rectangle from 'react-rectangle';

function Login() {
    const mystyle = {
        color: "black",
        padding: "-100px",
        textAlign: "center",
      };
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            // console.log({ values });
            axios.post(`http://127.0.0.1:5000//fetch_user_from_db/${values.email}`, {
                'email': values.email
              }).then(response => console.log(response.data));
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
                <h2>Log In</h2>
        </div>
            <div className="Global-test">
                <label htmlFor="email">Email Address</label>
                <div>
                    <input className="Global-input-box"
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                </div>
            </div>
            <div className="Global-test-2">
                <label htmlFor="password">Password</label>
                <div>
                    <input className="Global-input-box"
                        id="password"
                        name="password"
                        type={"password"}
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                </div>
            </div>  
            <div className="Global-button-login-margin">
                <button class= "Global-button-login" type="submit" onChange={formik.onSubmit}>
                    <a href="/log-in">
                        Login
                    </a>
                </button>
            </div>
            <button class="Global-button-sign-up">
                <a href="/sign-up">
                    Sign Up
                </a>
            </button>            
            <button class="Global-button-forgot-password">
                <a href="/forgot-password">
                    Forgot Password
                </a>
            </button>
        </form>
    );
};

export default Login;
