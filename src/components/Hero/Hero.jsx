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
      </div>
      {/* <div className="lightening__bolts__cont">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 711 1014"
          className="lightening__bolts"
        >
          <g fill="none" fill-rule="evenodd" stroke="#FFF" stroke-width="9.389">
            <path
              fill="#22AD80"
              d="m399.684 374.522 148.754 13.675a.552.552 0 0 1 .41.854L372.134 655.768a.552.552 0 0 0 .41.854l148.985 13.697a.552.552 0 0 1 .425.83L343.63 973.055a.552.552 0 0 0 .882.653L677.193 610.66a.552.552 0 0 0-.356-.922L513.588 594.73a.552.552 0 0 1-.394-.876L703.817 333.87a.552.552 0 0 0-.395-.876l-123.595-11.362a.552.552 0 0 1-.454-.774L705.968 36.479a.552.552 0 0 0-.913-.595l-305.73 337.718a.552.552 0 0 0 .36.92Z"
            ></path>
            <path
              fill="#212337"
              d="m182.822 421.657 145.699-32.968a.552.552 0 0 1 .653.686l-85.656 308.277a.552.552 0 0 0 .653.686l145.926-33.019a.552.552 0 0 1 .66.658l-76.315 342.238a.552.552 0 0 0 1.04.349L519.71 560.471a.552.552 0 0 0-.624-.767l-159.895 36.18a.552.552 0 0 1-.646-.711l100.965-306.175a.552.552 0 0 0-.646-.71l-121.057 27.391a.552.552 0 0 1-.67-.596L369.67 5.493a.552.552 0 0 0-1.053-.283l-186.42 415.683a.552.552 0 0 0 .625.764Z"
            ></path>
            <path
              fill="#FFA400"
              d="m5.67 442.57 140.594-50.482a.552.552 0 0 1 .733.601L99.543 709.11a.552.552 0 0 0 .732.602l140.814-50.56a.552.552 0 0 1 .736.573l-34.044 348.994a.552.552 0 0 0 1.076.22L356.96 539.285a.552.552 0 0 0-.713-.685l-154.295 55.4a.552.552 0 0 1-.728-.627l62.904-316.199a.552.552 0 0 0-.727-.627l-116.817 41.943a.552.552 0 0 1-.738-.51L140.414 6.74a.552.552 0 0 0-1.08-.153L4.957 441.887a.552.552 0 0 0 .714.682Z"
            ></path>
          </g>
        </svg>
      </div> */}

      <div className="phone">
        <img src={phone} alt="" />
      </div>
    </div>
  );
};

export default Hero;
