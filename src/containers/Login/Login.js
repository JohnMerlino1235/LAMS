import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Ellipses from "../shared/Ellipses";
import Header from "../shared/Header";
import InputsLogin from "./InputsLogin";
import ButtonsLogin from "./ButtonsLogin";
import TextLogin from "./TextLogin";
import LoginForm from "./LoginForm";

function Login() {

  const navigate = useNavigate();

  return (
    <div className="root-syle">

      <Ellipses/>

      <Header/>

      <TextLogin/>
    
      <LoginForm />
    </div>
  );
}

export default Login;
