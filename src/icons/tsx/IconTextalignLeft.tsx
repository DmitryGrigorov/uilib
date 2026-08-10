import * as React from "react";
import { IconStyled } from "../styles";
const IconTextalignLeft = ({
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
          d="M2 17.75C2 17.3358 2.33579 17 2.75 17H5.50003C5.91425 17 6.25003 17.3358 6.25003 17.75C6.25003 18.1642 5.91425 18.5 5.50003 18.5H2.75C2.33579 18.5 2 18.1642 2 17.75Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.00003 5.75C2.00003 5.33579 2.33582 5 2.75003 5H15.5C15.9142 5 16.25 5.33579 16.25 5.75C16.25 6.16421 15.9142 6.5 15.5 6.5H2.75003C2.33582 6.5 2.00003 6.16421 2.00003 5.75Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.75 5.75C17.75 5.33579 18.0858 5 18.5 5H22.25C22.6642 5 23 5.33579 23 5.75C23 6.16421 22.6642 6.5 22.25 6.5H18.5C18.0858 6.5 17.75 6.16421 17.75 5.75Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.00003 11.75C2.00003 11.3358 2.33582 11 2.75003 11H12.5C12.9142 11 13.25 11.3358 13.25 11.75C13.25 12.1642 12.9142 12.5 12.5 12.5H2.75003C2.33582 12.5 2.00003 12.1642 2.00003 11.75Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.75003 17.75C7.75003 17.3358 8.08582 17 8.50003 17H18.5C18.9142 17 19.25 17.3358 19.25 17.75C19.25 18.1642 18.9142 18.5 18.5 18.5H8.50003C8.08582 18.5 7.75003 18.1642 7.75003 17.75Z"
          fill="currentColor"
        />
      </svg>
    }
  </IconStyled>
);
export default IconTextalignLeft;
