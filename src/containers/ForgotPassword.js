import { useFormik } from "formik";
import Rectangle from "react-rectangle";
import "./global.css";
import sheep from "./sheep.gif";

function ForgotPasswordPage() {
  const formik = useFormik({
    initialValues: {
      email: "",
      newPassword: "",
      newPasswordAgain: "",
    },

    onSubmit: (values) => {
      console.log({ values });
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
        <h2 className="title-fix">Sign Up</h2>
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
          id="newPassword"
          name="newPassword"
          type="newPassword"
          onChange={formik.handleChange}
          value={formik.values.newPassword}
          placeholder="New Password"
          required
        />

        <input
          className="input-box"
          id="newPasswordAgain"
          name="newPasswordAgain"
          type="newPasswordAgain"
          onChange={formik.handleChange}
          value={formik.values.newPasswordAgain}
          placeholder="Confirm New Password"
          required
        />
      </div>

      <div className="buttons">
        <button className="button-style" type="submit">
          <a class="button-text" href="/log-in">
            Change Password
          </a>
        </button>

        <button className="button-style" type="submit">
          <a class="button-text" href="/log-in">
            Cancel
          </a>
        </button>
      </div>

    </form>
  );
}

export default ForgotPasswordPage;
