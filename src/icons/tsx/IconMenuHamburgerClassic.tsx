import * as React from "react";
import { IconStyled } from "../styles";
const IconMenuHamburgerClassic = ({
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
          d="M1.25 7C1.25 6.58579 1.58579 6.25 2 6.25H22C22.4142 6.25 22.75 6.58579 22.75 7C22.75 7.41421 22.4142 7.75 22 7.75H2C1.58579 7.75 1.25 7.41421 1.25 7Z"
          fill="currentColor"
        />
        <path
          d="M1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H4.25C4.66421 11.25 5 11.5858 5 12V12C5 12.4142 4.66421 12.75 4.25 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12Z"
          fill="currentColor"
        />
        <path
          d="M6.5 12C6.5 12.4142 6.83579 12.75 7.25 12.75H22C22.4142 12.75 22.75 12.4142 22.75 12C22.75 11.5858 22.4142 11.25 22 11.25H7.25C6.83579 11.25 6.5 11.5858 6.5 12V12Z"
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
export default IconMenuHamburgerClassic;
