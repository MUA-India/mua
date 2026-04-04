"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui";

export const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl px-6 py-4 animate-fade-in-down">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/mua.png"
              alt="MUA"
              width={100}
              height={36}
              className="object-contain invert"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="#atelier"
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              The Atelier
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="#pro-section"
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              Pro Section
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="hidden sm:flex border-primary text-primary hover:bg-primary hover:text-white font-semibold px-6"
          >
            Join MUA
          </Button>
          <Button className="bg-primary text-white hover:bg-primary/90 font-bold px-8">
            Book Now
          </Button>
        </div>
      </div>
    </header>
  );
};
