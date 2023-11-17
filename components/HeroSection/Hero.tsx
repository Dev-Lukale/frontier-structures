import Testimonial from "./Testimonial";
import PunchLine from "./PunchLine";
import ShuffleGrid from "./ShuffleGrid";

function HeroSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 lg:grid-cols-12 lg:gap-y-20 lg:py-20 xl:py-32 items-start relative px-6">
        {/* ... Testimonial content */}
        <Testimonial />
        {/* ... Punchline */}
        <PunchLine />
        <ShuffleGrid />
      </div>
    </section>
  );
}

export default HeroSection;
