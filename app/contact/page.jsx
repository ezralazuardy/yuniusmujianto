import Head from "next/head";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Content from "@/components/ui/contact/content";

export default function Page() {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_APP_URL}/contact`}
        />
      </Head>
      <Header />
      <Content />
      <div className="hidden lg:block fixed bottom-0 start-0 w-full">
        <Footer />
      </div>
    </>
  );
}
