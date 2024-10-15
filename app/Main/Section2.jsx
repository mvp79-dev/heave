/* eslint-disable react/no-unescaped-entities */
import React, { Suspense, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from 'embla-carousel-auto-scroll'

gsap.registerPlugin(SplitText, ScrollTrigger);

export const Section2 = (options) => {

  // CAROUSEL
  const [emblaRef, emblaApi] = useEmblaCarousel({axis: "y", loop: true, watchDrag: false}, [AutoScroll({speed: 5})] )

  const [emblaRef2, emblaApi2] = useEmblaCarousel({axis: "y", loop: true, watchDrag: false}, [AutoScroll({speed: -5})] )

  const [emblaRef3, emblaApi3] = useEmblaCarousel({axis: "y", loop: true, watchDrag: false}, [AutoScroll({speed: 7.5})] )

  // const {
  //   prevBtnDisabled,
  //   nextBtnDisabled,
  //   onPrevButtonClick,
  //   onNextButtonClick
  // } = usePrevNextButtons(emblaApi)

  return (
    <section className="section two">
      <div className="two-content">
        <div className="two-content-left">
          <div className="textbox">
            <h1 className="small-subheadline white" >Making Short-Form Content That Captivates and Converts</h1>
            <motion.button className="button">
              <p className="description" >Let us tell you more</p>
              <div className="button-iconbox">
                <ChevronRight />
              </div>
            </motion.button>
          </div>
        </div>
      </div>
      <div className="two-content-right">
        <div className="left-fade" />
        <div className="right-fade" />
        <div className="top-fade" />
        <div className="bottom-fade" />
        <div className="two-content-right-content">
          <div className="two-carousel" ref={emblaRef} >
            <div className="two-row">
              <div className="two-item" >
                <Image src="/images/heavephone.png" className="two-item-image" alt="alt" width={1000} height={1000} />
              </div>
              <div className="two-item" >
                <Image src="/images/heavephone.png" className="two-item-image" alt="alt" width={1000} height={1000} />
              </div>
              <div className="two-item" >
                <Image src="/images/heavephone.png" className="two-item-image" alt="alt" width={1000} height={1000} />
              </div>
              <div className="two-item" >
                <Image src="/images/heavephone.png" className="two-item-image" alt="alt" width={1000} height={1000} />
              </div>
              <div className="two-item" >
                <Image src="/images/heavephone.png" className="two-item-image" alt="alt" width={1000} height={1000} />
              </div>
            </div>
          </div>
          <div className="two-carousel" ref={emblaRef2} >
            <div className="two-row">
              <div className="two-item" >
                <Image src="/images/heavephone.png" className="two-item-image" alt="alt" width={1000} height={1000} />
              </div>
              <div className="two-item" >
                <Image src="/images/heavephone.png" className="two-item-image" alt="alt" width={1000} height={1000} />
              </div>
              <div className="two-item" >
                <Image src="/images/heavephone.png" className="two-item-image" alt="alt" width={1000} height={1000} />
              </div>
              <div className="two-item" >
                <Image src="/images/heavephone.png" className="two-item-image" alt="alt" width={1000} height={1000} />
              </div>
              <div className="two-item" >
                <Image src="/images/heavephone.png" className="two-item-image" alt="alt" width={1000} height={1000} />
              </div>
            </div>
          </div>
          <div className="two-carousel" ref={emblaRef3} >
            <div className="two-row">
              <div className="two-item" >
                <Image src="/images/heavephone.png" className="two-item-image" alt="alt" width={1000} height={1000} />
              </div>
              <div className="two-item" >
                <Image src="/images/heavephone.png" className="two-item-image" alt="alt" width={1000} height={1000} />
              </div>
              <div className="two-item" >
                <Image src="/images/heavephone.png" className="two-item-image" alt="alt" width={1000} height={1000} />
              </div>
              <div className="two-item" >
                <Image src="/images/heavephone.png" className="two-item-image" alt="alt" width={1000} height={1000} />
              </div>
              <div className="two-item" >
                <Image src="/images/heavephone.png" className="two-item-image" alt="alt" width={1000} height={1000} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};