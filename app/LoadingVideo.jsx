/* eslint-disable jsx-a11y/alt-text */
"use client";
import { Menu } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

export const LoadingVideo = () => {

    const sectionRef = useRef()

    useLayoutEffect(() => {
        gsap.fromTo(sectionRef.current, { opacity: 1 }, { opacity: 0, duration: 0.5, delay: 3 })
    }, [])

  return (
    <section className="section loading-video" ref={sectionRef} >
        <div className="loading-video-content">
            <video src="/videos/loadingvideo.mp4" className="loading-video-content-video" autoPlay="autoplay" muted playsInline="true" data-wf-ignore="true" preload="auto" />
        </div>
    </section>
  );
};