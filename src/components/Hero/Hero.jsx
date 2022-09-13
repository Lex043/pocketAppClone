import { FaApple } from "react-icons/fa";
import { RiGooglePlayFill } from "react-icons/Ri";
import "./Hero.scss";
import logo from "../../assets/IMG_2768 1.png";
import phone from "../../assets/__next_static_media_display-images.b8e3acca.png";
import vector1 from "../../assets/Vector 1.png";
import vector2 from "../../assets/Vector 2.png";
import vector3 from "../../assets/Vector 3.png";

const Hero = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="imgCont">
          <img src={logo} alt="" />
        </div>
        <h1>Bank. Shop. Sell.</h1>
        <p>
          Join over 2 million people who better manage their cash, shop & get
          paid with Pocket app <br /> <br /> Banking services by VBank.
        </p>
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

        {/* <div className="vector">
          <img src={vector2} alt="" />
          <img src={vector3} alt="" />
          <img src={vector1} alt="" />
        </div> */}

        <div className="phone">
          <img src={phone} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
