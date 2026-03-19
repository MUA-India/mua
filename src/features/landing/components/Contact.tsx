"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  const t = useTranslations("Landing.Contact");

  return (
    <section className="relative px-6 py-24 bg-black overflow-hidden">
      <div className="max-w-[960px] mx-auto text-center relative z-10">
        <h2 className="text-white text-5xl md:text-7xl font-black mb-8 leading-tight uppercase font-display">
          {t.rich("title", {
            span: (chunks) => <span className="text-primary">{chunks}</span>,
            br: () => <br />
          })}
        </h2>
        <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto font-light">
          {t("description")}
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button className="bg-primary text-black px-12 py-8 rounded-full text-xl font-black hover:scale-105 transition-transform shadow-2xl shadow-primary/40 uppercase h-auto">
            {t("cta1")}
          </Button>
          <Button variant="outline" className="border-2 border-white text-white px-12 py-8 rounded-full text-xl font-bold hover:bg-white hover:text-black transition-all uppercase h-auto">
            {t("cta2")}
          </Button>
        </div>
      </div>
    </section>
  );
};
