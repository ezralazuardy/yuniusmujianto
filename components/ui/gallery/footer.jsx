import BlurFade from "@/components/ui/blur-fade";

export default function Footer() {
  return (
    <div className="fixed bottom-0 start-0 w-full mb-8 px-10 lg:px-48 grid lg:grid-cols-3">
      <div className="flex justify-center lg:justify-start font-extralight text-sm text-white">
        <BlurFade delay={0.5} inView>
          by YUNIUS MUJIANTO
        </BlurFade>
      </div>
      <div className="flex lg:hidden flex-col justify-center text-center font-extralight text-sm text-white/80 mt-4">
        <BlurFade delay={0.6} inView>
          Copyright © Yunius Mujianto 2024.
          <br />
          All rights reserved.
        </BlurFade>
      </div>
      <div className="hidden lg:flex flex-col justify-center text-center font-extralight text-sm text-white/80">
        <BlurFade delay={0.6} inView>
          Copyright © Yunius Mujianto 2024. All rights reserved.
        </BlurFade>
      </div>
      <div className="hidden lg:flex justify-center lg:justify-end font-extralight text-sm text-white">
        <BlurFade delay={0.7} inView>
          01/12/2024
        </BlurFade>
      </div>
    </div>
  );
}
