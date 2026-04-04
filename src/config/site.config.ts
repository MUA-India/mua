import type { SiteConfig } from "@/types/site-config.types";
import { DEFAULT_LOCALE } from "@/constants/i18n.constants";
import { env } from "@/env";

// FIXME: Update site branding, default locale, theme color, social links, languages and OG image
export const siteConfig: SiteConfig = {
  name: "MUA",
  description:
    "World-class makeup artistry platform. Connecting the global beauty world with artistry through a seamless, secure, and professional experience.",
  url: env.NEXT_PUBLIC_SITE_URL,
  author: "MUA India",
  locale: DEFAULT_LOCALE,
  themeColor: "#000000",
  keywords: ["makeup", "mua", "beauty", "artistry", "booking", "salon"],
  social: {
    twitter: "@muaatelier",
    github: "MUA-India",
    linkedin: "mua-atelier"
  },
  ogImage: "/og.jpg",
  languages: {
    tr: "/tr",
    en: "/en",
    "x-default": "/en"
  }
} as const;
