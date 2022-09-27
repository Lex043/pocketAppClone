import { FaApple } from "react-icons/fa";
import { RiGooglePlayFill } from "react-icons/Ri";
import "./Hero.scss";
import logo from "../../assets/IMG_2768 1.png";
import phone from "../../assets/__next_static_media_display-images.b8e3acca.png";

const Hero = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="imgCont">
          <img src={logo} alt="logo" />
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

        <div className="scan">
          <div className="scan__text">
            <h3>Scan to download Pocket App</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="44">
              <g
                fill="none"
                fill-rule="evenodd"
                stroke="#FFAD0D"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="5.625"
              >
                <path d="M6.846 19.69c35.935-11.492 2.808 20.547 40.11 4.16"></path>
                <path d="m39.825 17.315 10.285 4.837-3.055 10.655"></path>
              </g>
            </svg>
          </div>

          <div className="scan__to__download">
            <svg xmlns="http://www.w3.org/2000/svg" width="114" height="114">
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="#FFF"
                  fill-rule="nonzero"
                  d="M17.165.25h79.92c5.795 0 7.896.603 10.014 1.736a11.812 11.812 0 0 1 4.915 4.915c1.133 2.118 1.736 4.22 1.736 10.014v79.92c0 5.795-.603 7.896-1.736 10.014a11.812 11.812 0 0 1-4.915 4.915c-2.118 1.133-4.22 1.736-10.014 1.736h-79.92c-5.795 0-7.896-.603-10.014-1.736a11.812 11.812 0 0 1-4.915-4.915C1.103 104.731.5 102.63.5 96.835v-79.92c0-5.795.603-7.896 1.736-10.014a11.812 11.812 0 0 1 4.915-4.915C9.269.853 11.37.25 17.165.25Z"
                ></path>
                <path
                  fill="#000"
                  fill-rule="nonzero"
                  d="M35.487 9.004h3.31v3.31h-3.31zM42.107 9.004h3.31v3.31h-3.31zM52.038 9.004h3.31v3.31h-3.31zM55.349 9.004h3.31v3.31h-3.31zM58.659 9.004h3.31v3.31h-3.31zM68.59 9.004h3.31v3.31h-3.31zM71.901 9.004h3.31v3.31h-3.31zM75.211 9.004h3.31v3.31h-3.31zM35.487 12.314h3.31v3.31h-3.31zM45.418 12.314h3.31v3.31h-3.31zM48.728 12.314h3.31v3.31h-3.31z"
                ></path>
                <path
                  fill="#000"
                  fill-rule="nonzero"
                  d="M52.038 12.314h3.31v3.31h-3.31zM61.97 12.314h3.31v3.31h-3.31zM65.28 12.314h3.31v3.31h-3.31zM68.59 12.314h3.31v3.31h-3.31zM38.797 15.624h3.31v3.31h-3.31zM42.107 15.624h3.31v3.31h-3.31zM45.418 15.624h3.31v3.31h-3.31zM48.728 15.624h3.31v3.31h-3.31zM61.97 15.624h3.31v3.31h-3.31zM75.211 15.624h3.31v3.31h-3.31zM35.487 18.935h3.31v3.31h-3.31zM42.107 18.935h3.31v3.31h-3.31zM45.418 18.935h3.31v3.31h-3.31zM55.349 18.935h3.31v3.31h-3.31zM58.659 18.935h3.31v3.31h-3.31zM65.28 18.935h3.31v3.31h-3.31zM71.901 18.935h3.31v3.31h-3.31zM38.797 22.245h3.31v3.31h-3.31zM45.418 22.245h3.31v3.31h-3.31zM48.728 22.245h3.31v3.31h-3.31zM55.349 22.245h3.31v3.31h-3.31zM61.97 22.245h3.31v3.31h-3.31zM71.901 22.245h3.31v3.31h-3.31zM75.211 22.245h3.31v3.31h-3.31zM45.418 25.556h3.31v3.31h-3.31zM52.038 25.556h3.31v3.31h-3.31zM58.659 25.556h3.31v3.31h-3.31zM61.97 25.556h3.31v3.31h-3.31zM65.28 25.556h3.31v3.31h-3.31zM68.59 25.556h3.31v3.31h-3.31zM71.901 25.556h3.31v3.31h-3.31zM75.211 25.556h3.31v3.31h-3.31zM35.487 28.866h3.31v3.31h-3.31zM42.107 28.866h3.31v3.31h-3.31zM48.728 28.866h3.31v3.31h-3.31zM55.349 28.866h3.31v3.31h-3.31zM61.97 28.866h3.31v3.31h-3.31zM68.59 28.866h3.31v3.31h-3.31zM75.211 28.866h3.31v3.31h-3.31zM35.487 32.176h3.31v3.31h-3.31z"
                ></path>
                <path
                  fill="#000"
                  fill-rule="nonzero"
                  d="M38.797 32.176h3.31v3.31h-3.31zM42.107 32.176h3.31v3.31h-3.31zM58.659 32.176h3.31v3.31h-3.31zM61.97 32.176h3.31v3.31h-3.31zM65.28 32.176h3.31v3.31h-3.31zM68.59 32.176h3.31v3.31h-3.31zM9.004 35.487h3.31v3.31h-3.31zM15.624 35.487h3.31v3.31h-3.31zM18.935 35.487h3.31v3.31h-3.31zM25.556 35.487h3.31v3.31h-3.31zM28.866 35.487h3.31v3.31h-3.31zM32.176 35.487h3.31v3.31h-3.31zM42.107 35.487h3.31v3.31h-3.31zM45.418 35.487h3.31v3.31h-3.31zM52.038 35.487h3.31v3.31h-3.31zM58.659 35.487h3.31v3.31h-3.31zM65.28 35.487h3.31v3.31h-3.31zM68.59 35.487h3.31v3.31h-3.31zM81.832 35.487h3.31v3.31h-3.31zM91.763 35.487h3.31v3.31h-3.31zM98.384 35.487h3.31v3.31h-3.31zM101.694 35.487h3.31v3.31h-3.31z"
                ></path>
                <path
                  fill="#000"
                  fill-rule="nonzero"
                  d="M15.624 38.797h3.31v3.31h-3.31zM25.556 38.797h3.31v3.31h-3.31zM32.176 38.797h3.31v3.31h-3.31zM35.487 38.797h3.31v3.31h-3.31z"
                ></path>
                <path
                  fill="#000"
                  fill-rule="nonzero"
                  d="M38.797 38.797h3.31v3.31h-3.31zM42.107 38.797h3.31v3.31h-3.31zM52.038 38.797h3.31v3.31h-3.31zM55.349 38.797h3.31v3.31h-3.31zM58.659 38.797h3.31v3.31h-3.31zM71.901 38.797h3.31v3.31h-3.31zM75.211 38.797h3.31v3.31h-3.31zM78.521 38.797h3.31v3.31h-3.31zM81.832 38.797h3.31v3.31h-3.31zM85.142 38.797h3.31v3.31h-3.31zM88.452 38.797h3.31v3.31h-3.31zM101.694 38.797h3.31v3.31h-3.31zM9.004 42.107h3.31v3.31h-3.31zM15.624 42.107h3.31v3.31h-3.31zM18.935 42.107h3.31v3.31h-3.31zM28.866 42.107h3.31v3.31h-3.31zM38.797 42.107h3.31v3.31h-3.31zM42.107 42.107h3.31v3.31h-3.31zM45.418 42.107h3.31v3.31h-3.31zM52.038 42.107h3.31v3.31h-3.31zM61.97 42.107h3.31v3.31h-3.31zM68.59 42.107h3.31v3.31h-3.31zM78.521 42.107h3.31v3.31h-3.31zM88.452 42.107h3.31v3.31h-3.31zM95.073 42.107h3.31v3.31h-3.31zM98.384 42.107h3.31v3.31h-3.31zM9.004 45.418h3.31v3.31h-3.31zM12.314 45.418h3.31v3.31h-3.31zM18.935 45.418h3.31v3.31h-3.31zM22.245 45.418h3.31v3.31h-3.31zM38.797 45.418h3.31v3.31h-3.31zM61.97 45.418h3.31v3.31h-3.31zM68.59 45.418h3.31v3.31h-3.31zM75.211 45.418h3.31v3.31h-3.31zM78.521 45.418h3.31v3.31h-3.31zM81.832 45.418h3.31v3.31h-3.31zM88.452 45.418h3.31v3.31h-3.31zM101.694 45.418h3.31v3.31h-3.31zM9.004 48.728h3.31v3.31h-3.31zM15.624 48.728h3.31v3.31h-3.31zM22.245 48.728h3.31v3.31h-3.31zM25.556 48.728h3.31v3.31h-3.31zM28.866 48.728h3.31v3.31h-3.31zM32.176 48.728h3.31v3.31h-3.31zM35.487 48.728h3.31v3.31h-3.31zM42.107 48.728h3.31v3.31h-3.31zM48.728 48.728h3.31v3.31h-3.31zM55.349 48.728h3.31v3.31h-3.31zM58.659 48.728h3.31v3.31h-3.31zM65.28 48.728h3.31v3.31h-3.31zM71.901 48.728h3.31v3.31h-3.31zM91.763 48.728h3.31v3.31h-3.31z"
                ></path>
                <path
                  fill="#000"
                  fill-rule="nonzero"
                  d="M95.073 48.728h3.31v3.31h-3.31zM12.314 52.038h3.31v3.31h-3.31zM15.624 52.038h3.31v3.31h-3.31zM45.418 52.038h3.31v3.31h-3.31zM55.349 52.038h3.31v3.31h-3.31zM61.97 52.038h3.31v3.31h-3.31zM71.901 52.038h3.31v3.31h-3.31zM78.521 52.038h3.31v3.31h-3.31zM81.832 52.038h3.31v3.31h-3.31z"
                ></path>
                <path
                  fill="#000"
                  fill-rule="nonzero"
                  d="M95.073 52.038h3.31v3.31h-3.31zM98.384 52.038h3.31v3.31h-3.31zM101.694 52.038h3.31v3.31h-3.31zM9.004 55.349h3.31v3.31h-3.31zM15.624 55.349h3.31v3.31h-3.31zM28.866 55.349h3.31v3.31h-3.31zM38.797 55.349h3.31v3.31h-3.31zM48.728 55.349h3.31v3.31h-3.31z"
                ></path>
                <path
                  fill="#000"
                  fill-rule="nonzero"
                  d="M52.038 55.349h3.31v3.31h-3.31zM58.659 55.349h3.31v3.31h-3.31zM61.97 55.349h3.31v3.31h-3.31zM65.28 55.349h3.31v3.31h-3.31zM68.59 55.349h3.31v3.31h-3.31zM71.901 55.349h3.31v3.31h-3.31zM75.211 55.349h3.31v3.31h-3.31zM78.521 55.349h3.31v3.31h-3.31zM81.832 55.349h3.31v3.31h-3.31zM85.142 55.349h3.31v3.31h-3.31zM88.452 55.349h3.31v3.31h-3.31zM95.073 55.349h3.31v3.31h-3.31zM98.384 55.349h3.31v3.31h-3.31zM101.694 55.349h3.31v3.31h-3.31zM15.624 58.659h3.31v3.31h-3.31zM18.935 58.659h3.31v3.31h-3.31zM22.245 58.659h3.31v3.31h-3.31zM32.176 58.659h3.31v3.31h-3.31zM35.487 58.659h3.31v3.31h-3.31zM42.107 58.659h3.31v3.31h-3.31zM55.349 58.659h3.31v3.31h-3.31zM61.97 58.659h3.31v3.31h-3.31zM68.59 58.659h3.31v3.31h-3.31zM71.901 58.659h3.31v3.31h-3.31zM78.521 58.659h3.31v3.31h-3.31zM88.452 58.659h3.31v3.31h-3.31zM98.384 58.659h3.31v3.31h-3.31zM9.004 61.97h3.31v3.31h-3.31zM12.314 61.97h3.31v3.31h-3.31zM28.866 61.97h3.31v3.31h-3.31zM32.176 61.97h3.31v3.31h-3.31zM35.487 61.97h3.31v3.31h-3.31z"
                ></path>
                <path
                  fill="#000"
                  fill-rule="nonzero"
                  d="M38.797 61.97h3.31v3.31h-3.31zM42.107 61.97h3.31v3.31h-3.31zM45.418 61.97h3.31v3.31h-3.31zM48.728 61.97h3.31v3.31h-3.31zM55.349 61.97h3.31v3.31h-3.31zM58.659 61.97h3.31v3.31h-3.31zM61.97 61.97h3.31v3.31h-3.31zM68.59 61.97h3.31v3.31h-3.31zM75.211 61.97h3.31v3.31h-3.31zM78.521 61.97h3.31v3.31h-3.31zM85.142 61.97h3.31v3.31h-3.31zM88.452 61.97h3.31v3.31h-3.31zM91.763 61.97h3.31v3.31h-3.31zM98.384 61.97h3.31v3.31h-3.31zM22.245 65.28h3.31v3.31h-3.31zM25.556 65.28h3.31v3.31h-3.31zM35.487 65.28h3.31v3.31h-3.31z"
                ></path>
                <path
                  fill="#000"
                  fill-rule="nonzero"
                  d="M38.797 65.28h3.31v3.31h-3.31zM55.349 65.28h3.31v3.31h-3.31zM61.97 65.28h3.31v3.31h-3.31zM65.28 65.28h3.31v3.31h-3.31zM75.211 65.28h3.31v3.31h-3.31zM85.142 65.28h3.31v3.31h-3.31zM91.763 65.28h3.31v3.31h-3.31z"
                ></path>
                <path
                  fill="#000"
                  fill-rule="nonzero"
                  d="M95.073 65.28h3.31v3.31h-3.31zM98.384 65.28h3.31v3.31h-3.31zM9.004 68.59h3.31v3.31h-3.31zM15.624 68.59h3.31v3.31h-3.31zM18.935 68.59h3.31v3.31h-3.31zM22.245 68.59h3.31v3.31h-3.31zM28.866 68.59h3.31v3.31h-3.31zM42.107 68.59h3.31v3.31h-3.31zM52.038 68.59h3.31v3.31h-3.31zM55.349 68.59h3.31v3.31h-3.31zM58.659 68.59h3.31v3.31h-3.31zM61.97 68.59h3.31v3.31h-3.31zM78.521 68.59h3.31v3.31h-3.31zM85.142 68.59h3.31v3.31h-3.31zM95.073 68.59h3.31v3.31h-3.31zM18.935 71.901h3.31v3.31h-3.31zM25.556 71.901h3.31v3.31h-3.31zM42.107 71.901h3.31v3.31h-3.31zM45.418 71.901h3.31v3.31h-3.31zM52.038 71.901h3.31v3.31h-3.31zM55.349 71.901h3.31v3.31h-3.31zM65.28 71.901h3.31v3.31h-3.31zM71.901 71.901h3.31v3.31h-3.31zM78.521 71.901h3.31v3.31h-3.31zM88.452 71.901h3.31v3.31h-3.31zM95.073 71.901h3.31v3.31h-3.31zM12.314 75.211h3.31v3.31h-3.31zM28.866 75.211h3.31v3.31h-3.31zM32.176 75.211h3.31v3.31h-3.31zM35.487 75.211h3.31v3.31h-3.31z"
                ></path>
                <path
                  fill="#000"
                  fill-rule="nonzero"
                  d="M38.797 75.211h3.31v3.31h-3.31zM42.107 75.211h3.31v3.31h-3.31zM48.728 75.211h3.31v3.31h-3.31z"
                ></path>
                <path
                  fill="#000"
                  fill-rule="nonzero"
                  d="M52.038 75.211h3.31v3.31h-3.31zM55.349 75.211h3.31v3.31h-3.31zM61.97 75.211h3.31v3.31h-3.31zM65.28 75.211h3.31v3.31h-3.31zM68.59 75.211h3.31v3.31h-3.31zM75.211 75.211h3.31v3.31h-3.31zM78.521 75.211h3.31v3.31h-3.31zM81.832 75.211h3.31v3.31h-3.31zM85.142 75.211h3.31v3.31h-3.31zM88.452 75.211h3.31v3.31h-3.31zM91.763 75.211h3.31v3.31h-3.31z"
                ></path>
                <path
                  fill="#000"
                  fill-rule="nonzero"
                  d="M95.073 75.211h3.31v3.31h-3.31zM35.487 78.521h3.31v3.31h-3.31zM58.659 78.521h3.31v3.31h-3.31zM61.97 78.521h3.31v3.31h-3.31zM65.28 78.521h3.31v3.31h-3.31zM68.59 78.521h3.31v3.31h-3.31zM75.211 78.521h3.31v3.31h-3.31zM88.452 78.521h3.31v3.31h-3.31zM91.763 78.521h3.31v3.31h-3.31z"
                ></path>
                <path
                  fill="#000"
                  fill-rule="nonzero"
                  d="M95.073 78.521h3.31v3.31h-3.31zM98.384 78.521h3.31v3.31h-3.31zM101.694 78.521h3.31v3.31h-3.31zM35.487 81.832h3.31v3.31h-3.31z"
                ></path>
                <path
                  fill="#000"
                  fill-rule="nonzero"
                  d="M38.797 81.832h3.31v3.31h-3.31zM42.107 81.832h3.31v3.31h-3.31zM48.728 81.832h3.31v3.31h-3.31zM55.349 81.832h3.31v3.31h-3.31zM58.659 81.832h3.31v3.31h-3.31zM68.59 81.832h3.31v3.31h-3.31zM71.901 81.832h3.31v3.31h-3.31zM75.211 81.832h3.31v3.31h-3.31zM81.832 81.832h3.31v3.31h-3.31zM88.452 81.832h3.31v3.31h-3.31zM91.763 81.832h3.31v3.31h-3.31zM98.384 81.832h3.31v3.31h-3.31zM35.487 85.142h3.31v3.31h-3.31zM42.107 85.142h3.31v3.31h-3.31zM45.418 85.142h3.31v3.31h-3.31zM52.038 85.142h3.31v3.31h-3.31zM55.349 85.142h3.31v3.31h-3.31zM58.659 85.142h3.31v3.31h-3.31zM68.59 85.142h3.31v3.31h-3.31zM71.901 85.142h3.31v3.31h-3.31zM75.211 85.142h3.31v3.31h-3.31zM88.452 85.142h3.31v3.31h-3.31zM91.763 85.142h3.31v3.31h-3.31zM42.107 88.452h3.31v3.31h-3.31zM45.418 88.452h3.31v3.31h-3.31zM48.728 88.452h3.31v3.31h-3.31zM65.28 88.452h3.31v3.31h-3.31zM75.211 88.452h3.31v3.31h-3.31zM78.521 88.452h3.31v3.31h-3.31zM81.832 88.452h3.31v3.31h-3.31zM85.142 88.452h3.31v3.31h-3.31zM88.452 88.452h3.31v3.31h-3.31zM95.073 88.452h3.31v3.31h-3.31zM101.694 88.452h3.31v3.31h-3.31zM35.487 91.763h3.31v3.31h-3.31z"
                ></path>
                <path
                  fill="#000"
                  fill-rule="nonzero"
                  d="M38.797 91.763h3.31v3.31h-3.31zM42.107 91.763h3.31v3.31h-3.31zM45.418 91.763h3.31v3.31h-3.31zM48.728 91.763h3.31v3.31h-3.31z"
                ></path>
                <path
                  fill="#000"
                  fill-rule="nonzero"
                  d="M52.038 91.763h3.31v3.31h-3.31zM65.28 91.763h3.31v3.31h-3.31zM75.211 91.763h3.31v3.31h-3.31zM78.521 91.763h3.31v3.31h-3.31zM85.142 91.763h3.31v3.31h-3.31zM88.452 91.763h3.31v3.31h-3.31zM91.763 91.763h3.31v3.31h-3.31zM98.384 91.763h3.31v3.31h-3.31zM35.487 95.073h3.31v3.31h-3.31z"
                ></path>
                <path
                  fill="#000"
                  fill-rule="nonzero"
                  d="M38.797 95.073h3.31v3.31h-3.31zM52.038 95.073h3.31v3.31h-3.31zM61.97 95.073h3.31v3.31h-3.31zM71.901 95.073h3.31v3.31h-3.31zM78.521 95.073h3.31v3.31h-3.31zM85.142 95.073h3.31v3.31h-3.31zM95.073 95.073h3.31v3.31h-3.31zM101.694 95.073h3.31v3.31h-3.31zM48.728 98.384h3.31v3.31h-3.31z"
                ></path>
                <path
                  fill="#000"
                  fill-rule="nonzero"
                  d="M52.038 98.384h3.31v3.31h-3.31zM58.659 98.384h3.31v3.31h-3.31zM61.97 98.384h3.31v3.31h-3.31zM71.901 98.384h3.31v3.31h-3.31zM75.211 98.384h3.31v3.31h-3.31zM78.521 98.384h3.31v3.31h-3.31zM88.452 98.384h3.31v3.31h-3.31zM91.763 98.384h3.31v3.31h-3.31zM98.384 98.384h3.31v3.31h-3.31zM35.487 101.694h3.31v3.31h-3.31zM52.038 101.694h3.31v3.31h-3.31zM68.59 101.694h3.31v3.31h-3.31zM71.901 101.694h3.31v3.31h-3.31zM75.211 101.694h3.31v3.31h-3.31zM85.142 101.694h3.31v3.31h-3.31zM91.763 101.694h3.31v3.31h-3.31zM98.384 101.694h3.31v3.31h-3.31z"
                ></path>
                <path d="M24.265 12.482h-7.35c-.946 0-1.823.291-2.544.787a4.409 4.409 0 0 0-1.355 1.488 4.247 4.247 0 0 0-.536 2.07v7.524c0 2.397 1.99 4.347 4.436 4.347h7.348c2.447 0 4.437-1.95 4.437-4.347v-7.524c0-2.396-1.99-4.345-4.436-4.345Z"></path>
                <path
                  fill="#000"
                  fill-rule="nonzero"
                  d="M24.265 9.006h-7.35c-3.582 0-6.616 2.367-7.587 5.601a7.677 7.677 0 0 0-.324 2.22v7.524c0 4.314 3.55 7.823 7.911 7.823h7.35c4.361 0 7.911-3.509 7.911-7.823v-7.524c0-4.313-3.55-7.821-7.91-7.821Zm4.436 15.345c0 2.397-1.99 4.347-4.437 4.347h-7.348c-2.447 0-4.436-1.95-4.436-4.347v-7.524c0-.749.194-1.454.536-2.07a4.409 4.409 0 0 1 1.355-1.488 4.474 4.474 0 0 1 2.544-.787h7.35c2.446 0 4.436 1.949 4.436 4.345v7.524Z"
                ></path>
                <path d="M97.093 12.482h-7.35c-.946 0-1.823.291-2.544.787a4.409 4.409 0 0 0-1.355 1.488 4.247 4.247 0 0 0-.536 2.07v7.524c0 2.397 1.99 4.347 4.436 4.347h7.348c2.447 0 4.437-1.95 4.437-4.347v-7.524c0-2.396-1.99-4.345-4.436-4.345Z"></path>
                <path
                  fill="#000"
                  fill-rule="nonzero"
                  d="M97.093 9.006h-7.35c-3.582 0-6.616 2.367-7.587 5.601a7.677 7.677 0 0 0-.324 2.22v7.524c0 4.314 3.55 7.823 7.911 7.823h7.35c4.361 0 7.911-3.509 7.911-7.823v-7.524c0-4.313-3.55-7.821-7.91-7.821Zm4.436 15.345c0 2.397-1.99 4.347-4.437 4.347h-7.348c-2.447 0-4.436-1.95-4.436-4.347v-7.524c0-.749.194-1.454.536-2.07a4.409 4.409 0 0 1 1.355-1.488 4.474 4.474 0 0 1 2.544-.787h7.35c2.446 0 4.436 1.949 4.436 4.345v7.524Z"
                ></path>
                <path d="M24.265 85.31h-7.35c-.946 0-1.823.291-2.544.787a4.409 4.409 0 0 0-1.355 1.488 4.247 4.247 0 0 0-.536 2.07v7.524c0 2.397 1.99 4.347 4.436 4.347h7.348c2.447 0 4.437-1.95 4.437-4.347v-7.524c0-2.396-1.99-4.345-4.436-4.345Z"></path>
                <path
                  fill="#000"
                  fill-rule="nonzero"
                  d="M24.265 81.834h-7.35c-3.582 0-6.616 2.367-7.587 5.601a7.677 7.677 0 0 0-.324 2.22v7.524c0 4.314 3.55 7.823 7.911 7.823h7.35c4.361 0 7.911-3.509 7.911-7.823v-7.524c0-4.313-3.55-7.821-7.91-7.821Zm4.436 15.345c0 2.397-1.99 4.347-4.437 4.347h-7.348c-2.447 0-4.436-1.95-4.436-4.347v-7.524c0-.749.194-1.454.536-2.07a4.409 4.409 0 0 1 1.355-1.488 4.474 4.474 0 0 1 2.544-.787h7.35c2.446 0 4.436 1.949 4.436 4.345v7.524ZM18.342 25.555c-1.499 0-2.718-1.195-2.718-2.662v-4.608c0-.458.12-.89.328-1.267.201-.364.487-.676.83-.911.441-.304.98-.483 1.558-.483h4.502c1.497 0 2.716 1.194 2.716 2.66v4.609c0 1.467-1.22 2.662-2.716 2.662H18.34ZM91.169 25.555c-1.499 0-2.718-1.195-2.718-2.662v-4.608c0-.458.12-.89.328-1.267.201-.364.487-.676.83-.911.441-.304.98-.483 1.558-.483h4.502c1.497 0 2.716 1.194 2.716 2.66v4.609c0 1.467-1.22 2.662-2.716 2.662H91.168Z"
                ></path>
                <path
                  fill="#000"
                  fill-rule="nonzero"
                  d="M18.342 98.383c-1.499 0-2.718-1.195-2.718-2.662v-4.608c0-.458.12-.89.328-1.267.201-.364.487-.676.83-.911.441-.304.98-.483 1.558-.483h4.502c1.497 0 2.716 1.194 2.716 2.66v4.609c0 1.467-1.22 2.662-2.716 2.662H18.34Z"
                ></path>
              </g>
            </svg>
          </div>
        </div>
      </div>

      <div className="lightening__bolts__cont">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 711 1014">
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
      </div>

      <div className="phone">
        <img src={phone} alt="" />
      </div>
    </div>
  );
};

export default Hero;
