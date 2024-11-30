"use client";

import { useEffect, useRef, forwardRef } from "react";

export default forwardRef(function Video(_, video) {
  const frame = useRef(null);

  useEffect(() => {
    const f = frame?.current;
    const v = video?.current;

    const handleVideoLoaded = () => {
      v.play();
      setTimeout(() => {
        v.classList.remove("hidden");
        f.classList.add("opacity-100");
        f.classList.remove("opacity-0");
      }, 1000);
    };

    if (v && f) {
      v.addEventListener("loadeddata", handleVideoLoaded);
      v.load();
    }

    return () => {
      if (v) {
        v.removeEventListener("loadeddata", handleVideoLoaded);
        v.pause();
        v.removeAttribute("src");
        v.load();
      }
    };
  });

  return (
    <div className="relative min-h-screen">
      <div
        ref={frame}
        className="opacity-0 transition-all duration-1000 absolute z-10 top-0 start-0 h-full w-full"
      >
        <video
          ref={video}
          autoPlay
          loop
          muted
          className="hidden video-background"
        >
          <source src="videos/home.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute z-20 top-0 start-0 h-full w-full bg-black/60"></div>
    </div>
  );
});
