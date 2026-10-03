import offer from "@/lib/data/offer";
import TreatmentsTextContainer from "./TreatmentsTextContainer";

export default function Treatments() {
  return (
    <section id="treatments" className="bg-slate-800 pb-14 pt-6 sm:pb-20 sm:pt-8">
      <div className="site-container">
        <h2 className="section-heading mb-8 text-white sm:mb-10">Jak możemy Ci pomóc?</h2>
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2">{offer.map((treatment, index) => <TreatmentsTextContainer key={treatment.header} {...treatment} className={offer.length % 2 !== 0 && index === offer.length - 1 ? "md:col-span-2" : undefined} />)}</div>
      </div>
    </section>
  );
}
