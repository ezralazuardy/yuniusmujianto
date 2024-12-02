import Image from "next/image";
import Spectral from "@/lib/fonts/spectral";
import BlurFade from "@/components/ui/blur-fade";
import { Parallax } from "react-parallax";
import logo from "@/public/images/logo.webp";

export default function ContentFirst() {
  return (
    <div className="flex flex-col w-full lg:px-20 min-h-screen pt-20 lg:pt-28">
      <div className="w-full flex flex-col items-center justify-center mb-10 lg:mb-16">
        <BlurFade delay={0.5} inView>
          <Image
            src={logo}
            alt="logo"
            width={240}
            height="auto"
            className="hidden lg:block"
          />
          <Image
            src={logo}
            alt="logo"
            width={200}
            height="auto"
            className="block lg:hidden"
          />
        </BlurFade>
      </div>
      <div className="w-full grid lg:grid-cols-2">
        <div className="flex flex-col px-8 lg:px-10">
          <div
            className={`${Spectral.className} lg:max-w-xl text-center lg:text-left text-white font-extralight text-5xl lg:text-7xl leading-none tracking-normal mt-3`}
          >
            <BlurFade delay={0.6} inView>
              Where Artistry Meets Elegance
            </BlurFade>
          </div>
          <div className="hidden lg:flex max-w-xl font-extralight text-sm lg:text-md text-gray-300 text-justify w-full mt-6 lg:mt-12">
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
        <div className="flex flex-col mt-12 lg:mt-0 lg:ps-24">
          <Parallax
            bgImage="/images/home/image-1.webp"
            className="aspect-video object-cover border-t border-b lg:border border-gray-600 bg-zinc-950"
            strength={200}
          >
            <div style={{ height: 220 }}></div>
          </Parallax>
        </div>
        <div className="flex lg:hidden max-w-xl font-extralight text-sm lg:text-md text-gray-300 text-justify w-full mt-12 px-8 lg:px-10">
          <BlurFade delay={0.7} inView>
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
    </div>
  );
}
