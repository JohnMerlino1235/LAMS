import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";



function InputsLogin() {

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
          email: "",
          password: "",
        },
    
        onSubmit: (values) => {
            axios
              .post("http://127.0.0.1:5000//login", {
                email: values.email,
                password: values.password
              })
              .then((response) => {
                if (response.data.success) {
                  navigate(`/home-page/${values.email}`);
                }
              })
              .catch((error) => {
                console.log(error);
              })
          },
      });

    return(
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
    )
}

export default InputsLogin;