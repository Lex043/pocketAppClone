import "./Shop.scss";
import { Link } from "react-router-dom";
import getpaid from "../assets/_images_get-paid.png";
import fashion from "../assets/_images_for-fashion.png";
import thrifts from "../assets/_images_for-thrifts.png";
import food from "../assets/_images_for-food.png";
import anybusiness from "../assets/_images_for-any-business.png";
import creators from "../assets/_images_for-creators.png";

const Shops = () => {
  return (
    <section className="shop__sticky">
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

      <section className="shops">
        <p className="shops__header">
          For businesses owners who want to enjoy a seamless selling experience
        </p>

        <div className="get__paid">
          <header>
            <h1>Get paid</h1>
            <p>
              Collect payments easily with a customized account number for your
              businesses on Pocket App
            </p>
          </header>
          <img src={getpaid} alt="" />
        </div>

        <div className="fashion__businesses">
          <header>
            <h1>Pocket for Fashion Businesses</h1>
            <p>
              Showcase and sell your fashion products like dresses, crochet and
              get paid easily. 0% commission on sales
            </p>
          </header>
          <img src={fashion} alt="" />
        </div>

        <div className="pocket__for__thrifts">
          <header>
            <h1>Pocket for Thrifts</h1>
            <p>
              Make your old someone's new. Make money by selling off things you
              no longer need.
            </p>
          </header>
          <img src={thrifts} alt="" />
        </div>

        <div className="food__businesses">
          <header>
            <h1>Pocket for Food Businesses</h1>
            <p>
              Satisfy millions of hungry customers and get paid instantly. 0%
              commission on sales
            </p>
          </header>
          <img src={food} alt="" />
        </div>

        <div className="any__businesses">
          <header>
            <h1>Pocket for any Businesses</h1>
            <p>
              Wheater you sell gadgets, own a boutique, a hair salon, or fix
              nails for a living, you can now expose your businesses to millions
              of customers and get paid easily
            </p>
          </header>
          <img src={anybusiness} alt="" />
        </div>

        <div className="pocket__for__creators">
          <header>
            <h1>Pocket for Creators</h1>
            <p>
              If you are a writer or a graphic designer, you can create your own
              Pocket shop to sell your services and meet clients for next big
              project
            </p>
          </header>
          <img src={creators} alt="" />
        </div>
      </section>
    </section>
  );
};

export default Shops;
