import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Tiles from "@/components/ui/gallery/tiles";

export default function Page() {
  return (
    <>
      <Header />
      <Tiles />
      <div className="hidden lg:block fixed bottom-0 start-0 w-full">
        <Footer />
      </div>
    </>
  );
}
