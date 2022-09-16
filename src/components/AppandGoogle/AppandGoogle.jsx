import { FaApple } from "react-icons/fa";
import { RiGooglePlayFill } from "react-icons/Ri";
import "./AppandGoogle.scss";

const AppandGoogle = () => {
  return (
    <section>
      <div className="buttons">
        <button>
          {" "}
          <FaApple /> App Store
        </button>
        <button>
          {" "}
          <RiGooglePlayFill /> Google Play
        </button>
      </div>
    </section>
  );
};

export default AppandGoogle;
