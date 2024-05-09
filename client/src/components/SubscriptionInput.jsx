import { useEffect, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { userExistAction } from "../app/actions/userAction";
import { useNavigate } from "react-router-dom";
import { CLEAR_ERRORS, CLEAR_MESSAGES } from "../app/constants/userConstant";
import { toast } from "react-toastify";
import Loader from "./Loader";

const SubscriptionInput = () => {
  const navigate = useNavigate();

  //redux
  const dispatch = useDispatch();
  const { loading, message, error } = useSelector((state) => state.user);

  //states
  const [email, setEmail] = useState("");

  //function
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(userExistAction(email));
  };

  //useEffect
  useEffect(() => {
    if (message) {
      dispatch({ type: CLEAR_MESSAGES });
      if (message === "exist") {
        navigate(`/login`);
      } else {
        navigate("/register");
      }
    }
    if (error) {
      toast.error(error);
      dispatch({ type: CLEAR_ERRORS });
    }
  }, [dispatch, message, error, navigate, email]);

  return (
    <>
      {loading ? <Loader /> : ""}
      <form className="subscription_input_section" onSubmit={handleSubmit}>
        <input
          name="email"
          className="input"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" disabled={email.length < 0}>
          Get Started <MdArrowForwardIos />
        </button>
      </form>
    </>
  );
};

export default SubscriptionInput;
