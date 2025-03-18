import physiotherapists from "@/lib/data/physiotherapists";
import PhotoTextContainer from "./PhotoTextContainer";
import MobileTextContainer from "./MobileTextContainer";
import { krystianReviews, martaReviews } from "@/lib/data/reviews";

const OurTeam = () => {
  const team = physiotherapists;
  const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );

  return (
    <div
      className="flex flex-col items-center text-4xl pb-3 mobile-xs:text-2xl w-full h-[calc(100vh-144px)] mobile-xs:h-auto mobile:h-auto mobile-xs:space-y-3 bg-slate-100 px-10 mobile-xs:px-5 overflow-hidden mobile-xs:overflow-visible"
      id="team"
    >
      <div className="mt-10 z-40 mobile-xs:z-0 mobile:z-0 translate-y-[200%] mobile:translate-y-6 mobile-xs:translate-y-6 text-slate-600">
        Nasz zespół
      </div>
      <div className="h-full w-full -translate-y-10">
        {vw > 640 && (
          <div className="flex w-full h-full justify-center space-x-[20%]">
            <PhotoTextContainer
              name={team[0].name}
              imgSrc={team[0].imgSrc}
              paragraph1={team[0].paragraph1}
              paragraph2={team[0].paragraph2}
              reviews={team[0].reviews}
            />
            <PhotoTextContainer
              name={team[1].name}
              imgSrc={team[1].imgSrc}
              paragraph1={team[1].paragraph1}
              paragraph2={team[1].paragraph2}
              reviews={team[1].reviews}
            />
          </div>
        )}
        {vw <= 640 && (
          <div className="flex flex-col w-full h-full justify-center space-y-6 mb-5">
            <MobileTextContainer
              name={team[0].name}
              imgSrc={team[0].imgSrc}
              paragraph1={team[0].paragraph1}
              paragraph2={team[0].paragraph2}
              reviews={krystianReviews}
            />
            <MobileTextContainer
              name={team[1].name}
              imgSrc={team[1].imgSrc}
              paragraph1={team[1].paragraph1}
              paragraph2={team[1].paragraph2}
              reviews={martaReviews}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default OurTeam;
