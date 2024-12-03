"use client";

import Head from "next/head";
import Link from "next/link";
import Spectral from "@/lib/fonts/spectral";
import BlurFade from "@/components/ui/blur-fade";
import Header from "@/components/ui/home/header";
import Video from "@/components/ui/home/video";
import Contact from "@/components/ui/home/contact";
import ContentFirst from "@/components/ui/home/content-first";
import ContentSecond from "@/components/ui/home/content-second";
import Sponsor from "@/components/ui/home/sponsor";
import Navigation from "@/components/ui/navigation";
import Social from "@/components/ui/social";
import { Button } from "@/components/ui/button";
import { IconBrandWhatsapp, IconChevronsDown } from "@tabler/icons-react";
import { useEffect, useRef } from "react";

export default function Home() {
  const blur = useRef(null);
  const hero = useRef(null);
  const footer = useRef(null);
  const video = useRef(null);
  const header = useRef(null);
  const title = useRef(null);
  const subtitle1 = useRef(null);
  const subtitle2 = useRef(null);
  const button = useRef(null);
  const hint = useRef(null);
  const footerNavigation = useRef(null);
  const footerSocial = useRef(null);
  const footerCopyright = useRef(null);

  useEffect(() => {
    const b = blur?.current;
    const hr = hero?.current;
    const f = footer?.current;
    const v = video?.current;
    const h = header?.current;
    const t = title?.current;
    const st1 = subtitle1?.current;
    const st2 = subtitle2?.current;
    const bt = button?.current;
    const hn = hint?.current;
    const fn = footerNavigation?.current;
    const fs = footerSocial?.current;
    const fc = footerCopyright?.current;

    if (
      !v ||
      !hr ||
      !f ||
      !v ||
      !h ||
      !t ||
      !st1 ||
      !st2 ||
      !bt ||
      !hn ||
      !fn ||
      !fs ||
      !fc ||
      typeof window === "undefined" ||
      typeof document === "undefined"
    )
      return;

    function showHero() {
      v.play();
      f.classList.add("hidden");
      f.classList.remove("fixed");
      b.classList.add("hidden");
      b.classList.remove("fixed");
      hr.classList.add("flex");
      hr.classList.remove("hidden");
    }

    function showFooter() {
      v.play();
      f.classList.remove("hidden");
      f.classList.add("fixed");
      b.classList.remove("hidden");
      b.classList.add("fixed");
      hr.classList.remove("flex");
      hr.classList.add("hidden");
    }

    function hideHeroFooter() {
      v.pause();
    }

    function showHeader() {
      h.classList.add("opacity-100");
      h.classList.remove("opacity-0");
    }

    function hideHeader() {
      h.classList.add("opacity-0");
      h.classList.remove("opacity-100");
    }

    function showTitle() {
      t.classList.add("opacity-100");
      t.classList.remove("opacity-0");
    }

    function hideTitle() {
      t.classList.add("opacity-0");
      t.classList.remove("opacity-100");
    }

    function showSubtitle1() {
      st1.classList.add("opacity-100");
      st1.classList.remove("opacity-0");
    }

    function hideSubtitle1() {
      st1.classList.add("opacity-0");
      st1.classList.remove("opacity-100");
    }

    function showSubtitle2() {
      st2.classList.add("opacity-100");
      st2.classList.remove("opacity-0");
    }

    function hideSubtitle2() {
      st2.classList.add("opacity-0");
      st2.classList.remove("opacity-100");
    }

    function showButton() {
      bt.classList.add("opacity-100");
      bt.classList.remove("opacity-0");
    }

    function hideButton() {
      bt.classList.add("opacity-0");
      bt.classList.remove("opacity-100");
    }

    function showHint() {
      hn.classList.add("opacity-100");
      hn.classList.remove("opacity-0");
    }

    function hideHint() {
      hn.classList.add("opacity-0");
      hn.classList.remove("opacity-100");
    }

    function showFooterNavigation() {
      fn.classList.add("opacity-100");
      fn.classList.remove("opacity-0");
    }

    function hideFooterNavigation() {
      fn.classList.add("opacity-0");
      fn.classList.remove("opacity-100");
    }

    function showFooterSocial() {
      fs.classList.add("opacity-100");
      fs.classList.remove("opacity-0");
    }

    function hideFooterSocial() {
      fs.classList.add("opacity-0");
      fs.classList.remove("opacity-100");
    }

    function showFooterCopyright() {
      fc.classList.add("opacity-100");
      fc.classList.remove("opacity-0");
    }

    function hideFooterCopyright() {
      fc.classList.add("opacity-0");
      fc.classList.remove("opacity-100");
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;

      // show or hide media
      if (scrollPercent <= 25) {
        showHero();
      } else if (scrollPercent > 25 && scrollPercent <= 80) {
        hideHeroFooter();
      } else {
        showFooter();
      }

      // show or hide button
      if (scrollPercent < 4) {
        showButton();
      } else {
        hideButton();
      }

      // show or hide subtitle2
      if (scrollPercent < 5) {
        showSubtitle2();
      } else {
        hideSubtitle2();
      }

      // show or hide subtitle1
      if (scrollPercent < 8) {
        showSubtitle1();
      } else {
        hideSubtitle1();
      }

      // show or hide title
      if (scrollPercent < 10) {
        showTitle();
      } else {
        hideTitle();
      }

      // show or hide header
      if (scrollPercent < 15) {
        showHeader();
      } else {
        hideHeader();
      }

      // show or hide hint
      if (scrollPercent <= 0.4) {
        showHint();
      } else {
        hideHint();
      }

      // show or hide footer navigation
      if (scrollPercent >= 99) {
        showFooterNavigation();
      } else {
        hideFooterNavigation();
      }

      // show or hide footer social
      if (scrollPercent >= 98) {
        showFooterSocial();
      } else {
        hideFooterSocial();
      }

      // show or hide footer copyright
      if (scrollPercent >= 97) {
        showFooterCopyright();
      } else {
        hideFooterCopyright();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <Head>
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_APP_URL}`} />
      </Head>
      <Video ref={video} />
      <div
        ref={hero}
        className="fixed top-0 start-0 w-full max-w-screen min-h-screen z-30 flex items-center justify-center"
      >
        <div className="relative w-full max-w-screen min-h-screen px-6">
          <Header ref={header} />
          <div className="flex flex-col min-h-screen w-full justify-center text-center my-auto">
            <div
              ref={title}
              className={`${Spectral.className} opacity-100 transition-opacity duration-500 text-6xl lg:text-7xl font-extralight`}
            >
              <BlurFade delay={0.5} inView>
                The Luxurious Sense of Belonging
              </BlurFade>
            </div>
            <div
              ref={subtitle1}
              className={`${Spectral.className} opacity-100 transition-opacity duration-500 pt-10 text-3xl lg:text-4xl font-extralight`}
            >
              <BlurFade delay={0.6} inView>
                — YUNIUS MUJIANTO —
              </BlurFade>
            </div>
            <div
              ref={subtitle2}
              className="opacity-100 transition-opacity duration-500 pt-12 text-sm lg:text-lg font-extralight text-gray-200"
            >
              <BlurFade delay={0.7} inView>
                MODERN KEBAYA, BRIDAL, AND FASHION DESIGNER
              </BlurFade>
            </div>
            <div
              ref={button}
              className="opacity-100 transition-opacity duration-500 pt-8"
            >
              <BlurFade delay={0.8} inView>
                <Link href="https://wa.me/6281225822417" target="_blank">
                  <Button
                    size="default"
                    className="hover:shadow-2xl hover:scale-105 transition-transform duration:500"
                  >
                    <IconBrandWhatsapp className="w-5 h-5" />
                    Call Via WhatsApp
                  </Button>
                </Link>
              </BlurFade>
            </div>
          </div>
          <div
            ref={hint}
            className="opacity-100 transition-opacity duration-500 absolute bottom-0 start-0 mb-10 w-full flex flex-col justify-center"
          >
            <div className="text-xs font-light text-gray-200 animate-pulse flex justify-center">
              <BlurFade delay={0.9} inView>
                SCROLL BELOW TO LEARN MORE
              </BlurFade>
            </div>
            <div className="pt-2 flex justify-center">
              <BlurFade delay={1} inView>
                <IconChevronsDown
                  size={40}
                  stroke={0.8}
                  className="text-gray-200 animate-pulse"
                />
              </BlurFade>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={blur}
        className="hidden top-0 start-0 w-full max-w-screen min-h-screen z-40 backdrop-blur bg-black/70"
      ></div>
      <div
        ref={footer}
        className="hidden bottom-0 start-0 w-full max-w-screen z-50"
      >
        <div className="relative w-full">
          <div className="pb-10 text-center flex flex-col text-gray-200">
            <div
              ref={footerNavigation}
              className="opacity-100 transition-opacity duration-500 flex w-full justify-center"
            >
              <Navigation />
            </div>
            <div
              ref={footerSocial}
              className="opacity-100 transition-opacity duration-500 flex justify-center font-light text-md pt-6"
            >
              <Social />
            </div>
            <div
              ref={footerCopyright}
              className="opacity-100 transition-opacity duration-500 flex justify-center font-extralight text-sm text-white/80 pt-6"
            >
              Copyright © Yunius Mujianto 2024. All rights reserved.
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 start-0 w-full max-w-screen min-h-screen z-50 pointer-events-none">
        <div className="relative w-full min-h-screen pointer-events-none"></div>
        <div className="relative [background:radial-gradient(125%_22%_at_50%_10%,#040404_40%,#161617_100%)] py-20 flex flex-col justify-center items-center border-t border-b border-gray-600">
          <ContentFirst />
          <ContentSecond />
          <Sponsor />
          <Contact />
        </div>
        <div className="relative w-full min-h-60 pointer-events-none"></div>
      </div>
    </>
  );
}
