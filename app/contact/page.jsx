import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Content from "@/components/ui/contact/content";

export default function Page() {
  return (
    <>
      <Header />
      <Content />
      <div className="hidden lg:block fixed bottom-0 start-0 w-full">
        <Footer />
      </div>
    </>
  );
}
