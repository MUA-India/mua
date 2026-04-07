"use client";

import Image from "next/image";

import {
  Award,
  Briefcase,
  Calendar,
  Camera,
  CheckCircle2,
  DollarSign,
  Globe,
  Heart,
  Layers,
  Quote,
  Search,
  ShieldCheck,
  Star,
  TrendingUp,
  Users,
  Zap
} from "lucide-react";

import { cn } from "@/lib/utils";

import { useScrollReveal } from "@/hooks/useScrollReveal";

import Link from "next/link";
import { Button } from "@/components/ui";

export default function Home() {
  const { ref: atelierRef, isVisible: isAtelierVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: howItWorksRef, isVisible: isHowItWorksVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: servicesRef, isVisible: isServicesVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: distinctionRef, isVisible: isDistinctionVisible } =
    useScrollReveal<HTMLDivElement>();
  const { ref: proRef, isVisible: isProVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: testimonialsRef, isVisible: isTestimonialsVisible } =
    useScrollReveal<HTMLDivElement>();

  return (
    <div className="bg-background text-foreground selection:bg-primary selection:text-white">
      {/* Hero Section */}
      <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80"
            alt="Hero Background"
            fill
            className="animate-slow-zoom object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="mx-auto max-w-4xl space-y-8">
            <h1 className="animate-fade-in-up text-[#000000]">
              Elegance <br />
              <span className="text-[#000000]">Redefined.</span>
            </h1>
            <p className="animate-fade-in-up mx-auto max-w-2xl text-xl leading-relaxed text-[#000000]/80 [animation-delay:200ms] md:text-2xl">
              Discover and book world-class makeup artists for any occasion. From bridal to
              editorial, find the perfect hand for your unique style.
            </p>
            <div className="animate-fade-in-up flex flex-col items-center justify-center gap-6 pt-8 [animation-delay:400ms] sm:flex-row">
              <Button
                asChild
                size="lg"
                className="hover-lift rounded-none bg-[#000000] px-10 py-8 text-lg font-bold tracking-wider text-[#ffffff] uppercase hover:bg-[#000000]/90"
              >
                <Link href="/signup?role=USER">Find an Artist</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="hover-lift rounded-none border-[#000000]/20 px-10 py-8 text-lg font-bold tracking-wider text-[#000000] uppercase hover:bg-[#000000]/5"
              >
                <Link href="/signup?role=ARTIST">Join as an Artist</Link>
              </Button>
            </div>
            <div className="animate-fade-in-up flex items-center justify-center gap-4 text-sm text-[#000000]/60 [animation-delay:600ms]">
              <Link href="/login" className="hover:text-[#000000] underline underline-offset-4">
                Already have an account? Login
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is the MUA Atelier? */}
      <section
        id="atelier"
        className="relative overflow-hidden border-y border-border bg-surface px-6 py-32"
      >
        <div
          className={cn(
            "mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-20 opacity-0 lg:grid-cols-2",
            isAtelierVisible ? "animate-fade-in-up opacity-100" : ""
          )}
          ref={atelierRef}
        >
          <div className="group relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
              <Image
                src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80"
                alt="Makeup Kit"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/5" />
            </div>
            {/* Floating Badge */}
            <div className="animate-float glass-card absolute -right-8 -bottom-8 bg-primary p-8 shadow-2xl">
              <div className="font-display text-4xl leading-none font-black text-white">1500+</div>
              <div className="mt-1 text-sm font-bold tracking-widest text-white/80 uppercase">
                Verified Artists
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-sm font-bold tracking-[0.3em] text-primary uppercase">
                The MUA Atelier
              </span>
              <h2 className="leading-[0.9] uppercase">
                What is the <br />
                <span className="text-foreground">MUA Atelier?</span>
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-foreground/70">
              The MUA Atelier is an exclusive digital gallery, meticulously curated to showcase the
              pinnacle of makeup artistry. We transcend mere booking, fostering a community where
              creative vision meets unparalleled skill.
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="glass-card hover-lift space-y-3 p-6">
                <div className="flex items-center gap-3 text-primary">
                  <Award className="h-6 w-6" />
                  <span className="text-sm font-bold tracking-widest uppercase">Elite Talent</span>
                </div>
                <p className="text-sm text-foreground/60">
                  Vetted professionals with proven portfolios.
                </p>
              </div>
              <div className="glass-card hover-lift space-y-3 p-6">
                <div className="flex items-center gap-3 text-primary">
                  <Calendar className="h-6 w-6" />
                  <span className="text-sm font-bold tracking-widest uppercase">
                    Seamless Booking
                  </span>
                </div>
                <p className="text-sm text-foreground/60">
                  Instant scheduling and secure payments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="relative overflow-hidden bg-background px-6 py-32">
        <div
          className={cn(
            "mx-auto mb-20 max-w-4xl space-y-4 text-center opacity-0",
            isHowItWorksVisible ? "animate-fade-in-up opacity-100" : ""
          )}
          ref={howItWorksRef}
        >
          <h2 className="text-primary uppercase">How It Works</h2>
          <p className="text-xl tracking-wide text-foreground/70">
            Your journey to perfection in four simple steps
          </p>
        </div>

        <div
          className={cn(
            "relative mx-auto max-w-3xl space-y-24 opacity-0",
            isHowItWorksVisible ? "animate-fade-in-up opacity-100 [animation-delay:200ms]" : ""
          )}
        >
          {/* Vertical Line */}
          <div className="absolute top-0 bottom-0 left-[23px] hidden w-[2px] bg-border md:block" />

          {[
            {
              step: "01",
              title: "Search & Filter",
              desc: "Find artists by location, style, or specific event requirements.",
              icon: Search
            },
            {
              step: "02",
              title: "Review Portfolios",
              desc: "Browse high-resolution galleries and verified client reviews.",
              icon: Layers
            },
            {
              step: "03",
              title: "Secure Booking",
              desc: "Book your date with a secure deposit through our trusted platform.",
              icon: ShieldCheck
            },
            {
              step: "04",
              title: "Glow Up",
              desc: "Meet your artist and reveal your most confident self!",
              icon: Star
            }
          ].map((item, index) => (
            <div
              key={index}
              className="hover-lift group relative flex flex-col items-start gap-8 md:flex-row"
            >
              <div className="smooth-transition z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-black text-white group-hover:scale-110">
                {item.step}
              </div>
              <div className="space-y-2">
                <h3 className="smooth-transition flex items-center gap-3 font-bold tracking-wider uppercase group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="text-lg leading-relaxed text-foreground/60">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Premier Services */}
      <section id="services" className="border-y border-border bg-surface px-6 py-32">
        <div className="mx-auto max-w-[1400px]" ref={servicesRef}>
          <div
            className={cn(
              "mb-20 opacity-0",
              isServicesVisible ? "animate-fade-in-left opacity-100" : ""
            )}
          >
            <h2 className="text-primary uppercase">Premier Services</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Bridal",
                desc: "Elegant, long-lasting looks for your special day.",
                icon: Heart
              },
              {
                title: "Editorial",
                desc: "High-fashion artistry for shoots and commercials.",
                icon: Briefcase
              },
              {
                title: "Event Glam",
                desc: "Stunning makeup for parties, galas, and nights out.",
                icon: Zap
              },
              { title: "Workshops", desc: "Personalized lessons from master artists.", icon: Users }
            ].map((service, index) => (
              <div
                key={index}
                className={cn(
                  "group glass-card hover-lift p-10 opacity-0 hover:border-primary",
                  isServicesVisible ? "animate-fade-in-up opacity-100" : ""
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <service.icon className="smooth-transition mb-8 h-10 w-10 text-primary group-hover:scale-110" />
                <h3 className="mb-4 font-bold tracking-wider uppercase">{service.title}</h3>
                <p className="leading-relaxed text-foreground/40">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Mark of Distinction */}
      <section className="overflow-hidden bg-background px-6 py-32">
        <div
          className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-32 lg:grid-cols-2"
          ref={distinctionRef}
        >
          <div
            className={cn(
              "space-y-12 opacity-0",
              isDistinctionVisible ? "animate-fade-in-left opacity-100" : ""
            )}
          >
            <div className="space-y-4">
              <h2 className="leading-[0.9] uppercase">
                The Mark of <br />
                <span className="text-primary">Distinction.</span>
              </h2>
              <p className="max-w-xl text-lg leading-relaxed text-foreground/70">
                At MUA, exclusivity is paramount. We champion unparalleled artistry, meticulous
                hygiene, and an automated experience, from initial inspiration to the final,
                breathtaking finish.
              </p>
            </div>

            <div className="space-y-10">
              {[
                {
                  title: "Curated Excellence",
                  desc: "Every artist is meticulously vetted for their distinctive portfolio and professional standing.",
                  icon: CheckCircle2
                },
                {
                  title: "Unwavering Transparency",
                  desc: "No hidden pricing, transparent artist compensation, and an automated ecosystem.",
                  icon: TrendingUp
                },
                {
                  title: "Authentic Artistry",
                  desc: "Your features are enhanced by the precise brushwork of follow-deserving talent.",
                  icon: Star
                }
              ].map((feature, index) => (
                <div key={index} className="group flex items-start gap-6">
                  <div className="smooth-transition flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/10 bg-primary/5 group-hover:bg-primary group-hover:text-white">
                    <feature.icon className="h-6 w-6 text-primary group-hover:text-inherit" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="smooth-transition text-xl font-bold tracking-wide uppercase group-hover:text-primary">
                      {feature.title}
                    </h4>
                    <p className="leading-relaxed text-foreground/60">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={cn(
              "grid grid-cols-2 gap-6 opacity-0",
              isDistinctionVisible ? "animate-fade-in-right opacity-100" : ""
            )}
          >
            {[
              { val: "5k+", label: "Verified Artists" },
              { val: "99%", label: "Client Satisfaction" },
              { val: "25k+", label: "Successful Bookings" },
              { val: "Concierge", label: "24/7 Support" }
            ].map((stat, index) => (
              <div
                key={index}
                className="glass-card hover-lift group flex aspect-square flex-col items-center justify-center space-y-4 p-12 text-center hover:bg-black/5"
              >
                <span className="smooth-transition font-display text-4xl font-black text-primary group-hover:scale-110 md:text-5xl">
                  {stat.val}
                </span>
                <span className="text-xs font-bold tracking-[0.2em] text-foreground/60 uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pro Makeup Artist CTA */}
      <section id="pro-section" className="bg-surface px-6 py-24">
        <div
          className={cn(
            "relative mx-auto max-w-[1400px] overflow-hidden border border-primary/10 bg-background p-12 opacity-0 md:p-20",
            isProVisible ? "animate-scale-in opacity-100" : ""
          )}
          ref={proRef}
        >
          <div className="absolute top-0 right-0 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

          <div className="relative z-10 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-primary uppercase">
                  Are You a Pro <br /> Makeup Artist?
                </h2>
                <p className="max-w-lg text-xl leading-relaxed text-foreground/70">
                  Scale your business, manage your calendar, and get discovered by thousands of
                  clients seeking your specific expertise.
                </p>
              </div>
              <div className="flex flex-col gap-6 sm:flex-row">
                <Button
                  size="lg"
                  className="hover-lift rounded-none bg-primary px-10 py-7 text-lg font-bold tracking-wider text-white uppercase hover:bg-primary/90"
                >
                  Start Your Profile
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="hover-lift rounded-none border-black/10 px-10 py-7 text-lg font-bold tracking-wider text-black uppercase hover:bg-black/5"
                >
                  Learn More
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                { title: "Brand Awareness", icon: Globe },
                { title: "Fair Rates", icon: DollarSign },
                { title: "High Sales", icon: TrendingUp },
                { title: "Global Exposure", icon: Camera }
              ].map((item, index) => (
                <div
                  key={index}
                  className="glass-card hover-lift group flex items-center gap-4 p-6 hover:border-primary"
                >
                  <item.icon className="smooth-transition h-6 w-6 text-primary group-hover:scale-110" />
                  <span className="text-sm font-bold tracking-wider uppercase">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Love */}
      <section id="testimonials" className="border-y border-border bg-background px-6 py-32">
        <div className="mx-auto max-w-[1400px]" ref={testimonialsRef}>
          <div
            className={cn(
              "mb-20 text-center opacity-0",
              isTestimonialsVisible ? "animate-fade-in-up opacity-100" : ""
            )}
          >
            <h2 className="text-primary uppercase">Client Love</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                name: "Sarah Wood",
                role: "Bridal Client",
                text: "Found the most amazing artist for my wedding through MUA. The process was seamless and the results were breathtaking!"
              },
              {
                name: "T. Nikolay",
                role: "Editorial Photographer",
                text: "As an editorial photographer, I need reliable MUAs. This platform has become my go-to for finding top-tier creative talent."
              },
              {
                name: "Amara Seal",
                role: "Workshop Student",
                text: "The masterclass I attended was life-changing. I finally learned the techniques I've always wanted to master."
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className={cn(
                  "glass-card hover-lift relative space-y-8 p-10 opacity-0",
                  isTestimonialsVisible ? "animate-fade-in-up opacity-100" : ""
                )}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Quote className="absolute top-8 right-8 h-12 w-12 text-primary/10" />
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg leading-relaxed text-foreground/70 italic">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold tracking-wider uppercase">{testimonial.name}</h4>
                    <p className="text-sm text-foreground/60">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-background px-6 py-40">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80"
            alt="CTA Background"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="mx-auto max-w-4xl space-y-12">
            <h2 className="animate-fade-in-up leading-[0.9] uppercase">
              Your Beauty Journey <br />
              <span className="text-primary">Starts Here.</span>
            </h2>
            <p className="animate-fade-in-up mx-auto max-w-2xl text-xl leading-relaxed text-foreground/80 [animation-delay:200ms] md:text-2xl">
              Join the world&apos;s most exclusive makeup artistry network today.
            </p>
            <div className="animate-fade-in-up flex flex-col items-center justify-center gap-6 pt-8 [animation-delay:400ms] sm:flex-row">
              <Button
                size="lg"
                className="hover-lift rounded-none bg-primary px-12 py-8 text-lg font-bold tracking-wider text-white uppercase hover:bg-primary/90"
              >
                Find Your Artist
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="hover-lift rounded-none border-black/10 px-12 py-8 text-lg font-bold tracking-wider text-black uppercase hover:bg-black/5"
              >
                Register as MUA
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
