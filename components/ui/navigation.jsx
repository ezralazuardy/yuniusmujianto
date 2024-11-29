import Link from "next/link";

export default function Navigation() {
  return (
    <div className="flex justify-center font-light text-md text-gray-200">
      <div className="me-5">
        <Link href="/">home</Link>
      </div>
      <div className="me-5">—</div>
      <div className="me-5">
        <Link href="/gallery">gallery</Link>
      </div>
      <div className="me-5">—</div>
      <div className="me-5">
        <Link href="/about">about</Link>
      </div>
      <div className="me-5">—</div>
      <div className="me-0">
        <Link href="/contact">contact</Link>
      </div>
    </div>
  );
}
