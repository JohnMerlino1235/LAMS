import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ButtonsForgotPassword() {

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
    )
}

export default ButtonsForgotPassword;