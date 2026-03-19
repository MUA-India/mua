"use client";

import { useTranslations } from "next-intl";

export const Distinction = () => {
  const t = useTranslations("Landing.Distinction");

  const pillars = ["pill1", "pill2", "pill3"];
  const statsKeys = [
    { key: "artisans", color: "text-primary", label: "artisansLabel" },
    { key: "reverence", color: "text-[#E57373]", label: "reverenceLabel" },
    { key: "commissions", color: "text-primary", label: "commissionsLabel" },
    { key: "support", color: "text-[#E57373]", label: "supportLabel" },
  ];

  const icons = ["verified_user", "payments", "star"];

  return (
    <section className="bg-black py-24 px-6" id="why-choose">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-white text-5xl md:text-6xl font-display font-medium leading-tight">
                {t.rich("title", {
                  span: (chunks) => <span className="text-primary">{chunks}</span>,
                  br: () => <br />
                })}
              </h2>
              <p className="text-white/60 text-lg leading-relaxed max-w-lg">
                {t("description")}
              </p>
            </div>
            <ul className="space-y-8">
              {pillars.map((pill, index) => (
                <li key={pill} className="flex gap-4">
                  <span className="material-symbols-outlined text-primary mt-1">{icons[index]}</span>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">{t(`pills.${pill}.title`)}</h4>
                    <p className="text-white/50 text-sm">{t(`pills.${pill}.description`)}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {statsKeys.map((stat) => (
              <div key={stat.key} className="bg-[#111] p-12 rounded-lg flex flex-col items-center justify-center text-center space-y-2 border border-white/5 aspect-square">
                <span className={`text-4xl font-display font-bold ${stat.color}`}>{t(`stats.${stat.key}`)}</span>
                <span className="text-white/40 text-xs uppercase tracking-widest">{t(`stats.${stat.label}`)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
