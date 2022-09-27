import "./Cards.scss";
import { Link } from "react-router-dom";
import virtualcards from "../assets/_images_virtual-cards.png";
import physicalcards from "../assets/_images_physical-cards.png";

const Cards = () => {
  return (
    <section className="card__sticky">
      <div className="features">
        <div className="payments">
          <Link to="/">
            <p>Payments</p>
          </Link>
        </div>

        <div className="shops">
          <Link to="/shops">
            <p>Shops</p>
          </Link>
        </div>

        <div className="groups">
          <Link to="/groups">
            <p>Groups</p>
          </Link>
        </div>

        <div className="cards">
          <Link to="/cards">
            <p>Cards</p>
          </Link>
        </div>
      </div>
      <section className="cards">
        <p className="cards__header">
          Globally accepted debit cards for your everyday use and security
        </p>

        <div className="virtual__cards">
          <header>
            <div className="comming__soon">
              <h1>COMMING SOON</h1>
            </div>
            <h2>Virtual Cards</h2>
            <p>
              Create and maintain virtual cards for your online subscriptions
              and payments
            </p>
          </header>
          <img src={virtualcards} alt="pocket for couples" />
        </div>

        <div className="pocket__for__friends">
          <header>
            <div className="comming__soon">
              <h1>COMMING SOON</h1>
            </div>
            <h2>Physical cards</h2>
            <p>
              Request physical cards from any bank of your choice to manage your
              lifestyle
            </p>
          </header>
          <img src={physicalcards} alt="pocket for friends" />
        </div>
      </section>
    </section>
  );
};

export default Cards;
