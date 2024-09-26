import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useGLTF, useVideoTexture } from '@react-three/drei'
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Model(props) {
  const { nodes, materials } = useGLTF('/models/plane.glb')

  const { camera, scene } = useThree();
  const model = useRef();


  const tl = gsap.timeline();
  let mm = gsap.matchMedia();

  useLayoutEffect(() => {
  
      mm.add({
        isDesktop: "(min-width: 800px)",
        isMobile: "(max-width: 799px)"
      }, (context) => {
        let { isMobile, isDesktop } = context.conditions;
  
        tl
        // .to(model.current.position, {
        //     x: 5,
        //     scrollTrigger: {
        //       trigger: ".eight",
        //       start: "top bottom",
        //       end: "bottom top",
        //       scrub: true,
        //       immediateRender: false,
        //     },
        // })
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <group {...props} dispose={null} ref={model} >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.paper_plane_asset.geometry}
        material={materials.Paper_my}
        position={[0, 0, 0]}
        scale={0.25}
      />
    </group>
  )
}

useGLTF.preload('/models/plane.glb')