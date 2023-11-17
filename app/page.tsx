import Feature from "@/components/FeatureSection/Feature";
import HeroSection from "@/components/HeroSection/Hero";
import Navbar from "@/components/nav/Navbar";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Feature/>
    </main>
  );
}
