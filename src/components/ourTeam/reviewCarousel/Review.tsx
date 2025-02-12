import React from "react";
import clsx from "clsx";

import Rating from "@mui/material/Rating";

type ReviewProps = {
  rating: number;
  name: string;
  review: string;
  className?: string;
};

const Review: React.FC<ReviewProps> = ({ rating, name, review, className }) => {
  return (
    <div
      className={clsx(
        "flex flex-col items-center py-3 bg-white/70 px-3 rounded-lg leading-4 text-base shadow-lg opacity-80 max-h-40 overflow-hidden",
        className
      )}
    >
      <Rating className="mb-2" value={rating} readOnly />
      <p className="mb-2 text-sm text-znanylekarz font-bold">{name}</p>
      <p className="text-[0.5rem]">{review}</p>
    </div>
  );
};

export default Review;
