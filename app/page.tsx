import About from "@/components/About/About";
import Feature from "@/components/FeatureSection/Feature";
import HeroSection from "@/components/HeroSection/Hero";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/nav/Navbar";


export default function Home() {
  return (
    <main className="min-h-screen">
      
      <HeroSection />
      <Feature />
      <About />
      <Footer/>
    </main>
  );
}
