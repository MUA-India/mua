"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const t = useTranslations("Landing");

  return (
    <section className="relative px-6 py-12 lg:py-20 max-w-[1200px] mx-auto">
      <div className="relative overflow-hidden rounded-2xl">
        <div
          className="flex min-h-[600px] flex-col gap-8 bg-cover bg-center bg-no-repeat items-start justify-center px-6 md:px-16 transition-all"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDvjyWeFFls_ndotNFet-R5oyhwwrc1KpTuIRnj9Z_535ohm1ILVsXE4aeb_1gxhQK7H48tFDGB69VlrorzO5R_KYfbZT1fn35m4PRmjmz_VRTETHSZ01xxWSPv9ngJPXtHdfBaK2ZfGBhYo1Zlzjb_4AtGYnQVzRPTsbe8gMxlA6xJxTZpxlRa3VVldFAv6XYxafWzCE1K3uYhlfdKUgR8dPUvM_l-HRbW60gQ23GFYgw-ZeZYXMlbsFIQfcfsSTBpEfWb6BkKVfY")`,
          }}
        >
          <div className="max-w-3xl">
            <h1 className="text-white text-5xl md:text-8xl font-display font-black leading-[0.9] tracking-tighter mb-8 uppercase animate-fade-in-up">
              {t.rich("Hero.title", {
                br: () => <br />,
                span: (chunks: any) => <span className="text-primary animate-glow-pulse italic">{chunks}</span>
              })}
            </h1>
            <p className="text-white/80 text-lg md:text-2xl font-light leading-relaxed max-w-xl animate-fade-in-up animation-delay-200">
              {t("Hero.description")}
            </p>
          </div>
          <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-400">
            <Button
              size="lg"
              className="rounded-full bg-primary text-black hover:bg-primary/90 font-black px-8 py-7 text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-transform uppercase h-auto"
            >
              {t("Hero.primaryCta")}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-2 border-white text-white hover:bg-white hover:text-black font-bold px-8 py-7 text-lg hover:scale-105 transition-transform uppercase h-auto"
            >
              {t("Hero.secondaryCta")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
