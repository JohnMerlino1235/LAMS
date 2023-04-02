import { useParams } from 'react-router-dom';
import { useFormik } from "formik";



function ButtonsHomePage() {
    const formik = useFormik({
        initialValues: {},
    
        // TO-DO
        onSubmit: (values) => {
          console.log({ values });
        },
      });
    
      const params = useParams()

    return(
        <div className="buttons-home">
        <button className="button-style-home" type="submit">
          <a class="button-text" href={`/instructions/${params.email}`}>
            Exercise
          </a>
        </button>
        <button className="button-style-home" type="submit">
          <a class="button-text" href={`/results/${params.email}`}>
            Results
          </a>
        </button>
        <button className="button-style-home" type="submit">
          <a class="button-text" href={`/notebook/${params.email}`}>
            My Notebook
          </a>
        </button>
      </div>
    )
}

export default ButtonsHomePage