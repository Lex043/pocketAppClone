import { FaApple } from "react-icons/fa";
import { RiGooglePlayFill } from "react-icons/ri";
import "./SectionFive.scss";

const SectionFive = () => {
  return (
    <section className="section-five-cont">
      <figure className="section-five">
        <header>
          <h1>Download the app</h1>
          <p>
            Join about 2 million people who buy sell,pay and get paid with
            Pocket app. No commission on the payments you receive.
          </p>
        </header>
        <div className="buttons">
          <button className="apple">
            {" "}
            <FaApple /> App Store
          </button>
          <button className="google">
            {" "}
            <RiGooglePlayFill /> Google Play
          </button>
        </div>
      </figure>
    </section>
  );
};

export default SectionFive;
