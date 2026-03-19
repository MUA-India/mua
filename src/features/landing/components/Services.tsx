"use client";

import { useTranslations } from "next-intl";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Services = () => {
  const t = useTranslations("Landing");
  const { ref, isVisible } = useScrollReveal(0.1);

  const services = [
    { id: "bridal", icon: "diamond" },
    { id: "editorial", icon: "auto_awesome" },
    { id: "glam", icon: "celebration" },
    { id: "workshops", icon: "school" },
  ];

  return (
    <section className="px-6 py-24 bg-black border-t border-white/5" id="services" ref={ref as any}>
      <div className="max-w-[1200px] mx-auto">
        <div className={`flex flex-col md:flex-row justify-between items-end mb-16 gap-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="max-w-xl">
            <h2 className="text-white text-5xl md:text-6xl font-black mb-6 uppercase tracking-tight font-display">
              {t("Services.title")}
            </h2>
            <div className={`h-2 bg-primary ${isVisible ? 'animate-line-grow' : 'w-0'}`}></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`group p-10 bg-[#111] border border-white/5 rounded-2xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 150 + 200}ms` }}
            >
              <span className="material-symbols-outlined text-primary text-4xl mb-6 block group-hover:scale-110 transition-transform">{service.icon}</span>
              <h3 className="text-white text-2xl font-bold mb-4 uppercase font-display">{t(`Services.${service.id}.title`)}</h3>
              <p className="text-white/50 text-base leading-relaxed">{t(`Services.${service.id}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
