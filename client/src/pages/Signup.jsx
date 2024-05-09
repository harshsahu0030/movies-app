import Footer from "../components/Footer";
import HomeNavbar from "../components/HomeNavbar";
import BgImage from "../assets/IN-en-20240429-popsignuptwoweeks-perspective_alpha_website_large.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { registerUserAction } from "../app/actions/userAction";
import { toast } from "react-toastify";
import { CLEAR_ERRORS, CLEAR_MESSAGES } from "../app/constants/userConstant";
import Loader from "../components/Loader";

const Signup = () => {
  const navigate = useNavigate();

  //redux
  const dispatch = useDispatch();
  const { loading, message, otp, error, email } = useSelector(
    (state) => state.user
  );

  //states
  const [errors, setErrors] = useState({});
  const [signUpForm, setSignUpForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  //errorHandling
  const validationSchema = Yup.object({
    username: Yup.string()
      .matches(/^(\S+$)/g, "* This field cannot contain only blankspaces")
      .min(3, "* Username must be at least 3 characters")
      .required("Username is Required"),

    email: Yup.string()
      .required("Email is Required")
      .email("Invalid email format"),

    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one symbol"
      )
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter"),
  });

  //functons
  const handleChange = (e) => {
    setSignUpForm({ ...signUpForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate(signUpForm, { abortEarly: false });
      await dispatch(registerUserAction(signUpForm));
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
      setSignUpForm({
        username: "",
        email,
        password: "",
      });
    }
  }, [email]);

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: CLEAR_MESSAGES });
      navigate(`/register/code/${otp}`, {
        state: {
          ...signUpForm,
          role: "register",
        },
      });
    }
    if (error) {
      toast.error(error);
      dispatch({ type: CLEAR_ERRORS });
    }
  }, [dispatch, message, error, navigate, otp, signUpForm]);

  return (
    <>
      {loading ? <Loader /> : ""}
      <div className="signup_section">
        <img src={BgImage} alt="backgorund-image" />

        <div className="wrapper">
          <HomeNavbar />
          <form className="container" onSubmit={handleSubmit}>
            <h2>Welcome!</h2>
            <p>
              Welcome you to Netflix! where you find all kind of moviews, shows
              etc.
            </p>
            <input
              name="username"
              className="input"
              type="text"
              placeholder="Username"
              value={signUpForm.username}
              onChange={handleChange}
            />
            {errors.username && (
              <div className="form-error">{errors.username}</div>
            )}
            <input
              name="email"
              className="input"
              type="email"
              placeholder="Email Address"
              value={signUpForm.email}
              onChange={handleChange}
            />
            {errors.email && <div className="form-error">{errors.email}</div>}
            <input
              name="password"
              className="input"
              type="password"
              placeholder="Password"
              value={signUpForm.password}
              onChange={handleChange}
            />
            {errors.password && (
              <div className="form-error">{errors.password}</div>
            )}
            <button type="submit" className="signin-btn" disabled={loading}>
              Sign Up
            </button>

            <p>
              Already have account? <Link to="/login">Sign in now</Link>.
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

export default Signup;
