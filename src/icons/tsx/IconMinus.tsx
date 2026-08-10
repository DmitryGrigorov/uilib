import * as React from "react";
import { IconStyled } from "../styles";
const IconMinus = ({
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
          d="M5.75 11.75C5.75 11.3358 5.41421 11 5 11H2.75C2.33579 11 2 11.3358 2 11.75C2 12.1642 2.33579 12.5 2.75 12.5H5C5.41421 12.5 5.75 12.1642 5.75 11.75V11.75Z"
          fill="currentColor"
        />
        <path
          d="M7.75 11.75C7.75 12.1642 8.08579 12.5 8.5 12.5H20.5C20.9142 12.5 21.25 12.1642 21.25 11.75C21.25 11.3358 20.9142 11 20.5 11H8.5C8.08579 11 7.75 11.3358 7.75 11.75V11.75Z"
          fill="currentColor"
        />
      </svg>
    }
  </IconStyled>
);
export default IconMinus;
