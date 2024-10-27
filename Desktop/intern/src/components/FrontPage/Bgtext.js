import React, { useState, useEffect } from 'react';

const words = ['innovating', 'designing', 'developing', 'creating']; // add your words here

const Bgtext = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setCurrentWordIndex((currentWordIndex + 1) % words.length);
        setAnimate(false);
      }, 500); // adjust the delay as needed
    }, 2000); // adjust the interval as needed
    return () => clearInterval(intervalId);
  }, [currentWordIndex]);

  return (
    <div>
      <header>
        {/* <!-- This div is  intentionally blank. It creates the transparent black overlay over the video which you can modify in the CSS --> */}
        <div className="overlay"></div>

        {/* <!-- The HTML5 video element that will create the background video on the header --> */}
        <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
          <source xs={12} md={9} lg={9} src="https://cdn.coverr.co/videos/coverr-cinematic-snowy-mountains-7615/720p.mp4" className="video" type="video/mp4" />
        </video>

        {/* <!-- The header content --> */}
        <div className="container h-100">
          <div className="d-flex h-100 text-center align-items-center">
            <div className="w-100 text-white">
              <h1 className="display-3">Build Professional Website</h1>
              <p className="lead mb-0">We are Nepal's Authentic Web development Tech Company</p>
            </div>
          </div>
        </div>
      </header>

      <div className="carousel-container">
        <p>We focus on working <span className={`carousel-text ${animate ? 'up' : ''} `}>{words[currentWordIndex]}</span></p>
      </div>
    </div>
  );
};

export default Bgtext;