import React, { Suspense, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const Section1 = () => {

  return (
    <section className="section one">
        <div className="one-content">
            <div className="one-content-textbox">
                <h1 className="headline" >We Create Brands</h1>
                <p className="description" >We elevate brands through viral marketing strategies we’ve mastered in the past. </p>
            </div>
            <div className="one-image">
                <Image src="/images/main.png" className="one-image-img" width={2000} height={2000} alt="Main Image" />
            </div>
        </div>
    </section>
  );
};