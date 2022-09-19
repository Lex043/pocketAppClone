import "./SectionFour.scss";

import p2p from "../../assets/_images_peer-to-peer.png";
import banktransfer from "../../assets/_images_bank-transfer.png";
import badges from "../../assets/_images_badges.png";
import bills from "../../assets/_images_bills.png";
import pay from "../../assets/_images_pay-on-the-go.png";
import paysecurely from "../../assets/_images_pay-securely.png";
import giveaways from "../../assets/_images_giveaways.png";

const SectionFour = () => {
  return (
    <section className="section-four">
      <div className="pocket-to-pocket">
        <header>
          <h1>Pocket to Pocket (P2P)</h1>
          <p>
            No more credit alert delays. Transfer money to anyone on Pocket App
            and they will get it immediately.
          </p>
        </header>
        <img src={p2p} alt="" />
      </div>

      <div className="free-bank-transfer">
        <header>
          <h1>Fast Bank Transfer</h1>
          <p>Send money to any bank in Nigeria quickly</p>
        </header>
        <img src={banktransfer} alt="" />
      </div>

      <div className="badges">
        <header>
          <h1>Badges</h1>
          <p>
            Collect your “Thank yous” like infinity stones when you send money
            on PocketApp
          </p>
        </header>
        <img src={badges} alt="" />
      </div>

      <div className="pay-bills">
        <header>
          <h1>Pay Bills</h1>
          <p>
            Never get disconnected. Find and settle all your bills in one place
          </p>
        </header>
        <img src={bills} alt="" />
      </div>

      <div className="pay-on-the-go">
        <header>
          <h1>Pay on the go</h1>
          <p>Pay with your Pocket App at every new spot you visit everyday</p>
        </header>
        <img src={pay} alt="" />
      </div>

      <div className="pay-securely">
        <header>
          <h1>Pay securely</h1>
          <p>
            Your funds are always protected with escrow when you shop on
            PocketApp
          </p>
        </header>
        <img src={paysecurely} alt="" />
      </div>

      <div className="giveaways">
        <header>
          <h1>Giveaways</h1>
          <p>
            Automatically disburse money to up to 100 people equally at random
            or within your circle of friends
          </p>
        </header>
        <img src={giveaways} alt="" />
      </div>
    </section>
  );
};

export default SectionFour;
