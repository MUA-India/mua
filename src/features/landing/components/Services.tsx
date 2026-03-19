"use client";

import { useTranslations } from "next-intl";

export const Services = () => {
  const t = useTranslations("Landing.Services");

  const services = [
    { key: "bridal", icon: "favorite" },
    { key: "editorial", icon: "movie" },
    { key: "glam", icon: "celebration" },
    { key: "workshops", icon: "school" },
  ];

  return (
    <section className="px-6 py-24 bg-black" id="services">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-primary text-4xl font-black mb-12 uppercase font-display">{t("title")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.key} className="p-8 bg-surface border border-white/5 hover:border-primary transition-all group rounded-sm">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </span>
              <h3 className="text-white text-xl font-bold mb-3 uppercase font-display">{t(`${service.key}.title`)}</h3>
              <p className="text-white/60 text-sm">{t(`${service.key}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
