import React from 'react';
import { ABOUT_CONTENT } from '../../constants';

const About = () => {
  return (
    <section id="about" className="about-container">
      <div className="about-intro-wrapper ">
        
        {/* --- CỘT TRÁI: TEXT --- */}
        <div className="intro-text-col">
          <h2 className="intro-title">
            {ABOUT_CONTENT.title}
          </h2>
          
          <p className="intro-desc">
            {ABOUT_CONTENT.description}
          </p>
          
          {/* Wrapper cho nút để căn giữa trên mobile, trái trên desktop */}
          <div className="flex justify-center md:justify-start">
            <a 
              href={ABOUT_CONTENT.buttonLink}
              className="inline-flex items-center px-8 py-3 bg-[var(--brand-primary)] text-white font-bold rounded-full hover:bg-[var(--brand-dark)] transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
            >
              {ABOUT_CONTENT.buttonText} →
            </a>
          </div>
        </div>

       {/* --- CỘT PHẢI: VIDEO --- */}
        <div className="intro-media-col">
          <div className="about-video-wrapper">
            <iframe
              className="absolute top-0 left-0 w-full h-full object-cover"
              // Link embed giữ nguyên các tham số autoplay
              src={`https://www.youtube.com/embed/${ABOUT_CONTENT.videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${ABOUT_CONTENT.videoId}&rel=0&modestbranding=1&showinfo=0`}
              title="TaiTien About Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;