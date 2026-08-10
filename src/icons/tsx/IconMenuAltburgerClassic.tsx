import * as React from "react";
import { IconStyled } from "../styles";
const IconMenuAltburgerClassic = ({
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
          d="M1.25 14.5C1.25 14.9142 1.58579 15.25 2 15.25H4.25C4.66421 15.25 5 14.9142 5 14.5V14.5C5 14.0858 4.66421 13.75 4.25 13.75H2C1.58579 13.75 1.25 14.0858 1.25 14.5Z"
          fill="currentColor"
        />
        <path
          d="M6.5 14.5C6.5 14.0858 6.83579 13.75 7.25 13.75H22C22.4142 13.75 22.75 14.0858 22.75 14.5C22.75 14.9142 22.4142 15.25 22 15.25H7.25C6.83579 15.25 6.5 14.9142 6.5 14.5V14.5Z"
          fill="currentColor"
        />
        <path
          d="M2 10.25C1.58579 10.25 1.25 9.91421 1.25 9.5C1.25 9.08579 1.58579 8.75 2 8.75H22C22.4142 8.75 22.75 9.08579 22.75 9.5C22.75 9.91421 22.4142 10.25 22 10.25H2Z"
          fill="currentColor"
        />
      </svg>
    }
  </IconStyled>
);
export default IconMenuAltburgerClassic;
