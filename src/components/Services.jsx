import React, { useEffect, useState } from "react";
import "./Services.css";

const servicesList = [
  {
    title: "Event Management",
    desc: "We specialize in orchestrating exceptional events — from luxury weddings and social galas to corporate launches and private gatherings."
  },
  { title: "Catering" },
  { title: "Software Solutions" },
  { title: "Brand Builder" },
  { title: "Business Consulting" },
  { title: "Mediating" },
  { title: "Hotel Equipment" }
];

function Services() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://nexesdinesolution.com/backend/list.php")
      .then((res) => res.json())
      .then((data) => {
        // 🔥 FIX: filter by URL path
        const homeLogoImages = data.filter((item) =>
          item.url.includes("/HomePageLogo/")
        );
        setImages(homeLogoImages);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="services-section">
      <div className="services-grid">
        {servicesList.map((service, index) => (
          <div className="service-card" key={index}>
            {/* 🔥 Image now works */}
            {images[index] && (
              <img
                src={images[index].url}
                alt={service.title}
              />
            )}

            <div className="overlay">
              <h3>{service.title}</h3>
              {service.desc && <p>{service.desc}</p>}
            </div>
          </div>
        ))}
      </div>

      <div className="why-nexes">
        <h3>WHY NEXES ?</h3>
        <p>
          Because with us, you don’t just start — you stand out. We combine
          industry knowledge, creative insight, and technical precision to build
          brands and experiences that last.
        </p>
        <button>Let’s Connect</button>
      </div>
    </section>
  );
}

export default Services;
