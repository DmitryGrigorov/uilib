import * as React from "react";
import { IconStyled } from "../styles";
const IconRowHorizontal = ({
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
          d="M6 2.75C6 2.33579 5.66421 2 5.25 2H4C2.34315 2 1 3.34315 1 5V8C1 9.65685 2.34315 11 4 11L20 11C21.6569 11 23 9.65685 23 8V5C23 3.34314 21.6569 2 20 2H9.75C9.33579 2 9 2.33579 9 2.75C9 3.16421 9.33579 3.5 9.75 3.5L20 3.5C20.8284 3.5 21.5 4.17157 21.5 5V8C21.5 8.82843 20.8284 9.5 20 9.5L4 9.5C3.17157 9.5 2.5 8.82843 2.5 8L2.5 5C2.5 4.17157 3.17157 3.5 4 3.5L5.25 3.5C5.66421 3.5 6 3.16421 6 2.75Z"
          fill="currentColor"
        />
        <path
          d="M2.5 19L2.5 16C2.5 15.1716 3.17157 14.5 4 14.5L20 14.5C20.8284 14.5 21.5 15.1716 21.5 16V19C21.5 19.8284 20.8284 20.5 20 20.5H18.75C18.3358 20.5 18 20.8358 18 21.25C18 21.6642 18.3358 22 18.75 22H20C21.6569 22 23 20.6569 23 19V16C23 14.3431 21.6569 13 20 13H4C2.34315 13 1 14.3431 1 16V19C1 20.6569 2.34315 22 4 22H14.25C14.6642 22 15 21.6642 15 21.25C15 20.8358 14.6642 20.5 14.25 20.5H4C3.17157 20.5 2.5 19.8284 2.5 19Z"
          fill="currentColor"
        />
      </svg>
    }
  </IconStyled>
);
export default IconRowHorizontal;
