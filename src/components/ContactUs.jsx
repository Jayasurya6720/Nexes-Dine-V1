import "./ContactUs.css";

function ContactUs() {
  return (
    <section className="contact-section">
      <h2>We’re Here for You</h2>

      <p className="contact-sub">
        Whether you're planning a grand celebration, launching a business, or
        simply exploring ideas — we’re here to listen, guide, and create.
      </p>

      <div className="contact-wrapper">
        {/* LEFT FORM */}
        <div className="contact-form">
          <div className="input-box">
            <span className="icon">👤</span>
            <input type="text" placeholder="Name" />
          </div>

          <div className="input-box">
            <span className="icon">✉️</span>
            <input type="email" placeholder="Email ID" />
          </div>

          <div className="input-box">
            <span className="icon">📞</span>
            <input type="text" placeholder="Phone Number" />
          </div>

          <div className="textarea-box">
            <textarea placeholder="Message"></textarea>
          </div>

          <button className="contact-btn">
            Leave a note ↗
          </button>
        </div>

        {/* RIGHT ILLUSTRATION */}
        <div className="contact-illustration">
          <img src="/contact-illustration.png" alt="Support" />
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
