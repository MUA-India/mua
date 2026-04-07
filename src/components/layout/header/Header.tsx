"use client";

import Image from "next/image";

import { Link } from "@/i18n/navigation";

import { Button } from "@/components/ui";

export const Header = () => {
  return (
    <header className="animate-fade-in-down fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 px-6 py-4 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between">
        <div className="flex items-center gap-12">
          <Link href="/" className="group flex items-center gap-3">
            <Image
              src="/mua.png"
              alt="MUA"
              width={100}
              height={36}
              className="object-contain invert"
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            <Link
              href="#atelier"
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
            >
              The Atelier
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
            >
              How It Works
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
            >
              Services
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
            >
              Testimonials
            </Link>
            <Link
              href="#pro-section"
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
            >
              Pro Section
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="hidden border-primary px-6 font-semibold text-primary hover:bg-primary hover:text-white sm:flex"
          >
            Join MUA
          </Button>
          <Button className="bg-primary px-8 font-bold text-white hover:bg-primary/90">
            Book Now
          </Button>
        </div>
      </div>
    </header>
  );
};
