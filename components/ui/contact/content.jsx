"use client";

import Image from "next/image";
import Link from "next/link";
import BlurFade from "@/components/ui/blur-fade";
import Footer from "@/components/ui/footer";
import ContactForm from "@/components/ui/home/contact-form";
import { Button } from "@/components/ui/button";
import { ContactButtons } from "@/components/ui/home/contact";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import logo from "@/public/images/logo.webp";
import dynamic from "next/dynamic";

export const Map = dynamic(() => import("@/components/ui/map"), {
  ssr: false,
});

export default function Content() {
  return (
    <div className="flex w-full min-h-screen">
      <div className="flex flex-col w-full lg:my-auto lg:px-48 pb-12 lg:pb-0">
        <div className="flex flex-col items-center w-full px-10 lg:px-0 mt-36 lg:mt-0">
          <BlurFade delay={0.3} inView>
            <Image
              src={logo}
              width={240}
              height="auto"
              alt="logo"
              className="block lg:hidden"
            />
            <Image
              src={logo}
              width={250}
              height="auto"
              alt="logo"
              className="hidden lg:block"
            />
          </BlurFade>
        </div>
        <div className="flex flex-col items-center w-full mt-12 lg:mt-10 px-10 lg:px-0">
          <BlurFade delay={0.4} inView>
            <ContactButtons />
          </BlurFade>
        </div>
        <div className="flex gap-1 text-center items-center justify-center w-full font-extralight text-sm text-white mt-4 lg:mt-2 px-10 lg:px-0">
          <BlurFade delay={0.5} inView>
            Or directly{" "}
            <Drawer>
              <DrawerTrigger>
                <span className="ms-1 underline font-light text-gray-300 hover:text-white">
                  SEND US A MESSAGE
                </span>
              </DrawerTrigger>
              <DrawerContent className="rounded-none">
                <div className="mx-auto w-full max-w-lg py-6">
                  <DrawerHeader className="pb-0">
                    <BlurFade delay={0.5} inView>
                      <DrawerTitle>Send Message</DrawerTitle>
                    </BlurFade>
                    <BlurFade delay={0.6} inView>
                      <DrawerDescription>
                        Feel free to ask us if you have any questions or need
                        help.
                      </DrawerDescription>
                    </BlurFade>
                  </DrawerHeader>
                  <DrawerFooter className="pt-1">
                    <div className="mx-auto pt-6 w-full">
                      <ContactForm fullWidth={true} />
                    </div>
                    <BlurFade delay={1.1} inView>
                      <DrawerClose asChild>
                        <Button
                          variant="outline"
                          className="w-full hover:shadow-2xl hover:scale-105 transition-transform duration:500"
                        >
                          Close
                        </Button>
                      </DrawerClose>
                    </BlurFade>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            </Drawer>
          </BlurFade>
        </div>
        <div className="flex flex-col text-center w-full text-sm underline font-light text-gray-300 hover:text-white mt-6 lg:mt-8 px-10 lg:px-0">
          <BlurFade delay={0.6} inView>
            <Link
              href="https://google.com/maps/place/Jl.+Rowosari+II,+Wonosari,+Kec.+Ngaliyan,+Kota+Semarang,+Jawa+Tengah+50244/@-6.9737171,110.291647,17z/data=!4m15!1m8!3m7!1s0x2e705fd08e012d3f:0xb07c0b58ac9ba793!2sJl.+Rowosari+II,+Wonosari,+Kec.+Ngaliyan,+Kota+Semarang,+Jawa+Tengah+50244!3b1!8m2!3d-6.9737171!4d110.2942219!16s%2Fg%2F11bwg065w2!3m5!1s0x2e705fd08e012d3f:0xb07c0b58ac9ba793!8m2!3d-6.9737171!4d110.2942219!16s%2Fg%2F11bwg065w2?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
            >
              Jl. Rowosari II, RT 02, RW I, Wonosari, Ngaliyan, Semarang,
              Central Java, Indonesia 50244
            </Link>
          </BlurFade>
        </div>
        <div className="flex flex-col w-full mt-10 lg:mt-8">
          <BlurFade delay={0.7} inView>
            <Map />
          </BlurFade>
        </div>
        <div className="flex flex-col lg:hidden w-full mt-24">
          <Footer />
        </div>
      </div>
    </div>
  );
}
