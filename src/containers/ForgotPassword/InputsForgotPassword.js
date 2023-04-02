import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function InputsForgotPassword() {

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
          email: "",
          oldPassword: "",
          newPassword: "",
        },
    
        onSubmit: (values) => {
          axios
            .post("http://127.0.0.1:5000//changepassword", {
              email: values.email,
              old_password: values.oldPassword,
              new_password: values.newPassword
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
          id="oldPassword"
          name="oldPassword"
          type="oldPassword"
          onChange={formik.handleChange}
          value={formik.values.oldPassword}
          placeholder="Old Password"
          required
        />

        <input
          className="input-box"
          id="newPassword"
          name="newPassword"
          type="newPassword"
          onChange={formik.handleChange}
          value={formik.values.newPassword}
          placeholder="New Password"
          required
        />
      </div>
    )
}

export default InputsForgotPassword;