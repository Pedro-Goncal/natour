import { Link } from "react-router-dom";
import Nat8 from "../assets/images/nat-8.jpg";
import Nat9 from "../assets/images/nat-9.jpg";
import Video from "../assets/images/video.mp4";
import Video2 from "../assets/images/video.webm";

const Testemonials = () => {
  return (
    <section className="section__stories">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={Video} type="video/mp4" />
          <source src={Video2} type="video/webm" />
          Your browser is not supported!
        </video>
      </div>
      <div className="u-center-text u-margin-bottom-bg">
        <h2 className="heading-secondary">We make people genuinely happy</h2>
      </div>
      <div class="row">
        <div className="story">
          <figure className="story__shape">
            <img className="story__img" src={Nat8} alt="Person on a tour" />
            <figcaption className="story__caption">Meryl Streep</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-sm">
              I had the best week ever with my family
            </h3>
            <p>
              The great gift of human beings is that we have the power of
              empathy. Fusce neque libero, sagittis nec gravida at, mattis in
              enim. Vivamus facilisis nisl non tempus auctor. Proin fringilla ex
              ut eros pharetra elementum. Vivamus facilisis nisl non tempus
              auctor.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div className="story">
          <figure className="story__shape">
            <img className="story__img" src={Nat9} alt="Person on a tour" />
            <figcaption className="story__caption">Jack Nicholson</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-sm">
              WOW! My life is comletely diferent now.
            </h3>
            <p>
              With my sunglasses on, I'm Jack Nicholson. Without them, I'm fat
              and 60. Proin fringilla ex ut eros pharetra elementum. Vivamus
              facilisis nisl non tempus auctor.
            </p>
          </div>
        </div>
      </div>
      <div className="u-center-text u-margin-top-hg">
        <Link to="/" className="btn-text">
          Read all Stories
        </Link>
      </div>
    </section>
  );
};

export default Testemonials;
