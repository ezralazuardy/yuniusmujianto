"use client";

import Image from "next/image";
import Link from "next/link";
import BlurFade from "@/components/ui/blur-fade";
import ContactForm from "@/components/ui/home/contact-form";
import { Button } from "@/components/ui/button";
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
      <div className="flex flex-col w-full my-auto px-48">
        <div className="flex flex-col items-center w-full">
          <BlurFade delay={0.5} inView>
            <Image src={logo} alt="logo" width={300} height="auto" />
          </BlurFade>
        </div>
        <div className="flex gap-1 text-center items-center justify-center w-full font-extralight text-sm text-white mt-6">
          <BlurFade delay={0.6} inView>
            Phone (WhatsApp):{" "}
            <Link
              href="https://wa.me/6281225822417"
              target="_blank"
              className="underline hover:font-white hover:text-light"
            >
              +62 812-2582-2417
            </Link>{" "}
            or{" "}
            <Drawer>
              <DrawerTrigger>
                <span className="underline hover:font-white hover:text-light">
                  Send us a message
                </span>
                .
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
        <div className="flex flex-col text-center w-full font-extralight text-sm text-gray-300 mt-4">
          <BlurFade delay={0.7} inView>
            Jl. Rowosari II, RT 02, RW I, Wonosari, Ngaliyan, Semarang, Central
            Java, Indonesia 50244
          </BlurFade>
        </div>
        <div className="flex flex-col w-full mt-6">
          <BlurFade delay={0.8} inView>
            <Map />
          </BlurFade>
        </div>
      </div>
    </div>
  );
}
