import { useFormik } from "formik";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function InputsSignUp() {
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
              console.log(error);
            })
        },
      })
      return(
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
      )
}

export default InputsSignUp;