import * as React from "react";
import { IconStyled } from "../styles";
const IconMenuFriesClassic = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <IconStyled className={className}>
    {
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          d="M5 7C5 6.58579 4.66421 6.25 4.25 6.25H2C1.58579 6.25 1.25 6.58579 1.25 7C1.25 7.41421 1.58579 7.75 2 7.75H4.25C4.66421 7.75 5 7.41421 5 7V7Z"
          fill="currentColor"
        />
        <path
          d="M6.5 7C6.5 7.41421 6.83579 7.75 7.25 7.75H22C22.4142 7.75 22.75 7.41421 22.75 7C22.75 6.58579 22.4142 6.25 22 6.25H7.25C6.83579 6.25 6.5 6.58579 6.5 7V7Z"
          fill="currentColor"
        />
        <path
          d="M10.25 12C10.25 11.5858 10.5858 11.25 11 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H11C10.5858 12.75 10.25 12.4142 10.25 12Z"
          fill="currentColor"
        />
        <path
          d="M2 16.25C1.58579 16.25 1.25 16.5858 1.25 17C1.25 17.4142 1.58579 17.75 2 17.75H22C22.4142 17.75 22.75 17.4142 22.75 17C22.75 16.5858 22.4142 16.25 22 16.25H2Z"
          fill="currentColor"
        />
      </svg>
    }
  </IconStyled>
);
export default IconMenuFriesClassic;
