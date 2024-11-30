import { Analytics } from "@vercel/analytics/react";
import SmoothScrolling from "@/components/smooth-scrolling";
import Inter from "@/lib/fonts/inter";
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
      <body className={`${Inter.className} antialiased`}>
        <SmoothScrolling>{children}</SmoothScrolling>
        <Analytics />
      </body>
    </html>
  );
}
