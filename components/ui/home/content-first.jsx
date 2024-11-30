import Spectral from "@/lib/fonts/spectral";
import { Parallax } from "react-parallax";
import BlurFade from "../blur-fade";

export default function ContentFirst() {
  return (
    <div className="grid grid-cols-5 container">
      <div className="col-span-3 flex flex-col">
        <div
          className={`${Spectral.className} max-w-xl font-extralight text-7xl text-left leading-none tracking-normal mt-3`}
        >
          <BlurFade delay={0.25 + 3 * 0.05} inView>
            Where Artistry Meets Elegance ~
          </BlurFade>
        </div>
        <div className="max-w-xl font-extralight text-md text-gray-300 text-justify w-full mt-12">
          <BlurFade delay={0.25 + 4 * 0.05} inView>
            With more than 8 years of experience, Yunius has redefined the
            Indonesian fashion industry by creating unique, luxurious kebaya and
            bridal designs under the{" "}
            <span className="font-semibold text-white">
              Yunius Kebaya Bride
            </span>{" "}
            brand.
          </BlurFade>
        </div>
      </div>
      <div className="col-span-2">
        <Parallax
          bgImage="/images/home/image-1.webp"
          className="aspect-video object-cover border border-gray-600 bg-zinc-950"
          strength={200}
        >
          <div style={{ height: 220 }}></div>
        </Parallax>
      </div>
    </div>
  );
}
