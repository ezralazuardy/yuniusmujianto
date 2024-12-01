import Image from "next/image";
import Link from "next/link";
import Spectral from "@/lib/fonts/spectral";
import BlurFade from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { IconPhone } from "@tabler/icons-react";
import profile from "@/public/images/profile.webp";

export default function Content() {
  return (
    <div className="flex w-full min-h-screen">
      <div className="grid grid-cols-4 w-full my-auto px-48">
        <div className="flex flex-col w-full col-span-3 my-auto">
          <div
            className={`${Spectral.className} flex w-full text-left text-white text-7xl font-extralight`}
          >
            <BlurFade delay={0.5} inView>
              About Him.
            </BlurFade>
          </div>
          <div className="flex w-full text-justify text-gray-300 text-md font-extralight mt-10 max-w-2xl">
            <BlurFade delay={0.6} inView>
              Yunius Mujianto was born in Semarang on June 4, 1986 with his
              nickname Yunius. He has given a new color to the fashion world of
              Indonesia for more than 8 years.
            </BlurFade>
          </div>
          <div className="flex w-full text-justify text-gray-300 text-md font-extralight mt-6 max-w-2xl">
            <BlurFade delay={0.7} inView>
              With that experience we have learned everything we need to know
              about how to make kebaya or bridal that is different from the
              others which also offers extraordinary artistic value through the{" "}
              <span className="text-white text-light">YUNIUS KEBAYA BRIDE</span>{" "}
              brand.
            </BlurFade>
          </div>
          <div className="flex w-full mt-16">
            <BlurFade delay={0.8} inView>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="hover:shadow-2xl hover:scale-105 transition-transform duration:500"
                >
                  <IconPhone className="w-5 h-5" />
                  CONTACT YUNIUS
                </Button>
              </Link>
            </BlurFade>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <BlurFade delay={0.9} inView>
            <Image
              src={profile}
              className="my-10"
              alt="Yunius Mujianto"
              width="100%"
              height="auto"
            />
          </BlurFade>
        </div>
      </div>
    </div>
  );
}
