import TextContainer from "./TextContainer";

const reasons = [
  {
    header: "Innowacyjne metody leczenia",
    imgSrc: "/letter-l.png",
    text: "Stawiamy na nowoczesne, skuteczne i sprawdzone techniki terapeutyczne, które przyspieszają regenerację i poprawiają jakość życia. Korzystamy z najnowszych osiągnięć fizjoterapii, łącząc wiedzę medyczną z innowacyjnymi rozwiązaniami, aby zapewnić Ci najlepsze efekty.",
  },
  {
    header: "Profesjonalna opieka",
    imgSrc: "/letter-p.png",
    text: "Twoje zdrowie jest dla nas priorytetem, dlatego zapewniamy kompleksową i rzetelną opiekę na każdym etapie terapii. Dzięki holistycznemu podejściu nasz doświadczony zespół fizjoterapeutów dba o Twój komfort, bezpieczeństwo i maksymalną skuteczność leczenia.",
  },
  {
    header: "Fizjoterapia dopasowana do Ciebie",
    imgSrc: "/letter-f.png",
    text: "Patrzymy na pacjenta całościowo. Dobieramy techniki manualne i ćwiczenia do indywidualnych potrzeb oraz celu terapii.",
  },
];

export default function WhyIPF() {
  return (
    <section id="why-ipf" className="bg-slate-100 py-14 sm:py-20">
      <div className="site-container">
        <h2 className="section-heading mb-8 text-slate-800 sm:mb-10">
          Dlaczego IPF Hellwig?
        </h2>
        <div className="grid gap-5 sm:gap-6 lg:grid-cols-3">
          {reasons.map((reason) => (
            <TextContainer key={reason.header} {...reason} />
          ))}
        </div>
      </div>
    </section>
  );
}
