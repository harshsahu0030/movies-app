import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { homeData } from "../data/homeData";
import { IoCloseSharp } from "react-icons/io5";
import SubscriptionInput from "./SubscriptionInput";

const AskedQue = () => {
  //states
  const [active, setActive] = useState("");

  //functions
  const handleVisible = (value) => {
    if (active === value) {
      setActive("");
    } else {
      setActive(value);
    }
  };

  return (
    <div className="asked_que_section">
      <div className="wrapper">
        <h3>Frequently Asked Questions</h3>

        {homeData && homeData.askedQuestion.length > 0
          ? homeData.askedQuestion.map((item, i) => (
              <div className="container" key={i}>
                <div
                  className="question"
                  onClick={() => {
                    handleVisible(i);
                  }}
                >
                  {item.ques}

                  {active === i ? <IoCloseSharp /> : <IoIosArrowDown />}
                </div>
                <div className={active === i ? "answer visible" : "answer"}>
                  {item.ans}
                </div>
              </div>
            ))
          : ""}

        <div className="log">
          <p>
            Ready to watch? Enter your email or mobile number to create or
            restart your membership.
          </p>
          <SubscriptionInput />
        </div>
      </div>
    </div>
  );
};

export default AskedQue;
