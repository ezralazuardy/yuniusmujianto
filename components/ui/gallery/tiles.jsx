"use client";

import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree, extend } from "@react-three/fiber";
import { Image, Scroll, ScrollControls, useScroll } from "@react-three/drei";
import { proxy, useSnapshot } from "valtio";
import { easing } from "maath";
import BlurFade from "../blur-fade";

extend(THREE);

const url = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const state = proxy({
  clicked: null,
  urls: url.map((u) => `/images/gallery/${u}.webp`),
});

export default function Tiles() {
  const [showCanvas, setShowCanvas] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || document === "undefined") return;

    const canvasTimer = setTimeout(() => {
      setShowCanvas(true);
    }, 4000);

    return () => clearTimeout(canvasTimer);
  });

  return (
    <>
      {showCanvas ? (
        <Canvas
          style={{ width: "100%", height: "100vh" }}
          gl={{ antialias: false, performance: "low-power" }}
          dpr={[1, 1.5]}
          onPointerMissed={() => (state.clicked = null)}
        >
          <Items />
        </Canvas>
      ) : (
        <div className="w-full min-h-screen flex">
          <div className="w-full my-auto flex justify-center">
            <BlurFade delay={0.25 + 6 * 0.05} inView>
              <svg
                aria-hidden="true"
                className="animate-spin w-8 h-8 text-gray-600 fill-white"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </BlurFade>
          </div>
        </div>
      )}
    </>
  );
}

function Item({ index, position, scale, c = new THREE.Color(), ...props }) {
  const ref = useRef(null);
  const scroll = useScroll();
  const { clicked, urls } = useSnapshot(state);
  const [hovered, hover] = useState(false);
  const click = () => (state.clicked = index === clicked ? null : index);
  const over = () => hover(true);
  const out = () => hover(false);

  useFrame((_, delta) => {
    const y = scroll.curve(
      index / urls.length - 1.5 / urls.length,
      4 / urls.length,
    );
    easing.damp3(
      ref.current.scale,
      [clicked === index ? 4.7 : scale[0], clicked === index ? 5 : 4 + y, 1],
      0.15,
      delta,
    );
    ref.current.material.scale[0] = ref.current.scale.x;
    ref.current.material.scale[1] = ref.current.scale.y;
    if (clicked !== null && index < clicked)
      easing.damp(ref.current.position, "x", position[0] - 2, 0.15, delta);
    if (clicked !== null && index > clicked)
      easing.damp(ref.current.position, "x", position[0] + 2, 0.15, delta);
    if (clicked === null || clicked === index)
      easing.damp(ref.current.position, "x", position[0], 0.15, delta);
    easing.damp(
      ref.current.material,
      "grayscale",
      hovered || clicked === index ? 0 : Math.max(0, 1 - y),
      0.15,
      delta,
    );
    easing.dampC(
      ref.current.material.color,
      hovered || clicked === index ? "white" : "#aaa",
      hovered ? 0.3 : 0.15,
      delta,
    );
  });

  return (
    <Image
      {...props}
      alt={`image-${index}`}
      ref={ref}
      position={position}
      scale={scale}
      onClick={click}
      onPointerOver={over}
      onPointerOut={out}
    />
  );
}

function Items({ w = 0.7, gap = 0.15 }) {
  const { urls } = useSnapshot(state);
  const { width } = useThree((state) => state.viewport);
  const xW = w + gap;
  return (
    <ScrollControls
      horizontal
      damping={0.1}
      pages={(width - xW + urls.length * xW) / width}
    >
      <Scroll>
        {
          urls.map((url, i) => <Item key={i} index={i} position={[i * xW, 0, 0]} scale={[w, 4, 1]} url={url} />) /* prettier-ignore */
        }
      </Scroll>
    </ScrollControls>
  );
}
