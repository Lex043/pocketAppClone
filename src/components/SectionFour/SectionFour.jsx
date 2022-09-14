import p2p from "../../assets/_images_peer-to-peer.png";
import banktransfer from "../../assets/_images_bank-transfer.png";
import badges from "../../assets/_images_badges.png";

const SectionFour = () => {
  return (
    <section>
      <div>
        <h1>Pocket to Pocket (P2P)</h1>
        <p>
          No more credit alert delays. Transfer money to anyone on Pocket App
          and they will get it immediately.
        </p>
        <img src={p2p} alt="" />
      </div>

      <div>
        <h1>Free Bank Transfer</h1>
        <p>Send money to any bank in Nigeria quickly</p>
        <img src={banktransfer} alt="" />
      </div>

      <div>
        <h1>Badges</h1>
        <p>
          Collect your “Thank yous” like infinity stones when you send money on
          PocketApp
        </p>
        <img src={badges} alt="" />
      </div>
    </section>
  );
};

export default SectionFour;
