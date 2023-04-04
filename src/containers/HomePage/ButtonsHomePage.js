import { useNavigate, useParams } from 'react-router-dom';

function ButtonsHomePage() {    
      const params = useParams()
      const navigate = useNavigate();

    return(
        <div className="buttons-home">
        <button className="button-style-home" onClick={() => navigate(`/instructions/${params.email}`)}>
          <a class="button-text">
            Exercise
          </a>
        </button>
        <button className="button-style-home" onClick={() => navigate(`/results/${params.email}`)}>
          <a class="button-text">
            Results
          </a>
        </button>
        <button className="button-style-home" onClick={() => navigate(`/notebook/${params.email}`)}>
          <a class="button-text">
            My Notebook
          </a>
        </button>
      </div>
    )
}

export default ButtonsHomePage