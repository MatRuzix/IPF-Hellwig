import Rating from "@mui/material/Rating";
import type { RatingData } from "../PhotoTextContainer";

export default function Review({ rating, name, review }: RatingData) {
  return (
    <figure className="rounded-xl bg-slate-50 p-5">
      <Rating value={rating} readOnly size="small" getLabelText={(value) => "Ocena: " + value + " na 5"} />
      <blockquote className="mt-3 text-sm leading-6 text-slate-600">{review}</blockquote>
      <figcaption className="mt-3 text-sm font-semibold text-teal-700">{name}</figcaption>
    </figure>
  );
}
