"use client"; // ✅ This is a client component

import { useEffect } from "react";

export default function GoogleAdSense() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const ads = document.createElement("script");
      ads.async = true;
      ads.src =
        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
      ads.setAttribute("data-ad-client", "ca-pub-3112333795454729");
      document.body.appendChild(ads);
    }
  }, []);

  return null;
}
