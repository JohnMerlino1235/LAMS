import { useFormik } from "formik";
import axios from "axios";

function ButtonsNotebook() {
    const formik = useFormik({
        initialValues: {
          notes: "",
        },
    
        onSubmit: (values) => {
          axios
            .post(`http://127.0.0.1:5000//fetch_user_from_db/${values.notes}`, {
              notes: values.notes,
            })
            .then((response) => console.log(response.data));
        }
      });
      
    return(
        <div className="buttons">
        <button className="button-style" type="submit">
          <a className="button-text">Save</a>
        </button>
      </div>
    )
}

export default ButtonsNotebook;