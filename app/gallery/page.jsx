import Tiles from "@/components/ui/gallery/tiles";
import Navigation from "@/components/ui/navigation";

export default function Page() {
  return (
    <>
      <Header />
      <Tiles />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <div className="fixed z-40 top-0 start-0 w-full mt-10 px-10 text-center">
      <div className="inline-block mx-auto py-2 px-6">
        <Navigation />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="fixed bottom-0 start-0 w-full mb-10 px-10 grid grid-cols-3">
      <div className="flex justify-start font-extralight text-sm text-white pt-6">
        by YUNIUS MUJIANTO
      </div>
      <div className="flex flex-col justify-center text-center font-extralight text-sm text-white/80 pt-6">
        Copyright © Yunius Mujianto 2024. All rights reserved.
      </div>
      <div className="flex justify-end font-extralight text-sm text-white pt-6">
        01/12/2024
      </div>
    </div>
  );
}
