import Link from "next/link";
import BlurFade from "./blur-fade";

export default function Navigation() {
  return (
    <div className="flex justify-center font-light text-md text-gray-200">
      <div className="me-5">
        <BlurFade delay={0.25 + 1 * 0.05} inView>
          <Link href="/">home</Link>
        </BlurFade>
      </div>
      <div className="me-5">
        <BlurFade delay={0.25 + 2 * 0.05} inView>
          —
        </BlurFade>
      </div>
      <div className="me-5">
        <BlurFade delay={0.25 + 3 * 0.05} inView>
          <Link href="/gallery">gallery</Link>
        </BlurFade>
      </div>
      <div className="me-5">
        <BlurFade delay={0.25 + 4 * 0.05} inView>
          —
        </BlurFade>
      </div>
      <div className="me-5">
        <BlurFade delay={0.25 + 5 * 0.05} inView>
          <Link href="/about">about</Link>
        </BlurFade>
      </div>
      <div className="me-5">
        <BlurFade delay={0.25 + 6 * 0.05} inView>
          —
        </BlurFade>
      </div>
      <div className="me-0">
        <BlurFade delay={0.25 + 7 * 0.05} inView>
          <Link href="/contact">contact</Link>
        </BlurFade>
      </div>
    </div>
  );
}
