export const ratingViewType = ["blue", "teal", "amber", "red"] as const;
export const buttonSize = ["l", "m"] as const;

export type TRatingViewType = (typeof ratingViewType)[number];

export type TRatingSize = (typeof buttonSize)[number];

export interface IRatingProps {
  viewType?: TRatingViewType;
  sizeRating?: TRatingSize;
}
