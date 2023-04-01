import { useFormik } from "formik";
import Rectangle from "react-rectangle";
import "./global.css";
import sheep from "./sheep.gif";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ForgotPasswordPage() {
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
        <h2 className="title-fix">Change Password</h2>
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

      <div className="buttons">
        <button className="button-style" type="submit">
          Change Password
        </button>

        <button className="button-style" type="submit">
          <a className="button-text" href="/log-in">
            Cancel
          </a>
        </button>
      </div>
    </form>
  );
}

export default ForgotPasswordPage;
