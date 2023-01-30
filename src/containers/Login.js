import { useFormik } from "formik";
import lamb from './Lamb.png'
import axios from "axios";

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
            // console.log({ values });
            axios.post(`http://127.0.0.1:5000//fetch_user_from_db/${values.email}`, {
                'email': values.email
              }).then(response => console.log(response.data));
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
            <button>
                <a href="/sign-up" class="href">
                    Sign Up
                </a>
            </button>            
            <button>
                <a href="/forgot-password" class="href">
                    Forgot Password
                </a>
            </button>
            <button type="submit"> onChange={formik.onSubmit}
                <a href="/log-in" class="href">
                    Login
                </a>
            </button>
        </form>
    );
};

export default Login;
