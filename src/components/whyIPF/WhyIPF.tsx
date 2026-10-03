import TextContainer from "./TextContainer";

const reasons = [
  { header: "Profesjonalizm", imgSrc: "/letter-p.png", text: "Stawiamy na nowoczesne, skuteczne i sprawdzone techniki terapeutyczne. Łączymy wiedzę medyczną z nowoczesnymi rozwiązaniami w fizjoterapii." },
  { header: "Rzetelność", imgSrc: "/letter-l.png", text: "Twoje zdrowie jest dla nas priorytetem. Zapewniamy rzetelną opiekę na każdym etapie terapii, dbając o Twój komfort i bezpieczeństwo." },
  { header: "Indywidualne podejście", imgSrc: "/letter-f.png", text: "Patrzymy na pacjenta całościowo. Dobieramy techniki manualne i ćwiczenia do indywidualnych potrzeb oraz celu terapii." },
];

export default function WhyIPF() {
  return (
    <section id="why-ipf" className="bg-slate-100 py-14 sm:py-20">
      <div className="site-container">
        <h2 className="section-heading mb-8 text-slate-800 sm:mb-10">Dlaczego IPF Hellwig?</h2>
        <div className="grid gap-5 sm:gap-6 lg:grid-cols-3">{reasons.map((reason) => <TextContainer key={reason.header} {...reason} />)}</div>
      </div>
    </section>
  );
}
