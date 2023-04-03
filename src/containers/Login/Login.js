import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Ellipses from "../shared/Ellipses";
import Header from "../shared/Header";
import InputsLogin from "./InputsLogin";
import ButtonsLogin from "./ButtonsLogin";
import TextLogin from "./TextLogin";

function Login() {

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

  return (
    <form className="root-syle" onSubmit={formik.handleSubmit}>

      <Ellipses/>

      <Header/>

      <TextLogin/>
    
      <InputsLogin/>

      <ButtonsLogin/>

    </form>
  );
}

export default Login;
