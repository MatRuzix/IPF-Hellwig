import { PhotoTextContainerProps } from "@/components/ourTeam/PhotoTextContainer";
import { krystianReviews, martaReviews } from "@/lib/data/reviews";

const physiotherapists: PhotoTextContainerProps[] = [
  {
    name: "mgr Krystian Hellwig",
    imgSrc: "/krystian_transp_back.png",

    paragraph1:
      "Absolwent AMISNS: Akademia Medyczna w Elblągu oraz Olsztyńskiej Szkoły Wyższej uzyskując tytuł magistra fizjoterapii. Aktualnie zwiększający kwalifikacje w Chiropractic School of Poland.",
    paragraph2:
      "Freak fizjoterapeutyczny podchodzący niekonwencjolalnie do pracy z pacjentem by sprostać jednemu najważniejszemu zadaniu- zlikwidowaniu bólu. Nie trzymający się sztywno ram i doktryn, patrzący zawsze holistycznie na pacjenta by nie tylko usprawnić jego aparat ruchu, ale zmienić myślenie pacjenta. By pozbyć się bólu musimy zrozumieć organizm.",
    reviews: krystianReviews,
  },

  {
    name: "mgr Marta Hellwig",
    imgSrc: "/marta_transp_back.png",
    paragraph1:
      "Magister fizjoterapii, absolwentka Wyższej Szkoły Zdrowia w Gdańsku oraz Olsztyńskiej Szkoły Wyższej, specjalizuje się w osteopatii i masażu, a także wykorzystuje szeroki wachlarz technik fizjoterapeutycznych.",
    paragraph2:
      "Dzięki bogatej wiedzy i doświadczeniu skutecznie pomaga pacjentom w łagodzeniu bólu, poprawie mobilności i odzyskiwaniu pełnej sprawności. Jej holistyczne podejście do terapii sprawia, że każdy pacjent otrzymuje indywidualnie dopasowaną opiekę, łączącą nowoczesne metody rehabilitacji z troską o zdrowie i dobre samopoczucie.",
    reviews: martaReviews,
  },
];

export default physiotherapists;
