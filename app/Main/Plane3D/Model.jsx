import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useGLTF, useVideoTexture } from '@react-three/drei'
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Model(props) {
  const { nodes, materials } = useGLTF('/models/sony9.glb')

  const { camera, scene } = useThree();
  const model = useRef();

  const myVideoTexture = useVideoTexture("/videos/front.mov")
  myVideoTexture.flipY = false;

  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const tl = gsap.timeline();
  let mm = gsap.matchMedia();

  useLayoutEffect(() => {
  
      mm.add({
        isDesktop: "(min-width: 800px)",
        isMobile: "(max-width: 799px)"
      }, (context) => {
        let { isMobile, isDesktop } = context.conditions;
  
        tl
        .to(camera.position, {
            z: isMobile ? 25 : 12,
            y: 1,
            scrollTrigger: {
              trigger: ".one-two",
              start: "top bottom",
              end: "top top",
              scrub: true,
              immediateRender: false,
            },
          })
        .to(model.current.rotation, {
            y: Math.PI * 1.25,
            scrollTrigger: {
              trigger: ".one-two",
              start: "top bottom",
              end: "top top",
              scrub: true,
              immediateRender: false,
            },
        })
        .to(model.current.position, {
            x: -0.3,
            y: -1.75,
            scrollTrigger: {
              trigger: ".one-two",
              start: "top bottom",
              end: "top top",
              scrub: true,
              immediateRender: false,
            },
        })
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    // <group {...props} dispose={null} ref={model} position={ [ 0.65, -1.3, 0 ] } rotation={ [ 0, Math.PI * 1, 0 ] } >
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.object_0002.geometry}
    //     material={materials['Camera.001']}
    //     scale={0.2}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.object_0003.geometry}
    //     position={[0, 0, -0.005]}
    //     scale={0.2}
    //   >
    //     <meshBasicMaterial map={myVideoTexture} />
    //   </mesh>
    //   <mesh scale={0.2} position={[0.675, 1.3, -3.06]} rotation-y={Math.PI * 1} >
    //     <planeGeometry args={[13.2, 9]}  />
    //     <meshBasicMaterial map={myVideoTexture} />
    //   </mesh>
    // </group>
    // <group {...props} dispose={null} ref={model} position={ [ 0.65, -1.3, 0 ] } rotation={ [ 0, Math.PI * 1, 0 ] } >
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Object_4.geometry}
    //       material={materials.Camera}
    //       scale={0.2}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.screenplane.geometry}
    //       position={[0.674, 1.288, -3.041]}
    //       rotation={[Math.PI / 2, 0, Math.PI]}
    //       scale={[1.318, 0.938, 0.907]}
    //     >
    //       <meshBasicMaterial map={myVideoTexture} />
    //     </mesh>
    // </group>
    <group {...props} dispose={null} ref={model} position={ [ 0.65, -1.3, 0 ] } rotation={ [ 0, Math.PI * 1, 0 ] } >
    <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        position={[0.683, 1.279, -3.05]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={[1.288, 0.583, 0.893]}
    >
      <meshBasicMaterial map={myVideoTexture} />
    </mesh>
    <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.Camera}
        scale={0.2}
    />
  </group>
  )
}

useGLTF.preload('/models/sony9.glb')