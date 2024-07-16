import HomeNavbar from "../components/HomeNavbar";
import BgImage from "../assets/IN-en-20240429-popsignuptwoweeks-perspective_alpha_website_large.jpg";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { CLEAR_ERRORS, CLEAR_MESSAGES } from "../app/constants/userConstant";
import Loader from "../components/Loader";
import { resetPasswordAction } from "../app/actions/userAction";
import { Helmet } from "react-helmet";

const ResetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  //redux
  const dispatch = useDispatch();
  const { loading, message, error } = useSelector((state) => state.user);

  //states
  const [resetPasswordForm, setResetPasswordForm] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  //errorHandling
  const validationSchema = Yup.object({
    newPassword: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one symbol"
      )
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter"),

    confirmPassword: Yup.string().oneOf(
      [Yup.ref("newPassword"), null],
      "Passwords must match"
    ),
  });

  //functions
  const handleChange = (e) => {
    setResetPasswordForm({
      ...resetPasswordForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate(resetPasswordForm, { abortEarly: false });

      if (location.state.role === "resetPasswordVerified") {
        dispatch(resetPasswordAction(id, resetPasswordForm));
      } else {
        toast.error("Unauthorized");
      }
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
    if (message) {
      toast.success(message);
      dispatch({ type: CLEAR_MESSAGES });
      navigate(`/`);
    }
    if (error) {
      toast.error(error);
      dispatch({ type: CLEAR_ERRORS });
    }
  }, [dispatch, message, error, navigate]);

  return (
    <>
      {loading ? <Loader /> : ""}
      <div className="forgot_password_section">
        <Helmet>
          <title>Nextflix | Reset Password</title>
        </Helmet>
        <img src={BgImage} alt="backgorund-image" />
        <div className="wrapper">
          <HomeNavbar />
          <form className="container" onSubmit={handleSubmit}>
            <h2>Reset Password</h2>
            <input
              name="newPassword"
              className="input"
              type="text"
              placeholder="New Password"
              value={resetPasswordForm.newPassword}
              onChange={handleChange}
            />
            {errors.newPassword && (
              <div className="form-error">{errors.newPassword}</div>
            )}
            <input
              name="confirmPassword"
              className="input"
              type="text"
              placeholder="Confirm Password"
              value={resetPasswordForm.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <div className="form-error">{errors.confirmPassword}</div>
            )}
            <button type="submit" className="signin-btn" disabled={loading}>
              Submit
            </button>

            <p>
              This page is protected by Google reCAPTCHA to ensure you are not a
              bot. <Link> Learn more</Link>.
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
