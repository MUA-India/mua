"use client";

import Image from "next/image";
import { Button } from "@/components/ui";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  CheckCircle2,
  Search,
  Calendar,
  Star,
  Award,
  Users,
  ShieldCheck,
  Zap,
  Quote,
  Heart,
  Briefcase,
  Camera,
  Layers,
  Globe,
  DollarSign,
  TrendingUp
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  const atelierReveal = useScrollReveal<HTMLDivElement>();
  const howItWorksReveal = useScrollReveal<HTMLDivElement>();
  const servicesReveal = useScrollReveal<HTMLDivElement>();
  const distinctionReveal = useScrollReveal<HTMLDivElement>();
  const proReveal = useScrollReveal<HTMLDivElement>();
  const testimonialsReveal = useScrollReveal<HTMLDivElement>();

  const isAtelierVisible = atelierReveal.isVisible;
  const isHowItWorksVisible = howItWorksReveal.isVisible;
  const isServicesVisible = servicesReveal.isVisible;
  const isDistinctionVisible = distinctionReveal.isVisible;
  const isProVisible = proReveal.isVisible;
  const isTestimonialsVisible = testimonialsReveal.isVisible;

  return (
    <div className="bg-black text-foreground selection:bg-primary selection:text-black">
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80"
            alt="Hero Background"
            fill
            className="object-cover opacity-60 animate-slow-zoom"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="animate-fade-in-up">
              Elegance <br />
              <span className="text-primary orange-glow">Redefined.</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:200ms]">
              Discover and book world-class makeup artists for any occasion. From bridal to editorial, find the perfect hand for your unique style.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 animate-fade-in-up [animation-delay:400ms]">
              <Button size="lg" className="bg-primary text-black hover:bg-primary/90 font-bold px-10 py-8 text-lg uppercase tracking-wider rounded-none hover-lift">
                Explore Artists
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-white font-bold px-10 py-8 text-lg uppercase tracking-wider rounded-none hover-lift">
                Our Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is the MUA Atelier? */}
      <section
        id="atelier"
        className="py-32 px-6 border-y border-white/5 bg-surface relative overflow-hidden"
      >
        <div className={cn(
          "max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center opacity-0",
          isAtelierVisible ? "animate-fade-in-up opacity-100" : ""
        )} ref={atelierReveal.ref}>
          <div className="relative group">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80"
                alt="Makeup Kit"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -right-8 bg-primary p-8 shadow-2xl animate-float glass-card">
              <div className="text-black font-display font-black text-4xl leading-none">1500+</div>
              <div className="text-black/70 text-sm font-bold uppercase tracking-widest mt-1">Verified Artists</div>
            </div>
          </div>

          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-primary font-bold tracking-[0.3em] text-sm uppercase">The MUA Atelier</span>
              <h2 className="uppercase leading-[0.9]">
                What is the <br />
                <span className="text-white">MUA Atelier?</span>
              </h2>
            </div>
            <p className="text-lg text-foreground/50 leading-relaxed max-w-xl">
              The MUA Atelier is an exclusive digital gallery, meticulously curated to showcase the pinnacle of makeup artistry. We transcend mere booking, fostering a community where creative vision meets unparalleled skill.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3 p-6 glass-card hover-lift">
                <div className="flex items-center gap-3 text-primary">
                  <Award className="w-6 h-6" />
                  <span className="font-bold uppercase tracking-widest text-sm">Elite Talent</span>
                </div>
                <p className="text-foreground/40 text-sm">Vetted professionals with proven portfolios.</p>
              </div>
              <div className="space-y-3 p-6 glass-card hover-lift">
                <div className="flex items-center gap-3 text-primary">
                  <Calendar className="w-6 h-6" />
                  <span className="font-bold uppercase tracking-widest text-sm">Seamless Booking</span>
                </div>
                <p className="text-foreground/40 text-sm">Instant scheduling and secure payments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="py-32 px-6 bg-black relative overflow-hidden"
      >
        <div className={cn(
          "max-w-4xl mx-auto text-center mb-20 space-y-4 opacity-0",
          isHowItWorksVisible ? "animate-fade-in-up opacity-100" : ""
        )} ref={howItWorksReveal.ref}>
          <h2 className="uppercase text-primary">How It Works</h2>
          <p className="text-foreground/50 text-xl tracking-wide">Your journey to perfection in four simple steps</p>
        </div>

        <div className={cn(
          "max-w-3xl mx-auto space-y-24 relative opacity-0",
          isHowItWorksVisible ? "animate-fade-in-up opacity-100 [animation-delay:200ms]" : ""
        )}>
          {/* Vertical Line */}
          <div className="absolute left-[23px] top-0 bottom-0 w-[2px] bg-white/5 hidden md:block" />

          {[
            { step: "01", title: "Search & Filter", desc: "Find artists by location, style, or specific event requirements.", icon: Search },
            { step: "02", title: "Review Portfolios", desc: "Browse high-resolution galleries and verified client reviews.", icon: Layers },
            { step: "03", title: "Secure Booking", desc: "Book your date with a secure deposit through our trusted platform.", icon: ShieldCheck },
            { step: "04", title: "Glow Up", desc: "Meet your artist and reveal your most confident self!", icon: Star },
          ].map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 items-start relative hover-lift group">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-black font-black text-xl z-10 shrink-0 group-hover:scale-110 smooth-transition">
                {item.step}
              </div>
              <div className="space-y-2">
                <h3 className="font-bold uppercase tracking-wider flex items-center gap-3 group-hover:text-primary smooth-transition">
                  {item.title}
                </h3>
                <p className="text-foreground/40 text-lg leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Premier Services */}
      <section
        id="services"
        className="py-32 px-6 bg-surface border-y border-white/5"
      >
        <div className="max-w-[1400px] mx-auto" ref={servicesReveal.ref}>
          <div className={cn(
            "mb-20 opacity-0",
            isServicesVisible ? "animate-fade-in-left opacity-100" : ""
          )}>
            <h2 className="uppercase text-primary">Premier Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Bridal", desc: "Elegant, long-lasting looks for your special day.", icon: Heart },
              { title: "Editorial", desc: "High-fashion artistry for shoots and commercials.", icon: Briefcase },
              { title: "Event Glam", desc: "Stunning makeup for parties, galas, and nights out.", icon: Zap },
              { title: "Workshops", desc: "Personalized lessons from master artists.", icon: Users },
            ].map((service, index) => (
              <div
                key={index}
                className={cn(
                  "group p-10 glass-card hover:border-primary hover-lift opacity-0",
                  isServicesVisible ? "animate-fade-in-up opacity-100" : ""
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <service.icon className="w-10 h-10 text-primary mb-8 group-hover:scale-110 smooth-transition" />
                <h3 className="font-bold uppercase tracking-wider mb-4">{service.title}</h3>
                <p className="text-foreground/40 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Mark of Distinction */}
      <section
        className="py-32 px-6 bg-black overflow-hidden"
      >
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center" ref={distinctionReveal.ref}>
          <div className={cn(
            "space-y-12 opacity-0",
            isDistinctionVisible ? "animate-fade-in-left opacity-100" : ""
          )}>
            <div className="space-y-4">
              <h2 className="uppercase leading-[0.9]">
                The Mark of <br />
                <span className="text-primary">Distinction.</span>
              </h2>
              <p className="text-lg text-foreground/50 leading-relaxed max-w-xl">
                At MUA, exclusivity is paramount. We champion unparalleled artistry, meticulous hygiene, and an automated experience, from initial inspiration to the final, breathtaking finish.
              </p>
            </div>

            <div className="space-y-10">
              {[
                { title: "Curated Excellence", desc: "Every artist is meticulously vetted for their distinctive portfolio and professional standing.", icon: CheckCircle2 },
                { title: "Unwavering Transparency", desc: "No hidden pricing, transparent artist compensation, and an automated ecosystem.", icon: TrendingUp },
                { title: "Authentic Artistry", desc: "Your features are enhanced by the precise brushwork of follow-deserving talent.", icon: Star },
              ].map((feature, index) => (<div key={index} className="flex gap-6 items-start group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-black smooth-transition">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-inherit" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xl font-bold uppercase tracking-wide group-hover:text-primary smooth-transition">{feature.title}</h4>
                  <p className="text-foreground/40 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
              ))}
            </div>
          </div>

          <div className={cn(
            "grid grid-cols-2 gap-6 opacity-0",
            isDistinctionVisible ? "animate-fade-in-right opacity-100" : ""
          )}>
            {[
              { val: "5k+", label: "Verified Artists" },
              { val: "99%", label: "Client Satisfaction" },
              { val: "25k+", label: "Successful Bookings" },
              { val: "Concierge", label: "24/7 Support" },
            ].map((stat, index) => (
              <div key={index} className="aspect-square glass-card p-12 flex flex-col items-center justify-center text-center space-y-4 hover:bg-white/10 hover-lift group">
                <span className="text-4xl md:text-5xl font-display font-black text-primary group-hover:scale-110 smooth-transition">{stat.val}</span>
                <span className="text-foreground/40 text-xs font-bold uppercase tracking-[0.2em]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pro Makeup Artist CTA */}
      <section
        id="pro-section"
        className="py-24 px-6 bg-surface"
      >
        <div className={cn(
          "max-w-[1400px] mx-auto bg-black border border-primary/30 p-12 md:p-20 relative overflow-hidden opacity-0",
          isProVisible ? "animate-scale-in opacity-100" : ""
        )} ref={proReveal.ref}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="uppercase text-primary">
                  Are You a Pro <br /> Makeup Artist?
                </h2>
                <p className="text-xl text-foreground/50 leading-relaxed max-w-lg">
                  Scale your business, manage your calendar, and get discovered by thousands of clients seeking your specific expertise.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="bg-primary text-black hover:bg-primary/90 font-bold px-10 py-7 text-lg uppercase tracking-wider rounded-none hover-lift">
                  Start Your Profile
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-white font-bold px-10 py-7 text-lg uppercase tracking-wider rounded-none hover-lift">
                  Learn More
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Brand Awareness", icon: Globe },
                { title: "Fair Rates", icon: DollarSign },
                { title: "High Sales", icon: TrendingUp },
                { title: "Global Exposure", icon: Camera },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 glass-card p-6 hover:border-primary hover-lift group">
                  <item.icon className="w-6 h-6 text-primary group-hover:scale-110 smooth-transition" />
                  <span className="font-bold uppercase tracking-wider text-sm">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Love */}
      <section
        id="testimonials"
        className="py-32 px-6 bg-black border-y border-white/5"
      >
        <div className="max-w-[1400px] mx-auto" ref={testimonialsReveal.ref}>
          <div className={cn(
            "text-center mb-20 opacity-0",
            isTestimonialsVisible ? "animate-fade-in-up opacity-100" : ""
          )}>
            <h2 className="uppercase text-primary">Client Love</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Wood", role: "Bridal Client", text: "Found the most amazing artist for my wedding through MUA. The process was seamless and the results were breathtaking!" },
              { name: "T. Nikolay", role: "Editorial Photographer", text: "As an editorial photographer, I need reliable MUAs. This platform has become my go-to for finding top-tier creative talent." },
              { name: "Amara Seal", role: "Workshop Student", text: "The masterclass I attended was life-changing. I finally learned the techniques I&apos;ve always wanted to master." },
            ].map((testimonial, index) => (
              <div
                key={index}
                className={cn(
                  "p-10 glass-card space-y-8 relative hover-lift opacity-0",
                  isTestimonialsVisible ? "animate-fade-in-up opacity-100" : ""
                )}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Quote className="w-12 h-12 text-primary/20 absolute top-8 right-8" />
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                </div>
                <p className="text-lg text-foreground/60 leading-relaxed italic">&quot;{testimonial.text}&quot;</p>
                <div className="flex items-center gap-4 pt-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-wider">{testimonial.name}</h4>
                    <p className="text-foreground/40 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6 bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80"
            alt="CTA Background"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        </div>

        <div className="container relative z-10 mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="uppercase leading-[0.9] animate-fade-in-up">
              Your Beauty Journey <br />
              <span className="text-primary orange-glow">Starts Here.</span>
            </h2>
            <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:200ms]">
              Join the world&apos;s most exclusive makeup artistry network today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 animate-fade-in-up [animation-delay:400ms]">
              <Button size="lg" className="bg-primary text-black hover:bg-primary/90 font-bold px-12 py-8 text-lg uppercase tracking-wider rounded-none hover-lift">
                Find Your Artist
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-white font-bold px-12 py-8 text-lg uppercase tracking-wider rounded-none hover-lift">
                Register as MUA
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
