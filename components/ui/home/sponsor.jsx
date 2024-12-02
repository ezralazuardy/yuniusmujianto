import Link from "next/link";
import Image from "next/image";
import Spectral from "@/lib/fonts/spectral";
import BlurFade from "@/components/ui/blur-fade";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Sponsor() {
  return (
    <>
      <div
        className={`${Spectral.className} lg:max-w-xl text-white font-light text-4xl lg:text-3xl text-center w-full leading-none tracking-normal mt-40 lg:mt-60`}
      >
        <BlurFade delay={0.3} inView>
          Sponsored By
        </BlurFade>
      </div>
      <div className="max-w-xl w-full mt-10 grid grid-cols-4 gap-10 pointer-events-auto px-8 lg:px-0">
        <BlurFade delay={0.4} inView className="aspect-square">
          <div className="w-full h-full aspect-square">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Link href="https://lazuardy.tech" target="_blank">
                    <Image
                      alt="home-sponsor-1"
                      src="/images/sponsor/sponsor-1.webp"
                      className="aspect-square border border-gray-600"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="shadow-2xl px-4 py-2 bg-black rounded text-white mb-1">
                  <div className="flex flex-col text-left">
                    <div className="font-semibold text-md">Lazuardy</div>
                    <div className="font-extralight text-gray-300 text-xs mt-1">
                      We help business grow bigger
                      <br />
                      through technology.
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </BlurFade>
        <BlurFade delay={0.5} inView className="aspect-square">
          <div className="w-full h-full aspect-square border border-dotted border-gray-600 bg-zinc-950"></div>
        </BlurFade>
        <BlurFade delay={0.6} inView className="aspect-square">
          <div className="w-full h-full aspect-square border border-dotted border-gray-600 bg-zinc-950"></div>
        </BlurFade>
        <BlurFade delay={0.7} inView className="aspect-square">
          <div className="w-full h-full aspect-square border border-dotted border-gray-600 bg-zinc-950"></div>
        </BlurFade>
      </div>
    </>
  );
}
