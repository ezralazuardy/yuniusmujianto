import Head from "next/head";
import SmoothScrolling from "@/components/smooth-scrolling";
import Inter from "@/lib/fonts/inter";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata = {
  title: "Yunius Mujianto",
  description: "The Luxurious Sense of Belonging.",
};

export const viewport = {
  themeColor: [{ color: "#040404" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Basic Meta */}
        <title>{metadata.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="robots" content="index, follow" />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Yunius" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Open Graph Meta */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/images/og-image.png" />
        <meta property="og:image:alt" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_APP_URL} />

        {/* Twitter Card Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
        <meta name="twitter:image:alt" content={metadata.description} />
        <meta name="twitter:creator" content="@yuniusmujianto" />

        {/* Theme Color */}
        <meta name="theme-color" content="#040404" />
      </Head>
      <body className={`${Inter.className} antialiased w-full max-w-screen`}>
        <SmoothScrolling>{children}</SmoothScrolling>
        <Analytics />
      </body>
    </html>
  );
}
