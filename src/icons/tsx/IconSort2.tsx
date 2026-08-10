import * as React from "react";
import { IconStyled } from "../styles";
const IconSort2 = ({
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
          d="M5 13.75C5 13.3358 5.33579 13 5.75 13H11.75C12.1642 13 12.5 13.3358 12.5 13.75C12.5 14.1642 12.1642 14.5 11.75 14.5H5.75C5.33579 14.5 5 14.1642 5 13.75Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 17.75C5 17.3358 5.33579 17 5.75 17H8.75C9.16421 17 9.5 17.3358 9.5 17.75C9.5 18.1642 9.16421 18.5 8.75 18.5H5.75C5.33579 18.5 5 18.1642 5 17.75Z"
          fill="currentColor"
        />
        <path
          d="M8.25 9.75C8.25 9.33579 7.91421 9 7.5 9H5.75C5.33579 9 5 9.33579 5 9.75C5 10.1642 5.33579 10.5 5.75 10.5H7.5C7.91421 10.5 8.25 10.1642 8.25 9.75Z"
          fill="currentColor"
        />
        <path
          d="M9.25 9.75C9.25 10.1642 9.58579 10.5 10 10.5H14.75C15.1642 10.5 15.5 10.1642 15.5 9.75C15.5 9.33579 15.1642 9 14.75 9H10C9.58579 9 9.25 9.33579 9.25 9.75Z"
          fill="currentColor"
        />
        <path
          d="M14.25 5.75C14.25 5.33579 13.9142 5 13.5 5H5.75C5.33579 5 5 5.33579 5 5.75C5 6.16421 5.33579 6.5 5.75 6.5H13.5C13.9142 6.5 14.25 6.16421 14.25 5.75Z"
          fill="currentColor"
        />
        <path
          d="M15.25 5.75C15.25 6.16421 15.5858 6.5 16 6.5H17.75C18.1642 6.5 18.5 6.16421 18.5 5.75C18.5 5.33579 18.1642 5 17.75 5H16C15.5858 5 15.25 5.33579 15.25 5.75Z"
          fill="currentColor"
        />
      </svg>
    }
  </IconStyled>
);
export default IconSort2;
