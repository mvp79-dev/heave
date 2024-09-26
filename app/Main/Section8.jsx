/* eslint-disable react/no-unescaped-entities */
import React, { Suspense, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { Experience } from "./Plane3D/Experience";
import { motion, useTransform, useScroll } from "framer-motion";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const Section8 = () => {

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-47%"]);

  return (
    <section ref={targetRef} className="eight">
      <div className="eight-sticky">
        <div className="eight-sticky-text-contents">
          <h1 className="subheadline white" >Some of the brands we’ve worked with</h1>
        </div>
        <motion.div style={{ x }} className="eight-sticky-content">
          <div className="eight-card-invisible"></div>
          <div className="eight-card">
            <div className="eight-card-content">
              <h1 className="small-subheadline white" >A Piece Of Me</h1>
              <div className="eight-card-image">
                <Image src="/images/testimage.PNG" className="eight-card-image-img" width={2000} height={2000} alt="Main Image" />
              </div>
              <p className="description white" >We are passionate about elevating brands by leveraging viral marketing strategies that we have meticulously mastered over the years.</p>
            </div>
          </div>
          <div className="eight-card">
            <div className="eight-card-content">
              <h1 className="small-subheadline white" >Always Open</h1>
              <div className="eight-card-image">
                <Image src="/images/testimage2.PNG" className="eight-card-image-img" width={2000} height={2000} alt="Main Image" />
              </div>
              <p className="description white" >We are passionate about elevating brands by leveraging viral marketing strategies that we have meticulously mastered over the years.</p>
            </div>
          </div>
          <div className="eight-card">
            <div className="eight-card-content">
              <h1 className="small-subheadline white" >Scrolling Therapy</h1>
              <div className="eight-card-image">
                <Image src="/images/testimage.PNG" className="eight-card-image-img" width={2000} height={2000} alt="Main Image" />
              </div>
              <p className="description white" >We are passionate about elevating brands by leveraging viral marketing strategies that we have meticulously mastered over the years.</p>
            </div>
          </div>
          <div className="eight-card">
            <div className="eight-card-content">
              <h1 className="small-subheadline white" >Color Into The World</h1>
              <div className="eight-card-image">
                <Image src="/images/testimage2.PNG" className="eight-card-image-img" width={2000} height={2000} alt="Main Image" />
              </div>
              <p className="description white" >We are passionate about elevating brands by leveraging viral marketing strategies that we have meticulously mastered over the years.</p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="eight-content-gradient"></div>
    </section>
  );
};