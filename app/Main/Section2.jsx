/* eslint-disable react/no-unescaped-entities */
import React, { Suspense, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const Section2 = () => {

  const titleRef = useRef()
  const descriptionRef = useRef()

  useEffect(() => {
    const split = new SplitText(titleRef.current, { type: "chars" });
    gsap.fromTo(split.chars, { 'will-change': 'opacity, transform', opacity: 0, scale: 0.6, rotationZ: () => gsap.utils.random(-20,20)}, { ease: 'power4', opacity: 1, scale: 1, rotation: 0, stagger: 0.065, scrollTrigger: { trigger: titleRef.current, start: "top bottom", end: "bottom center", scrub: true } });

    const titleSplitText = new SplitText(descriptionRef.current, { type: 'words' });
    gsap.fromTo(titleSplitText.words, { opacity: 0, }, { opacity: 1, stagger: 0.01, scrollTrigger: { trigger: descriptionRef.current, start: "top bottom", end: "bottom center", scrub: true } })
  }, [])

  return (
    <section className="section two">
      <div className="section-border" />
      <div className="two-content">
        <div className="two-content-left">
          <p className="description white" ref={descriptionRef} >We are passionate about elevating brands by leveraging viral marketing strategies that we have meticulously mastered over the years. Our approach combines innovative techniques and data-driven insights, ensuring your content resonates with audiences and engages them meaningfully. By creating campaigns that capture attention and drive results, we transform your brand’s visibility and impact. Let us partner with you to unlock your brand's full potential through effective and transformative marketing strategies.</p>
        </div>
        <div className="two-content-right">
          <h1 className="subheadline white" ref={titleRef} >About Us</h1>
        </div>
      </div>
    </section>
  );
};