import { useParams } from 'react-router-dom';

function TextHomePage() {
    const params = useParams()
    return(
        <div className="welcome-message">
        <p className="welcome-text">
          Welcome Back {params.email}! <br></br>
          You still have exercises to do today...
        </p>
      </div>
    )
}

export default TextHomePage;