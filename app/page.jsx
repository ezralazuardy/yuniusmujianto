"use client";

import Link from "next/link";
import Image from "next/image";
import Spectral from "@/lib/fonts/spectral";
import Video from "@/components/ui/home/video";
import ContactForm from "@/components/ui/home/contact-form";
import Navigation from "@/components/ui/navigation";
import BlurFade from "@/components/ui/blur-fade";
import { Parallax } from "react-parallax";
import { Images } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandYoutube,
  IconBrandTiktok,
  IconChevronsDown,
  IconMail,
} from "@tabler/icons-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useEffect, useRef } from "react";

export default function Home() {
  const blur = useRef(null);
  const hero = useRef(null);
  const footer = useRef(null);
  const video = useRef(null);

  useEffect(() => {
    const b = blur?.current;
    const h = hero?.current;
    const f = footer?.current;
    const v = video?.current;

    if (!v || !h || !f || !v) return;

    if (typeof window === "undefined" || document === "undefined") return;

    const showHero = () => {
      v.play();
      f.classList.add("hidden");
      f.classList.remove("fixed");
      b.classList.add("hidden");
      b.classList.remove("fixed");
      h.classList.add("flex");
      h.classList.remove("hidden");
    };

    const showFooter = () => {
      v.play();
      f.classList.remove("hidden");
      f.classList.add("fixed");
      b.classList.remove("hidden");
      b.classList.add("fixed");
      h.classList.remove("flex");
      h.classList.add("hidden");
    };

    const hideHeroFooter = () => {
      v.pause();
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;

      if (scrollPercent <= 25) {
        showHero();
      } else if (scrollPercent > 25 && scrollPercent <= 80) {
        hideHeroFooter();
      } else {
        showFooter();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <Header />
      <Video ref={video} />
      <div
        ref={hero}
        className="fixed top-0 start-0 w-full min-h-screen z-30 flex items-center justify-center px-10"
      >
        <HeroFirst />
      </div>
      <div
        ref={blur}
        className="hidden top-0 start-0 w-full min-h-screen z-40 backdrop-blur bg-black/70"
      ></div>
      <div ref={footer} className="hidden bottom-0 start-0 w-full z-50">
        <div className="relative w-full">
          <Footer />
        </div>
      </div>
      <div className="absolute top-0 start-0 w-full min-h-screen z-50 pointer-events-none">
        <div className="relative w-full min-h-screen pointer-events-none"></div>
        <div className="relative [background:radial-gradient(125%_22%_at_50%_10%,#040404_40%,#161617_100%)] pt-60 pb-20 flex flex-col justify-center items-center border-t border-b border-gray-600">
          <HeroSecond />
          <HeroThird />
          <Sponsor />
          <Contact />
        </div>
        <div className="relative w-full min-h-60 pointer-events-none"></div>
      </div>
    </>
  );
}

function Header() {
  return (
    <div className="fixed z-40 top-0 start-0 w-full mt-10 px-10 text-center">
      <div className="inline-block mx-auto py-2 px-6">
        <Navigation />
      </div>
    </div>
  );
}

function HeroFirst() {
  return (
    <div className="relative min-h-screen w-full">
      <div className="flex flex-col min-h-screen w-full justify-center text-center my-auto">
        <div className={`${Spectral.className} text-7xl font-extralight`}>
          <BlurFade delay={0.25 + 1 * 0.05} inView>
            The Luxurious Sense of Belonging
          </BlurFade>
        </div>
        <div className={`${Spectral.className} pt-10 text-4xl font-extralight`}>
          <BlurFade delay={0.25 + 2 * 0.05} inView>
            — YUNIUS MUJIANTO —
          </BlurFade>
        </div>
        <div className="pt-12 text-lg font-extralight text-gray-200">
          <BlurFade delay={0.25 + 3 * 0.05} inView>
            MODERN KEBAYA, BRIDAL, AND FASHION DESIGNER
          </BlurFade>
        </div>
        <div className="pt-8">
          <BlurFade delay={0.25 + 4 * 0.05} inView>
            <Link href="https://wa.me/6281225822417" target="_blank">
              <Button
                size="lg"
                className="hover:shadow-2xl hover:scale-105 transition-transform duration:500"
              >
                <IconBrandWhatsapp className="w-5 h-5" />
                CALL VIA WHATSAPP
              </Button>
            </Link>
          </BlurFade>
        </div>
      </div>
      <div className="fixed bottom-0 start-0 mb-10 w-full flex flex-col justify-center">
        <div className="text-xs font-light text-gray-200 animate-pulse flex justify-center">
          <BlurFade delay={0.25 + 5 * 0.05} inView>
            SCROLL BELOW TO LEARN MORE
          </BlurFade>
        </div>
        <div className="pt-2 flex justify-center">
          <BlurFade delay={0.25 + 6 * 0.05} inView>
            <IconChevronsDown
              size={40}
              stroke={0.8}
              className="text-gray-200 animate-pulse"
            />
          </BlurFade>
        </div>
      </div>
    </div>
  );
}

function HeroSecond() {
  return (
    <div className="grid grid-cols-5 container">
      <div className="col-span-3 flex flex-col">
        <div
          className={`${Spectral.className} max-w-xl font-extralight text-7xl text-left leading-none tracking-normal mt-3`}
        >
          Where Artistry Meets Elegance ~
        </div>
        <div className="max-w-xl font-extralight text-md text-gray-300 text-justify w-full mt-12">
          With more than 8 years of experience, Yunius has redefined the
          Indonesian fashion industry by creating unique, luxurious kebaya and
          bridal designs under the{" "}
          <span className="font-semibold text-white">Yunius Kebaya Bride</span>{" "}
          brand.
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

function HeroThird() {
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
            SEE OUR GALLERY <Images className="w-5 h-5" />
          </Button>
        </Link>
      </div>
    </>
  );
}

function Contact() {
  return (
    <>
      <div
        className={`${Spectral.className} max-w-xl font-light text-3xl text-center w-full leading-none tracking-normal mt-60`}
      >
        — Feel Free to Reach Us —
      </div>
      <div className="max-w-xl font-extralight text-md text-gray-300 text-justify w-full mt-10">
        We prefer to work closely with our clients to ensure that every product
        is a reflection of their unique style and personality. You can reach us
        on these social media.
      </div>
      <div className="font-extralight text-md text-gray-300 mt-10 flex gap-10 pointer-events-auto">
        <Link href="https://wa.me/6281225822417" target="_blank">
          <div className="flex gap-2 hover:scale-125 hover:text-white transition-all duration-300 ">
            <IconMail size={18} stroke={1} className="mt-0.5" />
            <span className="text-sm">Email</span>
          </div>
        </Link>
        <Link href="https://wa.me/6281225822417" target="_blank">
          <div className="flex gap-2 hover:scale-125 hover:text-white transition-all duration-300 ">
            <IconBrandWhatsapp size={18} stroke={1} className="mt-0.5" />
            <span className="text-sm">WhatsApp</span>
          </div>
        </Link>
        <Link href="https://facebook.com/yunius.bridal" target="_blank">
          <div className="flex gap-2 hover:scale-125 hover:text-white transition-all duration-300 ">
            <IconBrandFacebook size={18} stroke={1} className="mt-0.5" />
            <span className="text-sm">Facebook</span>
          </div>
        </Link>
        <Link href="https://tiktok.com/@yunius.mujianto" target="_blank">
          <div className="flex gap-2 hover:scale-125 hover:text-white transition-all duration-300 ">
            <IconBrandTiktok size={18} stroke={1} className="mt-0.5" />
            <span className="text-sm">TikTok</span>
          </div>
        </Link>
        <Link
          href="https://youtube.com/@yuniusmujiantofashiondesig9646"
          target="_blank"
        >
          <div className="flex gap-2 hover:scale-125 hover:text-white transition-all duration-300 ">
            <IconBrandYoutube size={18} stroke={1} className="mt-0.5" />
            <span className="text-sm">YouTube</span>
          </div>
        </Link>
      </div>
      <div className="max-w-xl font-extralight text-md text-gray-300 text-justify w-full mt-10">
        Or you can fill the form below to send us a message.
      </div>
      <div className="max-w-xl w-full mt-10 pointer-events-auto">
        <ContactForm />
      </div>
    </>
  );
}

function Sponsor() {
  return (
    <>
      <div
        className={`${Spectral.className} max-w-xl font-light text-3xl text-center w-full leading-none tracking-normal mt-60`}
      >
        — Sponsored By —
      </div>
      <div className="max-w-xl w-full mt-10 grid grid-cols-4 gap-10 pointer-events-auto">
        <div className="w-full h-full aspect-square border border-gray-600">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Link href="https://lazuardy.tech" target="_blank">
                  <Image
                    alt="home-sponsor-1"
                    src="/images/sponsor/sponsor-1.png"
                    className="aspect-square object-cover"
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
        <div className="w-full h-full aspect-square border border-dotted border-gray-600 bg-zinc-950"></div>
        <div className="w-full h-full aspect-square border border-dotted border-gray-600 bg-zinc-950"></div>
        <div className="w-full h-full aspect-square border border-dotted border-gray-600 bg-zinc-950"></div>
      </div>
    </>
  );
}

function Footer() {
  return (
    <div className="pb-10 text-center flex flex-col text-gray-200">
      <Navigation />
      <div className="flex justify-center font-light text-md pt-6">
        <div className="me-8 flex gap-2">
          <Link href="https://wa.me/6281225822417" target="_blank">
            <IconBrandWhatsapp
              size={20}
              stroke={1}
              className="text-white/70 hover:scale-125 hover:text-white transition-all duration-300"
            />
          </Link>
        </div>
        <div className="me-8">
          <Link href="https://instagram.com/yunius_mujianto" target="_blank">
            <IconBrandInstagram
              size={20}
              stroke={1}
              className="text-white/70 hover:scale-125 hover:text-white transition-all duration-300"
            />
          </Link>
        </div>
        <div className="me-8">
          <Link href="https://facebook.com/yunius.bridal" target="_blank">
            <IconBrandFacebook
              size={20}
              stroke={1}
              className="text-white/70 hover:scale-125 hover:text-white transition-all duration-300"
            />
          </Link>
        </div>
        <div className="me-8">
          <Link href="https://tiktok.com/@yunius.mujianto" target="_blank">
            <IconBrandTiktok
              size={20}
              stroke={1}
              className="text-white/70 hover:scale-125 hover:text-white transition-all duration-300"
            />
          </Link>
        </div>
        <div className="me-0">
          <Link
            href="https://youtube.com/@yuniusmujiantofashiondesig9646"
            target="_blank"
          >
            <IconBrandYoutube
              size={20}
              stroke={1}
              className="text-white/70 hover:scale-125 hover:text-white transition-all duration-300"
            />
          </Link>
        </div>
      </div>
      <div className="flex justify-center font-extralight text-sm text-white/80 pt-6">
        Copyright © Yunius Mujianto 2024. All rights reserved.
      </div>
    </div>
  );
}
