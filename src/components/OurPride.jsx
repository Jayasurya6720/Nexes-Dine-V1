import React, { useEffect, useRef, useState } from "react";
import "./OurPride.css";

function OurPride() {
  const [videoList, setVideoList] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);
  const [activeVideoIndex, setActiveVideoIndex] = useState(null);
  const [previewMap, setPreviewMap] = useState({});

  const videoRefMap = useRef({}); // 🔥 clear name

 const getVideosPerSlide = () => {
  if (window.innerWidth <= 767) return 2;   // mobile
  if (window.innerWidth <= 1023) return 3;  // tablet
  return 4;                                 // desktop
};

const [videosPerSlide, setVideosPerSlide] = useState(getVideosPerSlide());

useEffect(() => {
  const handleResize = () => {
    setVideosPerSlide(getVideosPerSlide());
    setSlideIndex(0);
    setActiveVideoIndex(null);
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);


  // 🔥 Fetch videos + preview time
  useEffect(() => {
    fetch("https://nexesdinesolution.com/backend/list.php")
      .then((res) => res.json())
      .then((data) => {
        const prideList = data.filter((item) =>
          item.url.includes("/video/OurPride/")
        );

        const previewObj = {};
        prideList.forEach((_, idx) => {
          previewObj[idx] = Math.floor(Math.random() * 5) + 1;
        });

        setPreviewMap(previewObj);
        setVideoList(prideList);
      });
  }, []);

  // 🔥 PLAY / PAUSE
  const handleVideoToggle = (videoIdx) => {
    // pause all others
    Object.entries(videoRefMap.current).forEach(([key, vid]) => {
      if (vid && Number(key) !== videoIdx) {
        vid.pause();
      }
    });

    const currentVideo = videoRefMap.current[videoIdx];
    if (!currentVideo) return;

    if (currentVideo.paused) {
      currentVideo.muted = false; // 🔥 MUST
      currentVideo.play();
      setActiveVideoIndex(videoIdx);
    } else {
      currentVideo.pause();
      setActiveVideoIndex(null);
    }
  };

  // 🔥 NEXT / PREVIOUS
  const goNext = () => {
    Object.values(videoRefMap.current).forEach((v) => v?.pause());
    if (slideIndex + videosPerSlide < videoList.length) {
      setSlideIndex(slideIndex + videosPerSlide);
      setActiveVideoIndex(null);
    }
  };

  const goPrev = () => {
    Object.values(videoRefMap.current).forEach((v) => v?.pause());
    if (slideIndex - videosPerSlide >= 0) {
      setSlideIndex(slideIndex - videosPerSlide);
      setActiveVideoIndex(null);
    }
  };

  return (
    <section className="pride-section">
      <h2>Their Words, Our Pride</h2>

      <p className="subtitle">
        Each client we serve leaves behind more than a thank you — they leave a
        story, a shared moment, a memory crafted with care.
      </p>

      <div className="video-row">
        {videoList
          .slice(slideIndex, slideIndex + videosPerSlide)
          .map((item, localIdx) => {
            const globalVideoIndex = slideIndex + localIdx;

            return (
              <div className="video-card" key={globalVideoIndex}>
                <video
                  ref={(el) =>
                    (videoRefMap.current[globalVideoIndex] = el)
                  }
                  src={`${item.url}#t=${previewMap[globalVideoIndex] || 2}`}
                  preload="metadata"
                  muted
                  playsInline
                />

                {/* 🔥 Play overlay */}
                {activeVideoIndex !== globalVideoIndex && (
                  <div
                    className="play-overlayy"
                    onClick={() =>
                      handleVideoToggle(globalVideoIndex)
                    }
                  >
                    <div className="play-circle">
                      <span className="triangle" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
      </div>

      {/* 🔥 Bottom arrows */}
      <div className="nav-bottom">
        <button onClick={goPrev}>←</button>
        <button onClick={goNext}>→</button>
      </div>
    </section>
  );
}

export default OurPride;
