import * as React from "react";
import { IconStyled } from "../styles";
const IconTextalignCenter = ({
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
          d="M20.5 17.75C20.5 17.3358 20.1642 17 19.75 17H17.75C17.3358 17 17 17.3358 17 17.75C17 18.1642 17.3358 18.5 17.75 18.5H19.75C20.1642 18.5 20.5 18.1642 20.5 17.75Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23 5.75C23 5.33579 22.6642 5 22.25 5H9.25C8.83579 5 8.5 5.33579 8.5 5.75C8.5 6.16421 8.83579 6.5 9.25 6.5H22.25C22.6642 6.5 23 6.16421 23 5.75Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 5.75C7 5.33579 6.66421 5 6.25 5H2.75C2.33579 5 2 5.33579 2 5.75C2 6.16421 2.33579 6.5 2.75 6.5H6.25C6.66421 6.5 7 6.16421 7 5.75Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.5 11.75C18.5 11.3358 18.1642 11 17.75 11H7.75C7.33579 11 7 11.3358 7 11.75C7 12.1642 7.33579 12.5 7.75 12.5H17.75C18.1642 12.5 18.5 12.1642 18.5 11.75Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.5 17.75C15.5 17.3358 15.1642 17 14.75 17H5.25C4.83579 17 4.5 17.3358 4.5 17.75C4.5 18.1642 4.83579 18.5 5.25 18.5H14.75C15.1642 18.5 15.5 18.1642 15.5 17.75Z"
          fill="currentColor"
        />
      </svg>
    }
  </IconStyled>
);
export default IconTextalignCenter;
