import Testimonial from "@/components/HeroSection/Hero";
import Navbar from "@/components/nav/Navbar";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Testimonial/>
    </main>
  );
}
