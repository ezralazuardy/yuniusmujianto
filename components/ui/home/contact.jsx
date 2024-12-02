import Link from "next/link";
import Spectral from "@/lib/fonts/spectral";
import BlurFade from "@/components/ui/blur-fade";
import ContactForm from "@/components/ui/home/contact-form";
import { contacts } from "@/lib/state";

export default function Contact() {
  return (
    <>
      <div
        className={`${Spectral.className} lg:max-w-xl text-white font-light text-4xl lg:text-3xl text-center w-full leading-none tracking-normal mt-40 lg:mt-60`}
      >
        <BlurFade delay={0.5} inView>
          Feel Free to Reach Us
        </BlurFade>
      </div>
      <div className="max-w-xl font-extralight text-sm lg:text-md text-gray-300 text-justify w-full mt-10 px-8 lg:px-0">
        <BlurFade delay={0.6} inView>
          We prefer to work closely with our clients to ensure that every
          product is a reflection of their unique style and personality. You can
          reach us via Email or Phone (WhatsApp) for inquiries, collaborations,
          or just to say hi.
        </BlurFade>
      </div>
      <div className="flex w-full max-w-screen justify-center">
        <ContactButtons />
      </div>
      <div className="max-w-xl font-extralight text-sm lg:text-md text-gray-300 text-justify w-full mt-10 px-8 lg:px-0">
        <BlurFade delay={0.9} inView>
          Or fill the form below to directly send us a message.
        </BlurFade>
      </div>
      <div className="max-w-xl w-full mt-10 pointer-events-auto px-8 lg:px-0">
        <ContactForm />
      </div>
    </>
  );
}

export function ContactButtons() {
  let delay = 0.7;

  function incrementDelay() {
    const current = delay;
    delay += 0.1;
    return current;
  }

  return (
    <div className="font-extralight text-md text-gray-300 mt-10 flex gap-10 pointer-events-auto">
      {contacts.map((contact, index) => (
        <BlurFade key={index} delay={incrementDelay()} inView>
          <Link href={contact.link} target={contact.target}>
            <div className="flex gap-2 hover:scale-125 hover:text-white transition-all duration-300">
              {contact.icon}
              <span className="text-sm">{contact.name}</span>
            </div>
          </Link>
        </BlurFade>
      ))}
    </div>
  );
}
