/* eslint-disable react/no-unescaped-entities */
import React, { Suspense, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const Section5 = () => {

    const textRef = useRef()

    useEffect(() => {
        const titleSplitText = new SplitText(textRef.current, { type: 'words' });
        gsap.fromTo(titleSplitText.words, { opacity: 0, }, { opacity: 1, stagger: 0.01, scrollTrigger: { trigger: ".five-content", start: "top bottom", end: "bottom 40%", scrub: true } })
      }, [])

  return (
    <section className="section five">
        <div className="five-content">
            <h1 className="subheadline white" ref={textRef} >We are passionate about elevating brands by leveraging viral marketing strategies that we have meticulously mastered over the years. Our approach combines innovative techniques and data-driven insights, ensuring your content resonates with audiences and engages them meaningfully. By creating campaigns that capture attention and drive results, we transform your brand’s visibility and impact.</h1>
        </div>
        <div className="section-border" />
    </section>
  );
};