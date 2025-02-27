/* eslint-disable jsx-a11y/alt-text */
"use client";
import Image from "next/image";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";

export const Navigation = () => {

    const navigationBar = useRef()
    const navigationMenu = useRef()
    const navigationBackground = useRef()

    // GSAP ANIMATIONS

    useEffect(() => {
        gsap.set(navigationMenu.current, { xPercent: 100, opacity: 1 });
        gsap.set(navigationBackground.current, { opacity: 0 });
    }, []);

    useLayoutEffect(() => {
        gsap.fromTo(navigationBar.current, { yPercent: -100, opacity: 0 }, { delay: 3.5, yPercent: 0, opacity: 1, duration: 0.5 })
    }, [])

    // SCROLLED

    const [navScrolled, setNavScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollThreshold = 10;
        if (window.scrollY > scrollThreshold) {
          setNavScrolled(true);
        } else {
          setNavScrolled(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    const scrollToSectionCenter = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionRect = section.getBoundingClientRect();
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const offset = sectionRect.top + scrollTop - (window.innerHeight / 2) + (sectionRect.height / 2);
      
          window.scrollTo({
            top: offset,
            behavior: "smooth",
          });
        }
    };

    const scrollToSectionTop = (sectionId) => {
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: "smooth" });
    };
      

  return (
    <div className={`navigation ${navScrolled ? "scrolled" : ""}`} ref={navigationBar} >
        <div className="navigation-left" >
            <Link href="/" className="link" >
                <div className="navigation-left-images">
                    <img src="/images/heavelogo.png" className="navigation-image" width={500} height={500} />
                </div>
            </Link>
            <ul className="navigation-menu">
                <li className="navigation-menu-row" onClick={() => scrollToSectionTop("section1")} >
                    <h1 className="small-description white hover-text-white" >Home</h1>
                </li>
                <li className="navigation-menu-row" onClick={() => scrollToSectionCenter("section2")} >
                    <h1 className="small-description white hover-text-white" >About</h1>
                </li>
                <li className="navigation-menu-row" onClick={() => scrollToSectionTop("section5")} >
                    <h1 className="small-description white hover-text-white" >Case Studies</h1>
                </li>
                <li className="navigation-menu-row" onClick={() => scrollToSectionTop("section7")} >
                    <h1 className="small-description white hover-text-white" >Process</h1>
                </li>
                <li className="navigation-menu-row" onClick={() => scrollToSectionCenter("section9")} >
                    <h1 className="small-description white hover-text-white" >Contact</h1>
                </li>
            </ul>
        </div>
        <div className="navigation-right">
            <div data-hover className="navigation-button navigation-button-mobile-hidden" onClick={() => scrollToSectionCenter("section9")} >
              <div className="button-content">
                <span className="small-description">Contact Us</span>
                <span className="small-description">Contact Us</span>
              </div>
              <div data-hover-bounds></div>
            </div>
            <div className="navigation-button navigation-button-desktop-hidden" onClick={() => scrollToSectionTop("section9")} >
              <div className="button-content">
                <span className="small-description">Contact Us</span>
                <span className="small-description">Contact Us</span>
              </div>
            </div>
        </div>
    </div>
  );
};