import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <div className="logo">LOGO</div>
      </Link>
      <div className="menu">
        <Link to="/listings">
          <button className="menu-item menu-btn">Listings</button>
        </Link>
        <Link to="/events">
          <button className="menu-item menu-btn">Events</button>
        </Link>
        <Link to="/about">
          <button className="menu-item menu-btn">About</button>
        </Link>
        <Link to="/contact">
          <button className="menu-item menu-btn">Contact</button>
        </Link>
      </div>
      <div className="socials-container">
        <a href="https://www.instagram.com/lukewarm_vintage" target="_blank">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/lukewarmvintage" target="_blank">
          <FaFacebook />
        </a>
        <a href="">
          <FaTwitter />
        </a>
      </div>
    </nav>
  );
}
export default Navbar;
