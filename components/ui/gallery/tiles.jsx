"use client";

import * as THREE from "three";
import { useRef, useState } from "react";
import { Canvas, useFrame, useThree, extend } from "@react-three/fiber";
import { Image, Scroll, ScrollControls, useScroll } from "@react-three/drei";
import { proxy, useSnapshot } from "valtio";
import { easing } from "maath";

extend(THREE);

const url = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const state = proxy({
  clicked: null,
  urls: url.map((u) => `/images/gallery/${u}.webp`),
});

export default function Tiles() {
  return (
    <Canvas
      style={{ width: "100%", height: "100vh" }}
      gl={{ antialias: false }}
      dpr={[1, 1.5]}
      onPointerMissed={() => (state.clicked = null)}
    >
      <Items />
    </Canvas>
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
