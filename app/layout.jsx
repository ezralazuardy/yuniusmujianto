import Head from "next/head";
import SmoothScrolling from "@/components/smooth-scrolling";
import Inter from "@/lib/fonts/inter";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://yuniusmujianto.com"),
  title: "Yunius Mujianto",
  description: "The Luxurious Sense of Belonging.",
  generator: "Next.js",
  applicationName: "Yunius Mujianto",
  referrer: "origin-when-cross-origin",
  creator: "Lazuardy",
  publisher: "Lazuardy",
  manifest: "https://yuniusmujianto.com/manifest.json",
  category:
    "kebaya, bridal, fashion, designer, modern, shirt, wedding, model, outfit",
  keywords: [
    "kebaya",
    "bridal",
    "fashion",
    "designer",
    "modern",
    "shirt",
    "wedding",
    "model",
    "outfit",
  ],
  authors: [{ name: "Yunius Mujianto", url: "https://yuniusmujianto.com" }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    shortcut: "/favicon.ico",
    icon: "/apple-touch-icon.png",
    apple: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon.png",
    },
  },
};

export const viewport = {
  themeColor: [{ color: "#040404" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className={`${Inter.className} antialiased w-full max-w-screen`}>
        <SmoothScrolling>{children}</SmoothScrolling>
        <Analytics />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
      </body>
    </html>
  );
}
