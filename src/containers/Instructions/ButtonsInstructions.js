import { useParams } from 'react-router-dom';
import { useFormik } from "formik";



function ButtonsInstructons() {
    const params = useParams()
  
    const formik = useFormik({
      initialValues: {},
  
      // TO-DO
      onSubmit: (values) => {
        console.log({ values });
      },
    });

    return(
        <div className="buttons-home">
        <button className="button-style-home" type="submit">
          <a class="button-text" href={`/calibrate/${params.email}`}>
            Calibrate
          </a>
        </button>
      </div>
    )
}

export default ButtonsInstructons;