/* eslint-disable react/no-unescaped-entities */
import React, { Suspense, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const Section4 = () => {

    const videoRef = useRef()

    useEffect(() => {
        gsap.fromTo(videoRef.current, { yPercent: 7.5 }, { yPercent: -7.5, scrollTrigger: { trigger: ".four", start: "top bottom", end: "bottom top", scrub: true} })
    }, [])

  return (
    <section className="section four">
        <div className="four-content">
            <div className="four-content-frame">
                <video src="/videos/test2.mp4" className="four-video" ref={videoRef} autoPlay="autoplay" muted playsInline="true" data-wf-ignore="true" preload="auto" loop />
            </div>
        </div>
    </section>
  );
};