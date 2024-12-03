export default function manifest() {
  return {
    name: "Yunius Mujianto",
    short_name: "Yunius",
    description: "The Luxurious Sense of Belonging.",
    start_url: "/",
    display: "standalone",
    background_color: "#040404",
    theme_color: "#040404",
    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
