import { Link } from "react-router-dom";

import Nat1 from "../assets/images/nat-1-large.jpg";
import Nat2 from "../assets/images/nat-2-large.jpg";
import Nat3 from "../assets/images/nat-3-large.jpg";

const About = () => {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-bg">
        <h2 className="heading-secondary">
          Exciting tours for adventurous people
        </h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-sm">
            You're going to fall in love with nature
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce neque
            libero, sagittis nec gravida at, mattis in enim. Vivamus facilisis
            nisl non tempus auctor. Proin fringilla ex ut eros pharetra
            elementum.
          </p>
          <h3 className="heading-tertiary u-margin-bottom-sm">
            Live adventures like you never have before
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce neque
            libero, sagittis nec gravida at, mattis in enim.
          </p>
          <Link to="/" className="btn-text">
            Learn More
          </Link>
        </div>
        <div className="col-1-of-2">
        <div className="composition">
          <img
            className="composition__photo composition__photo--p1"
            src={Nat1}
            alt=""
          />
          <img
            className="composition__photo composition__photo--p2"
            src={Nat2}
            alt=""
          />
          <img
            className="composition__photo composition__photo--p3"
            src={Nat3}
            alt=""
          />
        </div>

        </div>
      </div>
    </section>
  );
};

export default About;
