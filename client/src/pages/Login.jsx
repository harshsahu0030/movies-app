import Footer from "../components/Footer";
import HomeNavbar from "../components/HomeNavbar";
import BgImage from "../assets/IN-en-20240429-popsignuptwoweeks-perspective_alpha_website_large.jpg";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { CLEAR_ERRORS, CLEAR_MESSAGES } from "../app/constants/userConstant";
import Loader from "../components/Loader";
import { loginUserAction } from "../app/actions/userAction";

const Login = () => {
  const navigate = useNavigate();

  //redux
  const dispatch = useDispatch();
  const { loading, message, error, email } = useSelector((state) => state.user);

  //states
  const [errors, setErrors] = useState({});
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  //errorHandling
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is Required")
      .email("Invalid email format"),

    password: Yup.string().required("Password is required"),
  });

  //functons
  const handleChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate(loginForm, { abortEarly: false });
      dispatch(loginUserAction(loginForm));
    } catch (error) {
      const newErrors = {};

      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });

      setErrors(newErrors);
    }
  };

  //useEffect
  useEffect(() => {
    if (email) {
      setLoginForm({
        email,
        password: "",
      });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: CLEAR_MESSAGES });
      navigate("/home");
    }
    if (error) {
      toast.error(error);
      dispatch({ type: CLEAR_ERRORS });
    }
  }, [email, dispatch, message, error, navigate]);

  return (
    <>
      {loading ? <Loader /> : ""}
      <div className="login_section">
        <img src={BgImage} alt="backgorund-image" />
        <div className="wrapper">
          <HomeNavbar />
          <form className="container" onSubmit={handleSubmit}>
            <h2>Sign In</h2>
            <input
              name="email"
              className="input"
              type="text"
              placeholder="Email Address"
              value={loginForm.email}
              onChange={handleChange}
            />
            {errors.email && <div className="form-error">{errors.email}</div>}
            <input
              name="password"
              className="input"
              type="password"
              placeholder="Password"
              value={loginForm.password}
              onChange={handleChange}
            />
            {errors.password && (
              <div className="form-error">{errors.password}</div>
            )}
            <button type="submit" className="signin-btn" disabled={loading}>
              Sign In{" "}
            </button>
            <span>OR</span>
            <button type="button" onClick={() => navigate("/login/code")}>
              Use a Sign-in code
            </button>
            <span>
              <Link to={"/password/forgot"}>Forgot Password?</Link>
            </span>

            <p>
              New to Netflix? <Link to="/register">Sign up now</Link>.
            </p>

            <p>
              This page is protected by Google reCAPTCHA to ensure you are not a
              bot. <Link> Learn more</Link>.
            </p>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Login;
