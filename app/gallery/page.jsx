import Head from "next/head";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Tiles from "@/components/ui/gallery/tiles";

export default function Page() {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_APP_URL}/gallery`}
        />
      </Head>
      <Header />
      <Tiles />
      <div className="hidden lg:block fixed bottom-0 start-0 w-full">
        <Footer />
      </div>
    </>
  );
}
