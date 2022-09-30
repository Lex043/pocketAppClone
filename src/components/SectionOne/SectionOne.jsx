import "./SectionOne.scss";
import lush from "../../assets/__next_static_media_lush.95e85e85.png";
import quacktails from "../../assets/__next_static_media_quacktails.081b224b.png";
import burgerking from "../../assets/__next_static_media_burgerking.55ac02bd.png";
import eveafterdark from "../../assets/__next_static_media_eveafterdark.c309c044.png";
import chow from "../../assets/__next_static_media_500chow.74ab4bf7.png";
import guinness from "../../assets/__next_static_media_guinness.461e8160.png";
import garmspot from "../../assets/__next_static_media_garmspot.c9a06ce0.png";
import nkassi from "../../assets/__next_static_media_nkassi.0d815284.png";
import hungrylagosian from "../../assets/__next_static_media_hungrylagosian.9b5afdd9.png";
import nexus from "../../assets/__next_static_media_nexus.14b1cc10.png";

const SectionOne = () => {
  return (
    <section className="section-one">
      <h1>TRUSTED BY 30,000+ MERCHANTS</h1>
      <figure>
        <section className="firstpart">
          <img src={lush} alt="lush" />
          <img src={quacktails} alt="quacktails" />
          <img src={burgerking} alt="burgerking" />
          <img src={eveafterdark} alt="eveafterdark" />
          <img src={chow} alt="chow" />
          <img src={guinness} altguinness />
        </section>
        <section className="secondpart">
          <img src={garmspot} alt="garmspot" />
          <img src={nkassi} alt="nkassi" />
          <img src={hungrylagosian} alt="hungrylagosian" />
          <img src={nexus} alt="nexus" />
        </section>
      </figure>
    </section>
  );
};

export default SectionOne;
