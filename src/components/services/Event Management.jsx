import "./Event Management.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";

function EventManagement() {
  //video

  const [videos, setVideos] = useState([]);
  const [previewTimes, setPreviewTimes] = useState({});
  const [indexx, setIndexx] = useState(0);
  const videoRefs = useRef([]);

  useEffect(() => {
    fetch("https://nexesdinesolution.com/backend/list.php")
      .then((res) => res.json())
      .then((data) => {
        const prideVideos = data.filter((item) =>
          item.url.includes("/video/OurPride/")
        );

        const times = {};
        prideVideos.forEach((_, i) => {
          times[i] = Math.floor(Math.random() * 5) + 1; // 1–5 sec
        });

        setPreviewTimes(times);
        setVideos(prideVideos);
      });
  }, []);

  const togglePlay = (i) => {
    const vid = videoRefs.current[i];
    if (!vid) return;

    if (vid.paused) {
      vid.play();
    } else {
      vid.pause();
    }
  };

  const nextt = () => {
    if (indexx + 3 < videos.length) setIndexx(indexx + 1);
  };

  const prevv = () => {
    if (indexx > 0) setIndexx(indexx - 1);
  };


  // slider

  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);

  const PER_SLIDE = 8;

  useEffect(() => {
    fetch("https://nexesdinesolution.com/backend/list.php")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((item) =>
          item.url.includes("/EventManagementCards/")
        );
        setImages(filtered);
      });
  }, []);

  const next = () => {
    if ((index + 1) * PER_SLIDE < images.length) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const visibleImages = images.slice(
    index * PER_SLIDE,
    index * PER_SLIDE + PER_SLIDE
  );

  // end slider
  return (
    <>
      <section className="em-hero">
        <div className="em-overlay">

          {/* 🔹 CENTER SECTION */}
          <div className="em-top-center">
            <h1 className="em-page-title">Event Management</h1>

            <div className="em-breadcrumb">
              <Link to="/" className="em-home-btn">🏠 Home</Link>
              <span>→</span>
              <span>Service</span>
              <span>→</span>
              <span className="active">Event Management</span>
            </div>
          </div>

          {/* 🔹 LEFT CONTENT */}
          <div className="em-content-left">
            <h2 className="em-heading">
              We Don’t Just Manage Events – We Create{" "}
              <span>Unforgettable Moments</span>
            </h2>

            <p className="em-desc">
              From small celebrations to grand experiences, Nexes Dine Solution
              takes care of everything you need to make your event shine. We blend
              creativity, planning, and flawless execution to turn your vision into
              reality – stress-free and full of style.
            </p>
          </div>

        </div>
      </section>

      {/* 🔥 WHAT WE DO SECTION */}
      <section className="em-whatwedo">
        <h2 className="em-section-title">
          What We Do: <span>Full-Service Event Magic</span>
        </h2>

        <p className="em-section-desc">
          At Nexes Dine Solution, we ensure that your event journey is seamless and
          memorable. From concept to execution, we handle every detail with precision,
          creativity, and passion.
        </p>

        <div className="em-card-grid">
          {[
            {
              title: "Catering",
              img: "https://nexesdinesolution.com/backend/uploads/image/EventManagementCards/1766845917_catering%20(1).png",
              text: "Delicious menus crafted to suit every taste and occasion."
            },
            {
              title: "DJ & Music Setup",
              img: "https://nexesdinesolution.com/backend/uploads/image/EventManagementCards/1766845932_DJ & Music Setup.png",
              text: "Energetic sound systems and DJs to keep your event alive."
            },
            {
              title: "Bridal Makeup & Groom",
              img: "https://nexesdinesolution.com/backend/uploads/image/EventManagementCards/1766845944_Bridak Makeup & Groom.png",
              text: "Professional styling for your most special moments."
            },
            // add remaining items same pattern
            {
              title: "Stage & Venue Decoration",
              img: "https://nexesdinesolution.com/backend/uploads/image/EventManagementCards/1766845975_Stage & Venue Decoration.png",
              text: "Delicious menus crafted to suit every taste and occasion."
            },
            {
              title: "Photography & Videography",
              img: "https://nexesdinesolution.com/backend/uploads/image/EventManagementCards/1766845992_Photography & Videography.png",
              text: "Energetic sound systems and DJs to keep your event alive."
            },
            {
              title: "Photography & Videography (1)",
              img: "https://nexesdinesolution.com/backend/uploads/image/EventManagementCards/1766846010_Photography & Videography (1).png",
              text: "Professional styling for your most special moments."
            },
            // add remaining items same pattern
            {
              title: "Venue Booking & Setup",
              img: "https://nexesdinesolution.com/backend/uploads/image/EventManagementCards/1766846042_Venue Booking & Setup.png",
              text: "Delicious menus crafted to suit every taste and occasion."
            },
            {
              title: "Guest Management & Hosting.png",
              img: "https://nexesdinesolution.com/backend/uploads/image/EventManagementCards/1766846061_Guest Management & Hosting.png",
              text: "Energetic sound systems and DJs to keep your event alive."
            },
            {
              title: "Return Gifts & Custom Decor",
              img: "https://nexesdinesolution.com/backend/uploads/image/EventManagementCards/1766846067_Return Gifts & Custom Decor.png",
              text: "Professional styling for your most special moments."
            }

          ].map((item, i) => (
            <div className="em-flip-card" key={i}>
              <div className="em-flip-inner">

                {/* FRONT – IMAGE ONLY */}
                <div className="em-flip-front">
                  <img src={item.img} alt={item.title} />
                </div>

                {/* BACK – TEXT */}
                <div className="em-flip-back">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span>#Nexes Dine Solution</span>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>


      <section className="em-moments">
        <h2 className="em-moments-title">The Heart of Nexes</h2>

        <p className="em-moments-desc">
          Our clients aren’t just customers—they’re the reason we do what we do.
          Every smile we create and every event we bring to life becomes part of
          our story.
        </p>

        <h3 className="em-moments-sub">Moments We’ll Never Forget</h3>

        <div className="em-slider-wrapper">
          <button className="em-arrow left" onClick={prev}>
            ←
          </button>

          <div className="em-slider-grid">
            {visibleImages.map((img, i) => (
              <div className="em-slide-card" key={i}>
                <img src={img.url} alt={img.name} />
              </div>
            ))}
          </div>

          <button className="em-arrow right" onClick={next}>
            →
          </button>
        </div>
      </section>


      <section className="pride-section">
      <h2 className="pride-title">Real Voices from Real Celebrations</h2>

      <div className="pride-box">
        <button className="pride-arrow left" onClick={prevv}>‹</button>

        <div className="pride-videos">
          {videos.slice(indexx, indexx + 3).map((v, i) => {
            const globalIndexx = indexx + i;
            return (
              <div className="pride-card" key={globalIndexx}>
                <video
                  ref={(el) => (videoRefs.current[globalIndexx] = el)}
                  src={v.url}
                  preload="metadata"
                  onLoadedMetadata={(e) => {
                    e.target.currentTime = previewTimes[globalIndexx] || 2;
                  }}
                  onClick={() => togglePlay(globalIndexx)}
                />
                <div className="play-overlay">▶</div>
              </div>
            );
          })}
        </div>

        <button className="pride-arrow right" onClick={nextt}>›</button>
      </div>

      {/* CTA */}
      <div className="pride-cta">
        <div>
          <h3>Have a Question or a Crazy Idea? Try Nexes!</h3>
          <p>
            We’re the team that loves wild ideas and bold visions.  
            Let’s chat and turn your imagination into something real.
          </p>
        </div>
        <button className="pride-btn">Let’s Connect</button>
      </div>
    </section>

    </>

  );
}

export default EventManagement;
