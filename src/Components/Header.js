import { Link } from "react-router-dom";
import LogoWhite from "../assets/images/logo-white.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo-box">
        <img src={LogoWhite} alt="Logo" className="header__logo" />
      </div>

      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Outdoors</span>
          <span className="heading-primary--sub">is where life happens</span>
        </h1>

        <Link to="/" className="btn btn--white btn--animated">
          Discover our tours
        </Link>
      </div>
    </div>
  );
};

export default Header;
