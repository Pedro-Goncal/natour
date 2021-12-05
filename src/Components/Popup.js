import Nat8 from "../assets/images/nat-8.jpg";
import Nat9 from "../assets/images/nat-9.jpg";

const Popup = ({ popup, tourName, togglePopUpOff, color }) => {
  return (
    <div className={`popup ${popup ? "popup__active" : ""}`}>
      <div className={`popup__content ${popup ? "popup__active2" : ""}`}>
        <div className="popup__left">
          <img src={Nat8} alt="" className="popup__img" />
          <img src={Nat9} alt="" className="popup__img" />
        </div>
        <div className="popup__right">
          <span onClick={togglePopUpOff} className="popup__close">
            x
          </span>
          <h2 className="heading-secondary u-margin-bottom-sm">
            Start booking now
          </h2>
          <h3 className={`heading-tertiary u-margin-bottom-sm `}>{tourName}</h3>
          <p className="popup__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris
            augue neque gravida in fermentum et sollicitudin ac orci. Justo
            donec enim diam vulputate ut pharetra sit amet aliquam. Enim tortor
            at auctor urna nunc id cursus. Aliquet nec ullamcorper sit amet
            risus. Libero volutpat sed cras ornare arcu dui vivamus arcu felis.
            Donec et odio pellentesque diam. Odio morbi quis commodo odio aenean
            sed adipiscing. Diam sit amet nisl suscipit. In ante metus dictum at
            tempor commodo ullamcorper.
          </p>
          <a href="/" className="btn btn--green">
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Popup;
