import Image from "next/image";
import Spectral from "@/lib/fonts/spectral";
import BlurFade from "@/components/ui/blur-fade";
import { Parallax } from "react-parallax";
import logo from "@/public/images/logo.webp";

export default function ContentFirst() {
  return (
    <div className="flex flex-col w-full px-20 min-h-screen pt-40">
      <div className="w-full flex flex-col items-center justify-center mb-10">
        <BlurFade delay={0.5} inView>
          <Image src={logo} alt="logo" width={220} height="auto" />
        </BlurFade>
      </div>
      <div className="w-full grid grid-cols-2">
        <div className="flex flex-col">
          <div
            className={`${Spectral.className} max-w-xl font-extralight text-7xl text-left leading-none tracking-normal mt-3`}
          >
            <BlurFade delay={0.6} inView>
              Where Artistry Meets Elegance ~
            </BlurFade>
          </div>
          <div className="max-w-xl font-extralight text-md text-gray-300 text-justify w-full mt-12">
            <BlurFade delay={0.7} inView>
              With more than 8 years of experience, Yunius has redefined the
              Indonesian fashion industry by creating unique, luxurious kebaya
              and bridal designs under the{" "}
              <span className="font-semibold text-white">
                Yunius Kebaya Bride
              </span>{" "}
              brand.
            </BlurFade>
          </div>
        </div>
        <div className="flex flex-col ps-24">
          <Parallax
            bgImage="/images/home/image-1.webp"
            className="aspect-video object-cover border border-gray-600 bg-zinc-950"
            strength={200}
          >
            <div style={{ height: 220 }}></div>
          </Parallax>
        </div>
      </div>
    </div>
  );
}
