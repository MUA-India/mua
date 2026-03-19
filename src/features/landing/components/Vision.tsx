"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Vision = () => {
  const t = useTranslations("Landing");
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section className="px-6 py-24 bg-black" id="about" ref={ref as any}>
      <div className={`max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className={`relative ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
          <Image 
            alt="Luxury makeup tools on a dark surface" 
            className="rounded-2xl border border-white/10 relative z-10 w-full h-[500px] object-cover hover:scale-[1.02] transition-transform duration-500" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2Q-hV1ajJpunoNzJu5EnhaMQ46VXjRCdJOW_FVwZhJ3C2tTABrXoJlqkQqZWrotFhHAHGvpykBAEFK7Rx6sF0FxFL05XvhinFji-n_1EaMx8XSuLTAtAD4C3a515Dk_he5-vwShYg38saJ-TwKIYIBCjY8YsXUw27KLbwFp-LWk8Hh2cZYsiV5dC_uUyp1goxLa7OwzuMTY6p7r91j-QoC_QNoTsA0uFJj4TCrirnxr43kqS45JMEnqCOgIZGksDw6M55OXrDbcA"
            width={600}
            height={500}
          />
          <div className="absolute -bottom-8 -right-8 p-6 bg-[#111] border border-primary/30 rounded-xl z-20 animate-float">
            <p className="text-primary text-4xl font-black">{t("Vision.stats.count")}</p>
            <p className="text-white text-sm font-medium">{t("Vision.stats.label")}</p>
          </div>
        </div>
        <div className={`text-right ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">{t("Vision.badge")}</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight uppercase font-display">
            {t.rich("Vision.title", {
              span: (chunks: any) => <span className="text-primary">{chunks}</span>,
              br: () => <br />
            })}
          </h3>
          <p className="text-white/80 text-lg leading-relaxed mb-8 font-light max-w-xl ml-auto">
            {t("Vision.description1")}
          </p>
          <p className="text-white/80 text-lg leading-relaxed font-light max-w-xl ml-auto">
            {t("Vision.description2")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 text-left">
            <div className="border-l-2 border-primary pl-4 hover:border-l-4 transition-all">
              <h4 className="text-white font-bold text-lg uppercase">{t("Vision.feat1.title")}</h4>
              <p className="text-white/60 text-sm">{t("Vision.feat1.description")}</p>
            </div>
            <div className="border-l-2 border-primary pl-4 hover:border-l-4 transition-all">
              <h4 className="text-white font-bold text-lg uppercase">{t("Vision.feat2.title")}</h4>
              <p className="text-white/60 text-sm">{t("Vision.feat2.description")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
