import { useFormik } from "formik";
import axios from "axios";



function NotesNotebook() {
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
        <div className="profile">
        <textarea
          className="input-box-notebook"
          id="notes"
          name="notes"
          type="notes"
          onChange={formik.handleChange}
          value={formik.values.notes}
          placeholder="How do you feel today?"
          required
        />
      </div>
    )
}

export default NotesNotebook;