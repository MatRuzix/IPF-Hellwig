import Image from "next/image";

import TextContainer from "./TextContainer";

const WhyIPF = () => {
  return (
    <div
      className="flex text-6xl w-full h-[calc(100vh-144px)] bg-slate-100 space-y-6 relative pb-5"
      id="why-us"
    >
      <div className="flex w-full h-full items-center overflow-hidden absolute z-[11]">
        <div className="flex flex-col w-full absolute inset-0 m-auto trasn z-10 items-center space-y-4 py-6">
          <div className="my-[1%]">
            Dlaczego <span className="text-blue-900">IPF</span>?
          </div>
          <div className="flex w-full h-full flex-col justify-center items-center space-y-6 mx-4">
            <TextContainer
              header="Innowacyjne metody leczenia"
              imgSrc="/letter-i.png"
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
        <div className="w-1/3 h-full absolute -left-2 top-10 scale-[125%] overflow-hidden scale-x-[-1] opacity-85">
          <Image src="/krystian_thumb.png" alt="krystian-thumb" fill />
        </div>
      </div>
      <div className="absolute w-full h-full bg-gradient-to-b from-transparent from-[82%] to-[93%] to-slate-100 z-[11] pointer-events-none" />
    </div>
  );
};

export default WhyIPF;
