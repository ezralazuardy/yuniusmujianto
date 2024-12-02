import Link from "next/link";
import Spectral from "@/lib/fonts/spectral";
import BlurFade from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { Parallax } from "react-parallax";
import { IconPhoto } from "@tabler/icons-react";

export default function ContentSecond() {
  return (
    <>
      <div
        className={`${Spectral.className} lg:max-w-xl text-center text-white font-light text-4xl lg:text-3xl w-full leading-none tracking-normal px-8 lg:px-0 mt-20 lg:mt-40`}
      >
        <BlurFade delay={0.5} inView>
          <div className="hidden lg:block">
            A Story of Elegance and Identity
          </div>
          <div className="block lg:hidden">
            A Story of
            <br />
            Elegance and Identity
          </div>
        </BlurFade>
      </div>
      <div className="max-w-xl font-extralight text-sm lg:text-md text-gray-300 text-justify w-full mt-6 lg:mt-10 px-8 lg:px-0">
        <BlurFade delay={0.6} inView>
          Rooted in the philosophy of{" "}
          <span className="font-semibold text-white">
            &quot;The Luxurious Sense of Belonging&quot;
          </span>
          , each kebaya is designed to radiate confidence and charm, allowing
          every woman to embrace her beauty with pride.
        </BlurFade>
      </div>
      <div className="w-full mt-12 lg:mt-16">
        <Parallax
          bgImage="/images/home/image-2.webp"
          className="aspect-video object-cover border-t border-b border-gray-600 bg-zinc-950 max-h-screen w-full"
          strength={200}
        >
          <div style={{ height: "auto" }}></div>
        </Parallax>
      </div>
      <div className="max-w-xl font-extralight text-sm lg:text-md text-gray-300 text-justify w-full mt-12 lg:mt-16 px-8 lg:px-0">
        <BlurFade delay={0.5} inView>
          At <span className="font-semibold text-white">Yunius Mujianto</span>,
          we believe in creating more than just fashion.
        </BlurFade>
      </div>
      <div className="max-w-xl font-extralight text-sm lg:text-md text-gray-300 text-justify w-full mt-6 px-8 lg:px-0">
        <BlurFade delay={0.6} inView>
          Experience the timeless artistry and modern refinement that have made{" "}
          <span className="font-semibold text-white">Yunius Kebaya Bride</span>{" "}
          a symbol of luxury and individuality in the world of fashion.
        </BlurFade>
      </div>
      <div className="max-w-xl w-full mt-8 lg:mt-12 pointer-events-auto px-8 lg:px-0">
        <BlurFade delay={0.7} inView className="hidden lg:flex justify-end">
          <Link href="/gallery">
            <Button
              size="default"
              className="hover:shadow-2xl hover:scale-105 transition-transform duration:500"
            >
              See Our Gallery <IconPhoto className="w-5 h-5" />
            </Button>
          </Link>
        </BlurFade>
        <BlurFade delay={0.7} inView className="flex lg:hidden justify-end">
          <Link href="/gallery">
            <Button
              size="sm"
              className="hover:shadow-2xl hover:scale-105 transition-transform duration:500"
            >
              See Our Gallery <IconPhoto className="w-5 h-5" />
            </Button>
          </Link>
        </BlurFade>
      </div>
    </>
  );
}
