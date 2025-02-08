"use client";

import Hero from "@/components/Hero/Hero";
import WhyIPF from "@/components/whyIPF/WhyIPF";
import OurTeam from "@/components/ourTeam/OurTeam";
import Treatments from "@/components/Treatments/components/Treatments";

const Home = () => {
  return (
    <div className="w-full grow bg-slate-800">
      <Hero />
      <Treatments />
      <WhyIPF />

      <OurTeam />
    </div>
  );
};
export default Home;
