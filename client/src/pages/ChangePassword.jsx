import { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import Sidebar from "../components/Sidebar";
import MobNavbar from "../components/MobNavbar";

const ChangePassword = () => {
  //states
  const [resetPasswordForm, setResetPasswordForm] = useState({
    oldPassword: "",
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
        toast.error("Feature not added");
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

  return (
    <div className="main_section">
      <MobNavbar />
      <div className="wrapper">
        <div className="left">
          <Sidebar />
        </div>
        <div className="right">
          <div className="forgot_password_section">
            <div className="wrapper">
              <form className="container" onSubmit={handleSubmit}>
                <h2>Change Password</h2>
                <input
                  name="oldPassword"
                  className="input"
                  type="text"
                  placeholder="Old Password"
                  value={resetPasswordForm.oldPassword}
                  onChange={handleChange}
                />

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
                <button type="submit" className="signin-btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
