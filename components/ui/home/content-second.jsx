import Link from "next/link";
import Spectral from "@/lib/fonts/spectral";
import { Button } from "@/components/ui/button";
import { Parallax } from "react-parallax";
import { IconPhoto } from "@tabler/icons-react";

export default function ContentSecond() {
  return (
    <>
      <div
        className={`${Spectral.className} max-w-xl font-light text-3xl text-center w-full leading-none tracking-normal mt-80`}
      >
        — A Story of Elegance and Identity —
      </div>
      <div className="max-w-xl font-extralight text-md text-gray-300 text-justify w-full mt-10">
        Rooted in the philosophy of{" "}
        <span className="font-semibold text-white">
          &quot;The Luxurious Sense of Belonging&quot;
        </span>
        , each kebaya is designed to radiate confidence and charm, allowing
        every woman to embrace her beauty with pride.
      </div>
      <div className="w-full mt-16">
        <Parallax
          bgImage="/images/home/image-2.jpeg"
          className="aspect-video object-cover border-t border-b border-gray-600 bg-zinc-950 max-h-screen w-full"
          strength={200}
        >
          <div style={{ height: "auto" }}></div>
        </Parallax>
      </div>
      <div className="max-w-xl font-extralight text-md text-gray-300 text-justify w-full mt-16">
        At <span className="font-semibold text-white">Yunius Mujianto</span>, we
        believe in creating more than just fashion.
      </div>
      <div className="max-w-xl font-extralight text-md text-gray-300 text-justify w-full mt-6">
        Experience the timeless artistry and modern refinement that have made{" "}
        <span className="font-semibold text-white">Yunius Kebaya Bride</span> a
        symbol of luxury and individuality in the world of fashion.
      </div>
      <div className="max-w-xl text-right w-full mt-16 pointer-events-auto">
        <Link href="/gallery">
          <Button
            size="lg"
            className="hover:shadow-2xl hover:scale-105 transition-transform duration:500"
          >
            SEE OUR GALLERY <IconPhoto className="w-5 h-5" />
          </Button>
        </Link>
      </div>
    </>
  );
}
