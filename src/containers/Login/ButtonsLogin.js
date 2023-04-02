import { useNavigate } from "react-router-dom";

function ButtonsLogin() {

    let navigate = useNavigate();

    return (      
        <div>
    <div className="buttons">
    <button className="button-style" type="submit">
    <a class="button-text">
        Login
      </a>
    </button>
  </div>

  <div className="buttons-2nd-row">
    <button className="button-style" onClick={() => navigate("/sign-up")}>
    <a class="button-text">
        Sign-Up
      </a>
    </button>
    <button className="button-style"  onClick={() => navigate("/forgot-password")}>
      <a class="button-text">
        Forgot Password?
      </a>
    </button>
  </div>
  </div>
  )
}

export default ButtonsLogin;