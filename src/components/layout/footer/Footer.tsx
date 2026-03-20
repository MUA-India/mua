"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Twitter, Instagram, Linkedin, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          <div className="lg:col-span-2 space-y-8">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/mua.png"
                alt="MUA"
                width={120}
                height={40}
                className="object-contain"
              />
            </Link>
            <p className="text-white/50 max-w-sm text-lg leading-relaxed">
              Connecting the global beauty world with artistry through a seamless, secure, and professional experience.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://twitter.com"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-all"
              >
                <Twitter className="w-4 h-4" />
              </Link>
              <Link
                href="https://instagram.com"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-all"
              >
                <Instagram className="w-4 h-4" />
              </Link>
              <Link
                href="https://linkedin.com"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-primary font-bold tracking-wider text-sm uppercase">Services</h4>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-white/60 hover:text-white transition-colors">Makeup Artists</Link></li>
              <li><Link href="/services" className="text-white/60 hover:text-white transition-colors">Hair Stylists</Link></li>
              <li><Link href="/portfolio" className="text-white/60 hover:text-white transition-colors">Portfolios</Link></li>
              <li><Link href="/pricing" className="text-white/60 hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-primary font-bold tracking-wider text-sm uppercase">Support</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-white/60 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="text-white/60 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/privacy" className="text-white/60 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-white/60 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-primary font-bold tracking-wider text-sm uppercase">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/60">
                <Mail className="w-4 h-4 text-primary" />
                <span>hello@mua.co.in</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <MapPin className="w-4 h-4 text-primary" />
                <span>New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-white/20 text-xs uppercase tracking-[0.2em]">
            © 2026 MUA PROFESSIONAL PLATFORM. ELEGANCE DEFINED.
          </p>
        </div>
      </div>
    </footer>
  );
}
