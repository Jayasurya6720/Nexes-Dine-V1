import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);          // desktop services dropdown
  const [mobileOpen, setMobileOpen] = useState(false); // mobile menu
  const [mobileService, setMobileService] = useState(false);

  const navigate = useNavigate();

  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="logo" onClick={() => navigate("/")}>
        <img src="/logo nav.png" alt="logo" />
      </div>

      {/* DESKTOP MENU */}
      <ul className="nav-links">
        <li onClick={() => navigate("/")}>Home</li>
        <li>About Us</li>

        <li onClick={() => setOpen(!open)}>
          Services <span>▾</span>

          {open && (
            <ul className="dropdown">
              <li onClick={() => navigate("/services/event-management")}>
                Event Management
              </li>
              <li>Catering</li>
              <li>Food Stall</li>
            </ul>
          )}
        </li>

        <li>Contact Us</li>
      </ul>

      {/* RIGHT */}
      <div className="nav-right">
        <button className="phone-btn">+91 9876543210</button>

        {/* BURGER ICON (MOBILE) */}
        <div
          className="menu-icon"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="mobile-menu">
          <p onClick={() => {navigate("/"); setMobileOpen(false);}}>Home</p>
          <p>About Us</p>

          <p onClick={() => setMobileService(!mobileService)}>
            Services ▾
          </p>

          {mobileService && (
            <div className="mobile-sub">
              <p
                onClick={() => {
                  navigate("/services/event-management");
                  setMobileOpen(false);
                  setMobileService(false);
                }}
              >
                Event Management
              </p>
              <p>Catering</p>
              <p>Food Stall</p>
            </div>
          )}

          <p>Contact Us</p>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
