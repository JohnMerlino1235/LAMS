import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

function SignUpForm() {

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
          email: "",
          password: "",
          firstName: "",
          lastName: "",
        },
    
        onSubmit: (values) => {
          axios
            .post("http://127.0.0.1:5000//signup", {
              email: values.email,
              password: values.password,
              first_name: values.firstName,
              last_name: values.lastName,
            })
            .then((response) => {
              if (response.data.success) {
                navigate("/log-in");
              }
            })
            .catch((error) => {
                console.log(values);
              console.log(error);
            })
        },
      })

    return(
        <form onSubmit={formik.handleSubmit}>
    <div className="inputs">
    <input
      className="input-box"
      id="firstName"
      name="firstName"
      type="text"
      onChange={formik.handleChange}
      value={formik.values.firstName}
      placeholder="First Name"
      required
    />
    <input
      className="input-box"
      id="lastName"
      name="lastName"
      type="text"
      onChange={formik.handleChange}
      value={formik.values.lastName}
      placeholder="Last Name"
      required
    />
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
  </div>
  <div className="buttons">
      <button className="button-style-else" type="submit">
        <a class="button-text">
        Create Account
        </a>
      </button>
      <button
        className="button-style-else"
        onClick={() => navigate('/log-in')}
      >
        <a class="button-text">
        Cancel
        </a>
      </button>
    </div>
            </form>
    )
}

export default SignUpForm;