"use client";

import { useTranslations } from "next-intl";

export const Testimonials = () => {
  const t = useTranslations("Landing.Testimonials");

  const items = ["item1", "item2", "item3"];

  return (
    <section className="px-6 py-24 bg-surface/20">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-primary text-center text-4xl font-black mb-16 uppercase tracking-widest font-display">{t("title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div 
              key={item} 
              className={`bg-surface p-8 rounded-2xl border border-white/5 ${index === 1 ? 'relative md:-top-4' : ''}`}
            >
              <div className="flex text-primary mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="material-symbols-outlined">star</span>
                ))}
              </div>
              <p className="text-white italic mb-6 font-light">{t(`${item}.text`)}</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-black uppercase">
                  {t(`${item}.author`).split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="text-white font-bold text-sm uppercase">{t(`${item}.author`)}</p>
                  <p className="text-white/40 text-[10px] uppercase tracking-wider">{t(`${item}.role`)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
