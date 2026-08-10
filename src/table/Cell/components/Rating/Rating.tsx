import React, { useState } from "react";
import { LIGHT_THEME } from "@dmitrygrigorov/components";
import { LabelContainer, MainContainer, StarIcon, Stars } from "./style";

import { IRatingProps } from "./types";

const Rating = ({ viewType, sizeRating }: IRatingProps): JSX.Element => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number | null>(null);

  return (
    <MainContainer>
      {[...Array(5)].map((_star, i): JSX.Element => {
        const ratingVal = i + 1;

        let clickTimeout: null | ReturnType<typeof setTimeout> = null;

        const handleClick = (): void => {
          if (clickTimeout !== null) {
            setRating(0);
            setHover(null);
            clearTimeout(clickTimeout);
            clickTimeout = null;
          } else {
            clickTimeout = setTimeout(() => {
              setRating(ratingVal);
              clearTimeout(Number(clickTimeout));
              clickTimeout = null;
            }, 200);
          }
        };

        return (
          <LabelContainer
            key="star"
            onMouseEnter={() => setHover(ratingVal)}
            onMouseLeave={() => setHover(null)}>
            <Stars type="radio" name="rating" value={ratingVal} />
            <StarIcon
              sizeRating={sizeRating}
              hover={hover}
              rating={rating}
              currentRating={ratingVal}
              viewType={viewType}
              onClick={handleClick}
            />
          </LabelContainer>
        );
      })}
    </MainContainer>
  );
};

export default Rating;

Rating.defaultProps = {
  theme: LIGHT_THEME
};
