import { useFormik } from "formik";
import axios from "axios";
import './global.css';
import Rectangle from 'react-rectangle';
import sheep from './sheep.gif';

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
        <div className="Global-sheep-div">
            <img src={sheep} className="Global-sheep" alt="Loading..."/>
        </div>
            <div className="Global-test">
                {/* <label htmlFor="email">Email Address</label> */}
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
                    <div className="Global-forgot-password-text">
                        Don't have an account? Click the Sign-Up button below!
                    </div>
                </div>
            </div>
            <div className="Global-test-2">
                {/* <label htmlFor="password">Password</label> */}
                <div>
                    <input className="Global-input-box"
                        id="password"
                        name="password"
                        type={"password"}
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        placeholder="Password"
                        required
                    />
                    <div className="Global-forgot-password-text">
                        Forgot your password? Click the Forgot Password button to reset it!
                    </div>
                </div>
            </div>  
            <div className="Global-button-login-div">
                <button class= "Global-button-login" type="submit" onChange={formik.onSubmit}>
                    <a class="Global-button-href-styling" href="/log-in">
                        Login
                    </a>
                </button>
            </div>
            <div className="Global-button-div">
                <button class="Global-button-sign-up" type="button">
                    <a class="Global-button-href-styling" href="/sign-up">
                        Sign-Up
                    </a>
                </button>            
                <button class="Global-button-forgot-password" type="button">
                    <a class="Global-button-href-styling" href="/forgot-password">
                        Forgot Password?
                    </a>
                </button>
            </div>
        </form>
    );
};

export default Login;
