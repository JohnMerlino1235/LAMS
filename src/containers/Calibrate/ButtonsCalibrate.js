import { useParams } from 'react-router-dom';

function ButtonsCalibrate() {
    const params = useParams()
    return(
        <div className="buttons-home">
        <button className="button-style-home" type="submit">
          <a className="button-text" href="/exercise">
            Next
          </a>
        </button>

        <button className="button-style-home" type="submit">
          <a className="button-text" href={`/instructions/${params.email}`}>
            Back
          </a>
        </button>
    </div>
    )
}

export default ButtonsCalibrate;

