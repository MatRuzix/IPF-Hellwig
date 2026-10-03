import physiotherapists from "@/lib/data/physiotherapists";
import { krystianReviews, martaReviews } from "@/lib/data/reviews";
import PhotoTextContainer from "./PhotoTextContainer";

export default function OurTeam() {
  return (
    <section id="our-team" className="bg-slate-100 pb-14 sm:pb-20">
      <div className="site-container">
        <h2 className="section-heading mb-8 text-slate-800 sm:mb-10">Poznaj nasz zespół</h2>
        <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-8">{physiotherapists.map((person, index) => <PhotoTextContainer key={person.name} {...person} reviews={index === 0 ? krystianReviews : martaReviews} />)}</div>
      </div>
    </section>
  );
}
