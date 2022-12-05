import { useFormik } from "formik";
import lamb from './Lamb.png'

function Login() {
    const mystyle = {
        color: "black",
        padding: "10px",
        textAlign: "center",
      };
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            console.log({ values });
        },
    });
    return (
        <form style={mystyle} onSubmit={formik.handleSubmit}>
        <div>
            <img
                src={lamb}
                alt="LAMB"
                style={{
                    width: "100px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginTop: "0"
                }}
            />
        </div>
            <div style={mystyle}>
                <h1>LAMS</h1>
                <p>Leg Activity Monitoring System</p>
            </div>
            <div style={mystyle}>
                <label htmlFor="email">Email Address</label>
                <div>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                </div>
            </div>
            <div style={mystyle}>
                <label htmlFor="password">Password</label>
                <div>
                    <input
                        id="password"
                        name="password"
                        type={"password"}
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                </div>
            </div>  
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
