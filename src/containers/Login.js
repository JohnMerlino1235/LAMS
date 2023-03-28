import { useFormik } from "formik";
import axios from "axios";
import "./global.css";
import Rectangle from "react-rectangle";
import sheep from "./sheep.gif";
import { useNavigate } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

function Login() {

  let navigate = useNavigate();
  
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      navigate(`/home-page/${values.email}`);
      axios
        .post(`http://127.0.0.1:5000//fetch_user_from_db/${values.email}`, {
          email: values.email,
        })
        .then((response) => {
          console.log(response.data);
        });
    },

  });
  return (
    <form className="root-syle" onSubmit={formik.handleSubmit}>
      <div className="ellipses">
        <Rectangle className="ellipse-blue">
          <Rectangle className="ellipse-red"></Rectangle>
        </Rectangle>
      </div>


      <div className="title">
        <h1>LAMS</h1>
        <p className="title-fix">Leg Activity Monitoring System</p>
        <h2 className="title-fix">Log In</h2>
      </div>

      <div className="sheep">
        <img src={sheep} className="sheep-image" alt="Loading..." />
      </div>

      <div className="inputs">
        <input
          className="input-box"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="Email"
          required
        />

        <div className="forgot-password-text">
          Don't have an account? Click the Sign-Up button below!
        </div>

        <input
          className="input-box"
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="Password"
          required
        />

        <div className="forgot-password-text">
          Forgot your password? Click the Forgot Password button to reset it!
        </div>
      </div>

      <div className="buttons">
        <button className="button-style" type="submit">
            Login
        </button>
      </div>

      <div className="buttons-2nd-row">
        <button className="button-style" onClick={() => navigate("/sign-up")} type="submit">
            Sign-Up
        </button>
        <button className="button-style"  onClick={() => navigate("/forgot-password")}>
          <a class="button-text">
            Forgot Password?
          </a>
        </button>
      </div>

    </form>
  );
}

export default Login;
