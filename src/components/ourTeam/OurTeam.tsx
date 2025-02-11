import physiotherapists from "@/lib/data/physiotherapists";
import PhotoTextContainer from "./PhotoTextContainer";

const OurTeam = () => {
  const team = physiotherapists;

  return (
    <div
      className="flex flex-col items-center text-6xl w-full h-[calc(100vh-144px)] space-y-6 bg-slate-100  pb-2 px-10 overflow-hidden"
      id="team"
    >
      <div className="mt-10">Nasz zespół</div>
      <div className="flex w-full h-full justify-center space-x-[10%]">
        <PhotoTextContainer
          name={team[0].name}
          imgSrc={team[0].imgSrc}
          paragraph1={team[0].paragraph1}
          paragraph2={team[0].paragraph2}
        />
        <PhotoTextContainer
          name={team[1].name}
          imgSrc={team[1].imgSrc}
          paragraph1={team[1].paragraph1}
          paragraph2={team[1].paragraph2}
        />
      </div>
    </div>
  );
};

export default OurTeam;
