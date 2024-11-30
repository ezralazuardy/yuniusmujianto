import Link from "next/link";
import Spectral from "@/lib/fonts/spectral";
import BlurFade from "@/components/ui/blur-fade";
import ContactForm from "@/components/ui/home/contact-form";
import {
  IconMail,
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandTiktok,
} from "@tabler/icons-react";

export default function Contact() {
  return (
    <>
      <div
        className={`${Spectral.className} max-w-xl font-light text-3xl text-center w-full leading-none tracking-normal mt-60`}
      >
        <BlurFade delay={0.25 + 1 * 0.05} inView>
          — Feel Free to Reach Us —
        </BlurFade>
      </div>
      <div className="max-w-xl font-extralight text-md text-gray-300 text-justify w-full mt-10">
        <BlurFade delay={0.25 + 2 * 0.05} inView>
          We prefer to work closely with our clients to ensure that every
          product is a reflection of their unique style and personality. You can
          reach us on these social media.
        </BlurFade>
      </div>
      <div className="font-extralight text-md text-gray-300 mt-10 flex gap-10 pointer-events-auto">
        <BlurFade delay={0.25 + 3 * 0.05} inView>
          <Link href="https://wa.me/6281225822417" target="_blank">
            <div className="flex gap-2 hover:scale-125 hover:text-white transition-all duration-300 ">
              <IconMail size={18} stroke={1} className="mt-0.5" />
              <span className="text-sm">Email</span>
            </div>
          </Link>
        </BlurFade>
        <BlurFade delay={0.25 + 4 * 0.05} inView>
          <Link href="https://wa.me/6281225822417" target="_blank">
            <div className="flex gap-2 hover:scale-125 hover:text-white transition-all duration-300 ">
              <IconBrandWhatsapp size={18} stroke={1} className="mt-0.5" />
              <span className="text-sm">WhatsApp</span>
            </div>
          </Link>
        </BlurFade>
        <BlurFade delay={0.25 + 5 * 0.05} inView>
          <Link href="https://wa.me/6281225822417" target="_blank">
            <div className="flex gap-2 hover:scale-125 hover:text-white transition-all duration-300 ">
              <IconBrandInstagram size={18} stroke={1} className="mt-0.5" />
              <span className="text-sm">Instagram</span>
            </div>
          </Link>
        </BlurFade>
        <BlurFade delay={0.25 + 6 * 0.05} inView>
          <Link href="https://facebook.com/yunius.bridal" target="_blank">
            <div className="flex gap-2 hover:scale-125 hover:text-white transition-all duration-300 ">
              <IconBrandFacebook size={18} stroke={1} className="mt-0.5" />
              <span className="text-sm">Facebook</span>
            </div>
          </Link>
        </BlurFade>
        <BlurFade delay={0.25 + 7 * 0.05} inView>
          <Link href="https://tiktok.com/@yunius.mujianto" target="_blank">
            <div className="flex gap-2 hover:scale-125 hover:text-white transition-all duration-300 ">
              <IconBrandTiktok size={18} stroke={1} className="mt-0.5" />
              <span className="text-sm">TikTok</span>
            </div>
          </Link>
        </BlurFade>
      </div>
      <div className="max-w-xl font-extralight text-md text-gray-300 text-justify w-full mt-10">
        <BlurFade delay={0.25 + 8 * 0.05} inView>
          Or you can fill the form below to send us a message.
        </BlurFade>
      </div>
      <div className="max-w-xl w-full mt-10 pointer-events-auto">
        <ContactForm />
      </div>
    </>
  );
}
