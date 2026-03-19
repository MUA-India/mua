"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export const Vision = () => {
  const t = useTranslations("Landing.Vision");

  return (
    <section className="px-6 py-24 bg-black" id="about">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
          <Image 
            alt="Luxury makeup tools on a dark surface" 
            className="rounded-2xl border border-white/10 relative z-10 w-full h-[500px] object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2Q-hV1ajJpunoNzJu5EnhaMQ46VXjRCdJOW_FVwZhJ3C2tTABrXoJlqkQqZWrotFhHAHGvpykBAEFK7Rx6sF0FxFL05XvhinFji-n_1EaMx8XSuLTAtAD4C3a515Dk_he5-vwShYg38saJ-TwKIYIBCjY8YsXUw27KLbwFp-LWk8Hh2cZYsiV5dC_uUyp1goxLa7OwzuMTY6p7r91j-QoC_QNoTsA0uFJj4TCrirnxr43kqS45JMEnqCOgIZGksDw6M55OXrDbcA"
            width={600}
            height={500}
          />
          <div className="absolute -bottom-8 -right-8 p-6 bg-surface border border-primary/30 rounded-xl z-20">
            <p className="text-primary text-4xl font-black">{t("stats.count")}</p>
            <p className="text-white text-sm font-medium">{t("stats.label")}</p>
          </div>
        </div>
        <div className="text-right">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">{t("badge")}</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight uppercase font-display">
            {t.rich("title", {
              span: (chunks) => <span className="text-primary">{chunks}</span>,
              br: () => <br />
            })}
          </h3>
          <p className="text-white/80 text-lg leading-relaxed mb-8 font-light max-w-xl ml-auto">
            {t("description1")}
          </p>
          <p className="text-white/80 text-lg leading-relaxed font-light max-w-xl ml-auto">
            {t("description2")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 text-left">
            <div className="border-l-2 border-primary pl-4">
              <h4 className="text-white font-bold text-lg uppercase">{t("feat1.title")}</h4>
              <p className="text-white/60 text-sm">{t("feat1.description")}</p>
            </div>
            <div className="border-l-2 border-primary pl-4">
              <h4 className="text-white font-bold text-lg uppercase">{t("feat2.title")}</h4>
              <p className="text-white/60 text-sm">{t("feat2.description")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
