"use client";

import Navigation from "@/components/ui/navigation";
import { forwardRef } from "react";

export default forwardRef(function Header(_, header) {
  return (
    <div
      ref={header}
      className="absolute opacity-100 transition-opacity duration-500 z-40 top-0 start-0 w-full mt-14 lg:mt-10 lg:px-10 text-center"
    >
      <div className="inline-block mx-auto lg:py-2 lg:px-6">
        <Navigation />
      </div>
    </div>
  );
});
