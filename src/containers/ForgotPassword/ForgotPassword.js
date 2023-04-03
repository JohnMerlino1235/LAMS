import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import Ellipses from "../shared/Ellipses";
import Header from "../shared/Header";
import ButtonsForgotPassword from "./ButtonsForgotPassword";
import InputsForgotPassword from "./InputsForgotPassword";

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
          new_password: values.newPassword,
        })
        .then((response) => {
          if (response.data.success) {
            navigate("/log-in");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  return (
    <form className="root-syle" onSubmit={formik.handleSubmit}>
      <Ellipses />

      <Header headerName={"Forgot Password"} />

      <InputsForgotPassword />

      <ButtonsForgotPassword />
    </form>
  );
}

export default ForgotPasswordPage;
