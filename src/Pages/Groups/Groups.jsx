import "./Group.scss";
import { Link } from "react-router-dom";
import couples from "../assets/_images_for-couples.png";
import friends from "../assets/_images_for-friends.png";
import family from "../assets/_images_for-family.png";
import ajo from "../assets/_images_for-ajo.png";
import teams from "../assets/_images_for-teams.png";

const Groups = () => {
  return (
    <section className="group__sticky">
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

      <section className="groups">
        <p className="groups__header">
          Manage cash and expenses as a group. Set rules for each person and
          more
        </p>

        <div className="pocket__for__couples">
          <header>
            <h1>Pocket for Couples</h1>
            <p>
              Whether it's to manage house expenses or to contribute money
              together for a major purchase, create a joint pocket and manage
              the cash with ease
            </p>
          </header>
          <img src={couples} alt="pocket for couples" />
        </div>

        <div className="pocket__for__friends">
          <header>
            <h1>Pocket for Friends</h1>
            <p>
              Going for Sunday brunch with your crew or spilting bills after a
              night out create a group pocket to manage cash with your friends
            </p>
          </header>
          <img src={friends} alt="pocket for friends" />
        </div>

        <div className="family__members">
          <header>
            <h1>Pocket for Family members</h1>
            <p>
              Want to contribute money for Dad's birthday or plan a family
              vacation, create a group pocket to manage cash with your family
              members
            </p>
          </header>
          <img src={family} alt="pocket for family members" />
        </div>

        <div className="ajo__contributions">
          <header>
            <h1>Pocket for Ajo & Contributions</h1>
            <p>
              Manage your Ajo group digitally, save money as a group, get a
              customized account number, set permissions, and manage members
              with ease
            </p>
          </header>
          <img src={ajo} alt="pocket for contributions" />
        </div>

        <div className="Team__members">
          <header>
            <h1>Pocket for Team Members</h1>
            <p>
              Contributing towards a collegue's wedding or towards your boss'
              child naming ceremony, create a group pocket to manage cash with
              your team
            </p>
          </header>
          <img src={teams} alt="pocket for team members" />
        </div>
      </section>
    </section>
  );
};

export default Groups;
