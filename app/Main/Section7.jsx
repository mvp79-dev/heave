/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Image from "next/image";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const Section7 = () => {

  // ISMOBILE

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= 768);
    }
  }, []);

  const titleRef = useRef()
  const descriptionRef = useRef()
  const boxRef1 = useRef()
  const boxRef2 = useRef()
  const boxRef3 = useRef()
  const boxRef4 = useRef()

  useEffect(() => {
    const titleSplitText = new SplitText(titleRef.current, { type: 'chars' });
    gsap.fromTo(titleSplitText.chars, { opacity: 0 }, { opacity: 1, stagger: 0.01, scrollTrigger: { trigger: titleRef.current, start: "top bottom", end: "bottom center", scrub: true } })
    gsap.fromTo(descriptionRef.current, { opacity: 0 }, { opacity: 1, scrollTrigger: { trigger: descriptionRef.current, start: "top 80%", end: "top 50%", scrub: true  } })
    gsap.fromTo(boxRef1.current, { yPercent: 25, opacity: 0, willChange: 'filter, transform', filter: 'blur(8px)' }, { yPercent: 0, opacity: 1, filter: 'blur(0px)', duration: 0.5, scrollTrigger: { trigger: boxRef1.current, start: "top bottom"  } })
    gsap.fromTo(boxRef2.current, { yPercent: 25, opacity: 0, willChange: 'filter, transform', filter: 'blur(8px)' }, { delay: isMobile ? 0 : 0.25, yPercent: 0, opacity: 1, filter: 'blur(0px)', duration: 0.5, scrollTrigger: { trigger: boxRef2.current, start: "top bottom"  } })
    gsap.fromTo(boxRef3.current, { yPercent: 25, opacity: 0, willChange: 'filter, transform', filter: 'blur(8px)' }, { delay: isMobile ? 0 : 0.5, yPercent: 0, opacity: 1, filter: 'blur(0px)', duration: 0.5, scrollTrigger: { trigger: boxRef3.current, start: "top bottom"  } })
    gsap.fromTo(boxRef4.current, { yPercent: 25, opacity: 0, willChange: 'filter, transform', filter: 'blur(8px)' }, { delay: isMobile ? 0 : 0.75, yPercent: 0, opacity: 1, filter: 'blur(0px)', duration: 0.5, scrollTrigger: { trigger: boxRef4.current, start: "top bottom"  } })
  }, [])

  return (
    <section className="section seven">
      <div className="seven-content">
        <div className="seven-content-item" ref={boxRef1} >
          <div className="seven-content-item-box" >
            <p className="small-description" >Clients</p>
            <h1 className="small-subheadline blue" >340k+</h1>
          </div>
        </div>
        <div className="seven-content-item" ref={boxRef2} >
          <div className="seven-content-item-box" >
            <p className="small-description" >Reviews</p>
            <h1 className="small-subheadline blue" >500k+</h1>
          </div>
        </div>
        <div className="seven-content-item" ref={boxRef3} >
          <div className="seven-content-item-box" >
            <p className="small-description" >Views</p>
            <h1 className="small-subheadline blue" >670k+</h1>
          </div>
        </div>
        <div className="seven-content-item" ref={boxRef4} >
          <div className="seven-content-item-box" >
            <p className="small-description" >Followers</p>
            <h1 className="small-subheadline blue" >120k+</h1>
          </div>
        </div>
      </div>
    </section>
  );
};