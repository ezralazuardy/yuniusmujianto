import BlurFade from "@/components/ui/blur-fade";
import Social from "@/components/ui/social";

export default function Footer() {
  return (
    <div className="fixed bottom-0 start-0 w-full mb-10 px-48 grid grid-cols-2">
      <div className="flex justify-start font-extralight text-sm text-white">
        <BlurFade delay={0.25 + 1 * 0.05} inView>
          <Social />
        </BlurFade>
      </div>
      <div className="flex justify-end font-extralight text-sm text-white/80">
        <BlurFade delay={0.25 + 2 * 0.05} inView>
          Copyright © Yunius Mujianto 2024. All rights reserved.
        </BlurFade>
      </div>
    </div>
  );
}
