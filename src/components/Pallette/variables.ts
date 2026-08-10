export interface IMedia {
  mobile: string;
  tablet: string;
  desktopM: string;
  desktopL: string;
  desktopXL: string;
}

export interface IProps {
  children: any;
  color: string;
  onClick?: () => void;
}

interface IInnerShadows {
  shadowLarge: string;
  shadowSmall: string;
}

export interface Isizes {
  maxWidth: string;
  cardWidth: string;
  borderRadius: string;
}

export const MEDIA: IMedia = {
  mobile: "max-width: 529px",
  tablet: "max-width: 949px",
  desktopM: "max-width: 1024px",
  desktopL: "max-width: 1536px",
  desktopXL: "min-width: 1536px"
};

export const INNERSHADOWS: IInnerShadows = {
  shadowLarge: "0 0 0 1000px",
  shadowSmall: "0 0 0 1px"
};

export const sizeS: Isizes = {
  maxWidth: "1280px",
  cardWidth: "936px",
  borderRadius: "2px"
};

export const SUPER_PIXEL = 4;
