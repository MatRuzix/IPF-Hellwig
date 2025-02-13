import Image from "next/image";

import TextContainer from "./TextContainer";

const WhyIPF = () => {
  return (
    <div
      className="flex w-full h-[calc(100vh-144px)] mobile:h-[calc(100vh-84px)] mobile-xs:h-[calc(100vh-84px)] bg-gradient-to-b from-slate-800 from-[5%] to-slate-100 to-[60%] space-y-6 relative pb-5"
      id="why-us"
    >
      <div className="flex w-full h-full items-center overflow-hidden absolute z-[11]">
        <div className="flex flex-row-reverse mobile:flex-col-reverse mobile-xs:flex-col-reverse w-full absolute inset-0 m-auto trasn z-10 items-center space-y-4 py-6">
          <div className="my-[1%] pr-[10%] mobile:pr-0 mobile-xs:pr-0 normalScreen:text-6xl hamburger:text-5xl mobile:text-4xl mobile-xs:text-3xl">
            Dlaczego <span className="text-blue-900">IPF?</span>
          </div>
          <div className="flex w-full h-full flex-col justify-center items-center space-y-6 mx-4">
            <TextContainer
              header="Innowacyjne metody leczenia"
              imgSrc="/letter-l.png"
              text="Stawiamy na nowoczesne, skuteczne i sprawdzone techniki terapeutyczne, które przyspieszają regenerację i poprawiają jakość życia. Korzystamy z najnowszych osiągnięć fizjoterapii, łącząc wiedzę medyczną z innowacyjnymi rozwiązaniami, aby zapewnić Ci najlepsze efekty."
            />

            <div className="flex justify-center space-x-6">
              <TextContainer
                header="Profesjonalna opieka"
                imgSrc="/letter-p.png"
                text="Twoje zdrowie jest dla nas priorytetem, dlatego zapewniamy kompleksową i rzetelną opiekę na każdym etapie terapii. Dzięki holistycznemu podejściu nasz doświadczony zespół fizjoterapeutów dba o Twój komfort, bezpieczeństwo i maksymalną skuteczność leczenia. "
              />
              <TextContainer
                header="Fizjoterapia dopasowana do Ciebie"
                imgSrc="/letter-f.png"
                text="Stawiamy na nowoczesne, skuteczne i sprawdzone techniki terapeutyczne, które przyspieszają regenerację i poprawiają jakość życia. Korzystamy z najnowszych osiągnięć fizjoterapii, łącząc wiedzę medyczną z innowacyjnymi rozwiązaniami, aby zapewnić Ci najlepsze efekty."
              />
            </div>
          </div>
        </div>
        <div className="w-1/3 h-full absolute top-6 -left-16 overflow-hidden scale-x-[-1] opacity-75 mobile:opacity-0 mobile-xs:opacity-0">
          <Image src="/krystian_thumb.png" alt="krystian-thumb" fill />
        </div>
      </div>
    </div>
  );
};

export default WhyIPF;
