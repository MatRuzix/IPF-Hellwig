import Hero from "@/components/Hero/Hero";
import WhyIPF from "@/components/whyIPF/WhyIPF";
import OurTeam from "@/components/ourTeam/OurTeam";
import Treatments from "@/components/Treatments/components/Treatments";
import Cooperations from "@/components/cooperations/Cooperations";
import Footer from "@/components/footer/Footer";
import { clinicStructuredData } from "@/lib/structuredData";

const Home = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(clinicStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <main id="main-content" className="w-full bg-slate-800">
        <Hero />
        <Treatments />
        <WhyIPF />
        <OurTeam />
        <Cooperations />
      </main>
      <Footer />
    </>
  );
};
export default Home;
