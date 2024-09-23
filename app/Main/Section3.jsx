/* eslint-disable react/no-unescaped-entities */
import React, { Suspense, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from "framer-motion";
import { wrap } from "@motionone/utils";

gsap.registerPlugin(SplitText, ScrollTrigger);

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 100,
    stiffness: 500
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <div className="scroller-div" >
            <Image src="/images/heavephone.png" className="scroller-image" width={500} height={1000} alt="Main Image" />
        </div>
        <div className="scroller-div" >
            <Image src="/images/heavephone.png" className="scroller-image" width={500} height={1000} alt="Main Image" />
        </div>
        <div className="scroller-div" >
            <Image src="/images/heavephone.png" className="scroller-image" width={500} height={1000} alt="Main Image" />
        </div>
        <div className="scroller-div" >
            <Image src="/images/heavephone.png" className="scroller-image" width={500} height={1000} alt="Main Image" />
        </div>
        <div className="scroller-div" >
            <Image src="/images/heavephone.png" className="scroller-image" width={500} height={1000} alt="Main Image" />
        </div>
        <div className="scroller-div" >
            <Image src="/images/heavephone.png" className="scroller-image" width={500} height={1000} alt="Main Image" />
        </div>
        <div className="scroller-div" >
            <Image src="/images/heavephone.png" className="scroller-image" width={500} height={1000} alt="Main Image" />
        </div>
        <div className="scroller-div" >
            <Image src="/images/heavephone.png" className="scroller-image" width={500} height={1000} alt="Main Image" />
        </div>
      </motion.div>
    </div>
  );
}

export const Section3 = () => {

  return (
    <section className="section three">
        <div className="three-left-gradient" />
        <ParallaxText baseVelocity={-2} />
        <div className="three-right-gradient" />
    </section>
  );
};