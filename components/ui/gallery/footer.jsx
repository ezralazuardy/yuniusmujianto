import BlurFade from "@/components/ui/blur-fade";

export default function Footer() {
  return (
    <div className="fixed bottom-0 start-0 w-full mb-10 px-10 grid grid-cols-3">
      <div className="flex justify-start font-extralight text-sm text-white pt-6">
        <BlurFade delay={0.25 + 1 * 0.05} inView>
          by YUNIUS MUJIANTO
        </BlurFade>
      </div>
      <div className="flex flex-col justify-center text-center font-extralight text-sm text-white/80 pt-6">
        <BlurFade delay={0.25 + 2 * 0.05} inView>
          Copyright © Yunius Mujianto 2024. All rights reserved.
        </BlurFade>
      </div>
      <div className="flex justify-end font-extralight text-sm text-white pt-6">
        <BlurFade delay={0.25 + 3 * 0.05} inView>
          01/12/2024
        </BlurFade>
      </div>
    </div>
  );
}
