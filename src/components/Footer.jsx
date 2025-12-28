import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-top">
          {/* LEFT : LOGO + SOCIAL */}
          <div className="footer-col">
            <img
              src="/footer-logo.png"
              alt="Nexes Logo"
              className="footer-logo"
            />

            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* SERVICES */}
          <div className="footer-col">
            <h3>Our Services</h3>
            <ul>
              <li>Wedding Event</li>
              <li>Brand Builder</li>
              <li>Business Consulting</li>
              <li>Mediating</li>
              <li>Software Solutions</li>
              <li>Hotel Equipment</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="footer-col">
            <h3>Get In Touch</h3>

            <p>📍 Annadhana Patty,<br />Salem-636002</p>
            <p>✉️ nexessolution@gmail.com</p>
            <p>📞 +91 9876543210</p>
            <p>🕘 9AM - 6PM</p>

            <button className="help-btn">Need Help?</button>
          </div>
        </div>

        <div className="footer-bottom">
          © Nexes Dine Solution 2022 . All Rights Reserved
        </div>
      </footer>

      {/* 🔥 FLOATING WHATSAPP */}
      <a
        href="https://wa.me/919876543210"
        className="whatsapp-float"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/whatsapp.png" alt="WhatsApp" />
      </a>
    </>
  );
}

export default Footer;
