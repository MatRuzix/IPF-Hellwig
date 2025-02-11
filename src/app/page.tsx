"use client";

import Hero from "@/components/Hero/Hero";
import WhyIPF from "@/components/whyIPF/WhyIPF";
import OurTeam from "@/components/ourTeam/OurTeam";
import Treatments from "@/components/Treatments/components/Treatments";
import Cooperations from "@/components/cooperations/Cooperations";

const Home = () => {
  return (
    <div className="w-full grow bg-slate-800">
      <Hero />
      <Treatments />
      <WhyIPF />
      <OurTeam />
      <Cooperations />
    </div>
  );
};
export default Home;
