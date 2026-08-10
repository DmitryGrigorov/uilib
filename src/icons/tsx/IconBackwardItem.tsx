import * as React from "react";
import { IconStyled } from "../styles";
const IconBackwardItem = ({
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 14.5H5C4.17157 14.5 3.5 15.1716 3.5 16V19C3.5 19.8284 4.17157 20.5 5 20.5H8C8.82843 20.5 9.5 19.8284 9.5 19V16C9.5 15.1716 8.82843 14.5 8 14.5ZM5 13C3.34315 13 2 14.3431 2 16V19C2 20.6569 3.34315 22 5 22H8C9.65685 22 11 20.6569 11 19V16C11 14.3431 9.65685 13 8 13H5Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19 3.5H16C15.1716 3.5 14.5 4.17157 14.5 5V8C14.5 8.82843 15.1716 9.5 16 9.5H19C19.8284 9.5 20.5 8.82843 20.5 8V5C20.5 4.17157 19.8284 3.5 19 3.5ZM16 2C14.3431 2 13 3.34315 13 5V8C13 9.65685 14.3431 11 16 11H19C20.6569 11 22 9.65685 22 8V5C22 3.34315 20.6569 2 19 2H16Z"
          fill="currentColor"
        />
        <path
          d="M11.5 6.75C11.5 6.33579 11.1642 6 10.75 6H10C7.79086 6 6 7.79086 6 10V13.25C6 13.6642 6.33579 14 6.75 14C7.16421 14 7.5 13.6642 7.5 13.25V10C7.5 8.61929 8.61929 7.5 10 7.5H10.75C11.1642 7.5 11.5 7.16421 11.5 6.75Z"
          fill="currentColor"
        />
        <path
          d="M17.25 10C16.8358 10 16.5 10.3358 16.5 10.75V14C16.5 15.3807 15.3807 16.5 14 16.5H13.25C12.8358 16.5 12.5 16.8358 12.5 17.25C12.5 17.6642 12.8358 18 13.25 18H14C16.2091 18 18 16.2091 18 14V10.75C18 10.3358 17.6642 10 17.25 10Z"
          fill="currentColor"
        />
      </svg>
    }
  </IconStyled>
);
export default IconBackwardItem;
