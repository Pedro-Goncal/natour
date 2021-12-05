import { useState } from "react";
import { Link } from "react-router-dom";

import Popup from "../Components/Popup";

const Tours = () => {
  const [togglePopup, setTogglePopup] = useState(false);
  const [togglePopup2, setTogglePopup2] = useState(false);
  const [togglePopup3, setTogglePopup3] = useState(false);

  const togglePopUp = (n) => {
    if (n === 1) {
      setTogglePopup(togglePopup ? false : true);
    } else if (n === 2) {
      setTogglePopup2(togglePopup2 ? false : true);
    } else if (n === 3) {
      setTogglePopup3(togglePopup3 ? false : true);
    }
  };

  const togglePopUpOff = (e) => {
    e.preventDefault();
    setTogglePopup(false);
    setTogglePopup2(false);
    setTogglePopup3(false);
  };

  return (
    <section className="section-tours">
      <Popup
        popup={togglePopup}
        togglePopUpOff={togglePopUpOff}
        tourName="The Sea Explorer"
        color={1}
      />
      <Popup
        popup={togglePopup2}
        togglePopUpOff={togglePopUpOff}
        tourName="The Forest Hiker"
        color={2}
      />
      <Popup
        popup={togglePopup3}
        togglePopUpOff={togglePopUpOff}
        tourName="The Snow Adventurer"
        color={3}
      />

      <div className="u-center-text u-margin-bottom-bg">
        <h2 className="heading-secondary">Most popular tours</h2>
      </div>
      <div className="row">
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--1"></div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1">
                  The sea explorer
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>3 day tours</li>
                  <li>Up to 30 people</li>
                  <li>2 tour guides</li>
                  <li>Sleep in cozy hotels</li>
                  <li>Dificulty: easy</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">$297</p>
                </div>
                <Link
                  to="/"
                  className="btn btn--white"
                  onClick={() => togglePopUp(1)}
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              {" "}
              <div className="card__picture card__picture--2"></div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--2">
                  The Forest Hiker
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>7 day tours</li>
                  <li>Up to 40 people</li>
                  <li>6 tour guides</li>
                  <li>Sleep in provided tents</li>
                  <li>Dificulty: medium</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-2">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">$497</p>
                </div>
                <Link
                  to="/"
                  className="btn btn--white"
                  onClick={() => togglePopUp(2)}
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              {" "}
              <div className="card__picture card__picture--3"></div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--3">
                  The Snow adventurer
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>5 day tours</li>
                  <li>Up to 15 people</li>
                  <li>3 tour guides</li>
                  <li>Sleep in provided tents</li>
                  <li>Dificulty: hard</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-3">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">$897</p>
                </div>
                <Link
                  to="/"
                  className="btn btn--white"
                  onClick={() => togglePopUp(3)}
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="u-center-text u-margin-top-hg">
        <Link to="/" className="btn btn--green">
          Discover all Tours
        </Link>
      </div>
    </section>
  );
};

export default Tours;
