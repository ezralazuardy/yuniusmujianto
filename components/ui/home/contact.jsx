import Link from "next/link";
import Spectral from "@/lib/fonts/spectral";
import ContactForm from "@/components/ui/home/contact-form";
import {
  IconMail,
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandYoutube,
  IconBrandTiktok,
} from "@tabler/icons-react";

export default function Contact() {
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
        <Link href="https://wa.me/6281225822417" target="_blank">
          <div className="flex gap-2 hover:scale-125 hover:text-white transition-all duration-300 ">
            <IconBrandInstagram size={18} stroke={1} className="mt-0.5" />
            <span className="text-sm">Instagram</span>
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
