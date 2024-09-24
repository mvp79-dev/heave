"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ReactLenis, useLenis } from 'lenis/react'
import { Section1 } from "./Section1";
import "./main.css";
import { Section2 } from "./Section2";
import { Section3 } from "./Section3";
import { Section4 } from "./Section4";
import { Section5 } from "./Section5";
import { Section6 } from "./Section6";
import { Section7 } from "./Section7";
import { Section8 } from "./Section8";

const Main = () => {

  // SCROLL TO TOP

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const [loadingAnimationFinished, setLoadingAnimationFinished] = useState(null);
  const sectionRef = useRef()

  useLayoutEffect(() => {
    setTimeout(() => {
      setLoadingAnimationFinished(true)
    }, [3000])
    gsap.fromTo(sectionRef.current, { opacity: 1 }, { opacity: 0, pointerEvents: "none", duration: 0.5, delay: 3, onComplete: () => {sectionRef.current.style.display = "none";} })
  }, [])

  // LENIS

  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.stop();
    }
  }, [lenis]);

  useEffect(() => {
    if (loadingAnimationFinished) {
      setTimeout(() => {
        lenis?.start();
      }, 100);
    }
  }, [loadingAnimationFinished, lenis]);

  return (
    <ReactLenis root>
      <section className="section loading-video" ref={sectionRef} >
        <div className="loading-video-content">
          <video src="/videos/loadingvideo.mp4" className="loading-video-content-video" autoPlay="autoplay" muted playsInline="true" data-wf-ignore="true" preload="auto" />
        </div>
      </section>
      <Section1 loadingAnimationFinished={loadingAnimationFinished} />
      <Section2 />
      <Section4 />
      <Section5 />
      <Section3 />
      <Section6 />
      <Section7 />
      <Section8 />
    </ReactLenis>
  );
};

export default Main;