import { 
  Hero, 
  Vision, 
  HowItWorks, 
  Services, 
  Distinction, 
  PortalCTA, 
  Testimonials, 
  Contact 
} from "@/features/landing";

export default function Home() {
  return (
    <div className="bg-black">
      <Hero />
      <Vision />
      <HowItWorks />
      <Services />
      <Distinction />
      <PortalCTA />
      <Testimonials />
      <Contact />
    </div>
  );
}
