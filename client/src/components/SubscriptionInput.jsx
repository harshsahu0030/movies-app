import { MdArrowForwardIos } from "react-icons/md";

const SubscriptionInput = () => {
  return (
    <div className="subscription_input_section">
      <input
        className="input"
        type="text"
        placeholder="Email or Mobile Number"
      />
      <button>
        Get Started <MdArrowForwardIos />
      </button>
    </div>
  );
};

export default SubscriptionInput;
