"use client";

import Image from "next/image";
import BlurFade from "@/components/ui/blur-fade";
import logo from "@/public/images/logo.webp";
import dynamic from "next/dynamic";

export const DynamicMap = dynamic(() => import("@/components/ui/map"), {
  ssr: false,
});

export default function Content() {
  return (
    <div className="flex w-full min-h-screen">
      <div className="flex flex-col w-full my-auto px-48">
        <div className="flex flex-col items-center w-full">
          <BlurFade delay={0.5} inView>
            <Image src={logo} alt="logo" width={300} height="auto" />
          </BlurFade>
        </div>
        <div className="flex flex-col text-center w-full font-extralight text-sm text-gray-300 mt-6">
          <BlurFade delay={0.6} inView>
            Phone (WhatsApp): +62 812-2582-2417
          </BlurFade>
        </div>
        <div className="flex flex-col text-center w-full font-extralight text-sm text-gray-300 mt-4">
          <BlurFade delay={0.7} inView>
            Jl. Rowosari II, RT 02, RW I, Wonosari, Ngaliyan, Semarang, Central
            Java, Indonesia 50244
          </BlurFade>
        </div>
        <div className="flex flex-col w-full mt-6">
          <BlurFade delay={0.8} inView>
            <DynamicMap />
          </BlurFade>
        </div>
      </div>
    </div>
  );
}
