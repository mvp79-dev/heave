import React, { useEffect, useRef, useState } from "react";
import Flickity from "flickity";
import "./flickity.css";
import gsap from "gsap";
import { TextPlugin } from 'gsap/TextPlugin';
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger, TextPlugin);

export const Section6 = () => {

  const carouselRef = useRef(null);
  const flickityInstance = useRef(null);

  useEffect(() => {
    const initializeFlickity = () => {
      if (carouselRef.current && !flickityInstance.current) {
        flickityInstance.current = new Flickity(carouselRef.current, {
          accessibility: true,
          adaptiveHeight: false,
          autoPlay: false,
          pauseAutoPlayOnHover: false,
          cellAlign: "left",
          contain: true,
          draggable: true,
          dragThreshold: 1,
          freeScroll: true,
          friction: 0.15,
          groupCells: false,
          initialIndex: 0,
          lazyLoad: false,
          percentPosition: false,
          prevNextButtons: true,
          pageDots: false,
          resize: true,
          rightToLeft: false,
          setGallerySize: true,
          wrapAround: false,
        });
  
        const flkty = flickityInstance.current;
        flkty.on('scroll');
  
        // Variables to track touch start position
        let startX, startY, isVerticalDrag = false;
  
        // Get the carousel element
        const slider = carouselRef.current;
  
        // Handle touchstart event
        const handleTouchStart = (e) => {
          startX = e.touches[0].clientX;
          startY = e.touches[0].clientY;
          isVerticalDrag = false;
        };
  
        // Handle touchmove event
        const handleTouchMove = (e) => {
          const deltaX = Math.abs(e.touches[0].clientX - startX);
          const deltaY = Math.abs(e.touches[0].clientY - startY);
  
          // If vertical drag is greater, flag it as vertical drag
          if (deltaY > deltaX) {
            isVerticalDrag = true;
          }
  
          // Prevent Flickity's horizontal drag if it's a vertical drag
          if (isVerticalDrag) {
            e.stopPropagation();
          }
        };
  
        // Attach event listeners to the slider element
        slider.addEventListener('touchstart', handleTouchStart);
        slider.addEventListener('touchmove', handleTouchMove);
  
        // Clean up event listeners when component unmounts
        return () => {
          slider.removeEventListener('touchstart', handleTouchStart);
          slider.removeEventListener('touchmove', handleTouchMove);
        };
      }
    };
  
    initializeFlickity();
  }, []);

  return (
    <section className="six" >
      <div className="six-content" >
        <div className="six-slider" ref={carouselRef}>
          <div className="six-slider-padding" ></div>
          <div className="six-slider-item" ></div>
          <div className="six-slider-item" ></div>
          <div className="six-slider-item" ></div>
          <div className="six-slider-item" ></div>
          <div className="six-slider-item" ></div>
          <div className="six-slider-item" ></div>
          <div className="six-slider-item" ></div>
          <div className="six-slider-item" ></div>
          <div className="six-slider-padding" ></div>
        </div>
      </div>
    </section>
  );
};