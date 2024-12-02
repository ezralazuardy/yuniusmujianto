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
      <div className="grid lg:grid-cols-4 w-full my-auto lg:px-48 pb-8 lg:pb-0">
        <div className="flex flex-col w-full col-span-3 my-auto">
          <div className="flex lg:hidden w-full mb-8">
            <BlurFade delay={0.3} inView className="w-full">
              <Image
                src={profile}
                className="aspect-[24/8] w-full object-cover object-[50%_28%] filter grayscale"
                alt="Yunius Mujianto"
                width="100%"
                height="auto"
              />
            </BlurFade>
          </div>
          <div
            className={`${Spectral.className} flex w-full justify-start lg:justify-start text-white text-3xl lg:text-7xl font-extralight px-12 lg:px-0`}
          >
            <BlurFade delay={0.4} inView>
              About Him
            </BlurFade>
          </div>
          <div className="flex w-full text-justify text-gray-300 text-sm lg:text-md font-extralight mt-4 lg:mt-10 lg:max-w-2xl px-12 lg:px-0">
            <BlurFade delay={0.5} inView>
              Yunius Mujianto was born in Semarang on June 4, 1986 with his
              nickname Yunius. He has given a new color to the fashion world of
              Indonesia for more than 8 years.
            </BlurFade>
          </div>
          <div className="flex w-full text-justify text-gray-300 text-sm lg:text-md font-extralight mt-4 lg:max-w-2xl px-12 lg:px-0">
            <BlurFade delay={0.6} inView>
              With that experience we have learned everything we need to know
              about how to make kebaya or bridal that is different from the
              others which also offers extraordinary artistic value through the{" "}
              <span className="font-semibold text-white">
                YUNIUS KEBAYA BRIDE
              </span>{" "}
              brand.
            </BlurFade>
          </div>
          <div className="flex w-full mt-12 lg:mt-16 justify-start px-12 lg:px-0">
            <BlurFade delay={0.7}>
              <Link href="/contact">
                <Button
                  size="sm"
                  className="flex lg:hidden hover:shadow-2xl hover:scale-105 transition-transform duration:500"
                >
                  <IconPhone className="w-5 h-5" />
                  Contact Yunius
                </Button>
                <Button
                  size="default"
                  className="hidden lg:flex hover:shadow-2xl hover:scale-105 transition-transform duration:500"
                >
                  <IconPhone className="w-5 h-5" />
                  Contact Yunius
                </Button>
              </Link>
            </BlurFade>
          </div>
        </div>
        <div className="hidden lg:flex flex-col w-full">
          <BlurFade delay={0.8} inView>
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
