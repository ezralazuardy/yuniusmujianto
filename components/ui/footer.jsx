import BlurFade from "@/components/ui/blur-fade";
import Social from "@/components/ui/social";

export default function Footer() {
  return (
    <div className="w-full mb-8 lg:mb-10 px-10 lg:px-48 grid lg:grid-cols-2">
      <div className="flex justify-center lg:justify-start font-extralight text-sm text-white">
        <BlurFade delay={0.5} inView>
          <Social />
        </BlurFade>
      </div>
      <div className="flex lg:hidden text-center justify-center font-extralight text-sm text-white/80 mt-4">
        <BlurFade delay={0.6} inView>
          Copyright © Yunius Mujianto 2024
          <br />
          All rights reserved
        </BlurFade>
      </div>
      <div className="hidden lg:flex justify-end font-extralight text-sm text-white/80">
        <BlurFade delay={0.6} inView>
          Copyright © Yunius Mujianto 2024. All rights reserved.
        </BlurFade>
      </div>
    </div>
  );
}
