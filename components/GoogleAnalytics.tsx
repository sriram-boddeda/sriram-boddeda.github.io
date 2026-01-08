"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function GoogleAnalytics({ gaId }: { gaId: string }) {
  const pathname = usePathname();

  useEffect(() => {
    if (!gaId) return;
    if (typeof window.gtag !== "function") return;

    const search = window.location.search ?? "";
    const pagePath = `${pathname}${search}`;

    window.gtag("config", gaId, {
      page_path: pagePath,
    });
  }, [gaId, pathname]);

  return null;
}
