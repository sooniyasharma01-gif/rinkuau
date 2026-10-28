import { NavLink } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-inner">

        {/* TOP ROW */}
        <div className="footer-top">

          <div className="footer-brand">
            <p className="footer-logo">Shruti</p>
            <p className="footer-tagline">Refined · Discreet · Unforgettable</p>
          </div>

          <nav className="footer-nav">
            <NavLink to="/intro">Intro</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/rates">Rates</NavLink>
            <NavLink to="/date">Date</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/screening">Screening</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
            <NavLink to="/availability">Availability</NavLink>
            <NavLink to="/journal">Journal</NavLink>
            <NavLink to="/wishlist">Wishlist</NavLink>
          </nav>

        </div>

        {/* DIVIDER */}
        <div className="footer-divider">
          <div className="footer-diamond" />
        </div>

        {/* CITIES */}
        <div className="footer-cities">
          <p className="footer-cities-label">Available in</p>
          <div className="footer-cities-links">
            <NavLink to="/london">London</NavLink>
            <NavLink to="/manchester">Manchester</NavLink>
            <NavLink to="/birmingham">Birmingham</NavLink>
            <NavLink to="/leeds">Leeds</NavLink>
            <NavLink to="/edinburgh">Edinburgh</NavLink>
            <NavLink to="/bristol">Bristol</NavLink>
            <NavLink to="/liverpool">Liverpool</NavLink>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} Shruti &nbsp;·&nbsp; United Kingdom &nbsp;·&nbsp; All rights reserved.
          </p>
          <div className="footer-bottom-right">
            <NavLink to="/privacy" className="footer-privacy">Privacy Policy</NavLink>
            <p className="footer-disclaimer">
              This website is intended for adults of legal age only. All content is for companionship purposes.
            </p>
          </div>
        </div>

      </div>

    </footer>
  );
}
