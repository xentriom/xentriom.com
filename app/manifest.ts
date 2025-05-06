import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "xentriom",
    short_name: "xentriom",
    description: "Exploring the web, one idea at a time",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#6366F1",
    icons: [
      {
        src: "/manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
