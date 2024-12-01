import Link from "next/link";
import {
  IconMail,
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandYoutube,
  IconBrandTiktok,
} from "@tabler/icons-react";

export default function Social() {
  return (
    <div className="flex">
      <div className="me-8">
        <Link href="mailto:workwithyunius@gmail.com" target="_blank">
          <IconMail
            size={20}
            stroke={1}
            className="text-white/70 hover:scale-125 hover:text-white transition-all duration-300"
          />
        </Link>
      </div>
      <div className="me-8">
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
  );
}
