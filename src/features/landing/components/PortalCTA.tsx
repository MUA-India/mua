"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

export const PortalCTA = () => {
  const t = useTranslations("Landing.PortalCTA");

  const benefits = [
    { icon: "dashboard", key: "Smart Dashboard" },
    { icon: "payments", key: "Fast Payouts" },
    { icon: "trending_up", key: "Grow Reach" },
    { icon: "reviews", key: "Client Reviews" },
  ];

  return (
    <section className="px-6 py-24 bg-black" id="mua-portal">
      <div className="max-w-[1200px] mx-auto border-2 border-primary rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="text-primary text-4xl md:text-5xl font-black mb-6 uppercase font-display">
            {t.rich("title", {
              br: () => <br />
            })}
          </h2>
          <p className="text-white text-xl mb-8 leading-relaxed font-light">
            {t("description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-primary text-black px-10 py-7 rounded-xl font-black text-lg hover:bg-orange-600 transition-colors uppercase h-auto">
              {t("primaryCta")}
            </Button>
            <Button variant="outline" className="border border-white text-white px-10 py-7 rounded-xl font-bold text-lg hover:bg-white hover:text-black transition-all uppercase h-auto">
              {t("secondaryCta")}
            </Button>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4">
          {benefits.map((benefit) => (
            <div key={benefit.icon} className="bg-surface p-6 rounded-xl border border-white/10">
              <span className="material-symbols-outlined text-primary mb-2">{benefit.icon}</span>
              <p className="text-white font-bold uppercase text-xs tracking-wider">{benefit.key}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
