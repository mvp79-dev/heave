"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ReactLenis, useLenis } from 'lenis/react'
import { Section1 } from "./Section1";
import "./main.css";

const Main = () => {

  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis?.stop();
    }
  }, [lenis]);

  useLayoutEffect(() => {
      setTimeout(() => {
        lenis?.start();
      }, 1000);
  }, [lenis]);

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  return (
    <ReactLenis root>
      <Section1 />
    </ReactLenis>
  );
};

export default Main;