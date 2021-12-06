import Logo2 from '../assets/images/logo-green-2x.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <img src={Logo2} alt="Big Logo" className="footer__logo" />
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="/" className="footer__link">
                  Company
                </a>
              </li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  Contact
                </a>
              </li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  Carrers
                </a>
              </li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  Privacy policy
                </a>
              </li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Built by{' '}
            <a
              href="https://www.linkedin.com/in/pedro-goncalves88/"
              target="_blank"
              className="footer__link"
              rel="noreferrer"
            >
              Pedro Goncalves
            </a>{' '}
            part of my learning experience with responsive design and SASS
            implementation. Designed by Jonas Schmedtman
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
