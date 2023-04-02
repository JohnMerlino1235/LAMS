import { useNavigate } from 'react-router-dom';


function ButtonsSignUp() {
    const navigate = useNavigate();


    return(

      <div className="buttons">
      <button className="button-style" type="submit">
        <a class="button-text">
        Create Account
        </a>
      </button>
      <button
        className="button-style"
        onClick={() => navigate('/log-in')}
      >
        <a class="button-text">
        Cancel
        </a>
      </button>
    </div>
    )
}

export default ButtonsSignUp;