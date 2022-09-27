import "./SectionThree.scss";
import { Link } from "react-router-dom";

const SectionThree = () => {
  return (
    <section className="section-three">
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
    </section>
  );
};

export default SectionThree;
