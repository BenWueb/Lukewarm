import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links-container">
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
        </div>

        <div className="footer-copyright-container">
          &copy; 2023 Lukewarm Vintage LLC
        </div>
        <div className="footer-socials-container">
          <div className="footer-social-container">
            <div className="icon-container">
              <a
                href="https://www.instagram.com/lukewarm_vintage"
                target="_blank"
              >
                <FaInstagram className="icon" />
              </a>
            </div>
          </div>
          <div className="footer-social-container">
            <div className="icon-container">
              <a
                href="https://www.facebook.com/lukewarmvintage"
                target="_blank"
              >
                <FaFacebookF className="icon" />
              </a>
            </div>
          </div>
          <div className="footer-social-container">
            <div className="icon-container">
              <a href="">
                <FaTwitter className="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
