"use client";

import Image from "next/image";

import { Instagram, Linkedin, Mail, MapPin, Twitter } from "lucide-react";

import { Link } from "@/i18n/navigation";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface px-6 pt-24 pb-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-20 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-8 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/mua.png"
                alt="MUA"
                width={120}
                height={40}
                className="object-contain invert"
              />
            </Link>
            <p className="max-w-sm text-lg leading-relaxed text-foreground/50">
              Connecting the global beauty world with artistry through a seamless, secure, and
              professional experience.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://twitter.com"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all hover:bg-primary hover:text-white"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="https://instagram.com"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all hover:bg-primary hover:text-white"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href="https://linkedin.com"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all hover:bg-primary hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold tracking-wider text-primary uppercase">Services</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/services"
                  className="text-foreground/60 transition-colors hover:text-primary"
                >
                  Makeup Artists
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-foreground/60 transition-colors hover:text-primary"
                >
                  Hair Stylists
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-foreground/60 transition-colors hover:text-primary"
                >
                  Portfolios
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-foreground/60 transition-colors hover:text-primary"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold tracking-wider text-primary uppercase">Support</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-foreground/60 transition-colors hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-foreground/60 transition-colors hover:text-primary"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-foreground/60 transition-colors hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-foreground/60 transition-colors hover:text-primary"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold tracking-wider text-primary uppercase">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-foreground/60">
                <Mail className="h-4 w-4 text-primary" />
                <span>hello@mua.co.in</span>
              </li>
              <li className="flex items-center gap-3 text-foreground/60">
                <MapPin className="h-4 w-4 text-primary" />
                <span>New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-xs tracking-[0.2em] text-foreground/20 uppercase">
            © 2026 MUA PROFESSIONAL PLATFORM. ELEGANCE DEFINED.
          </p>
        </div>
      </div>
    </footer>
  );
}
