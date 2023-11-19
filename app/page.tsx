import About from "@/components/About/About";
import Feature from "@/components/FeatureSection/Feature";
import HeroSection from "@/components/HeroSection/Hero";


export default function Home() {
  return (
    <main className="h-auto">
      <HeroSection />
      <Feature />
      <About />
    </main>
  );
}
