import TeamDesContainer from "./TeamDesContainer";
import physiotherapists from "@/lib/data/physiotherapists";

const OurTeam = () => {
  return (
    <div
      className="flex flex-col items-center text-6xl w-full h-[calc(100vh-144px)] space-y-6 bg-slate-100 pb-8 px-10"
      id="team"
    >
      <div className="my-[2%]">Nasz zespół</div>
      <div className="flex justify-around w-full h-full">
        <TeamDesContainer
          imageSrc={physiotherapists[0].imageSrc}
          name={physiotherapists[0].name}
          description={physiotherapists[0].description}
          description2={physiotherapists[1].description2}
        />
        <TeamDesContainer
          imageSrc={physiotherapists[1].imageSrc}
          name={physiotherapists[1].name}
          description={physiotherapists[1].description}
          description2={physiotherapists[1].description2}
        />
      </div>
    </div>
  );
};

export default OurTeam;
