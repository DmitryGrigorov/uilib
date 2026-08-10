import * as React from "react";
import { IconStyled } from "../styles";
const IconAlignVertically = ({
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
          d="M12 23C12.4142 23 12.75 22.6642 12.75 22.25V19.75C12.75 19.3358 12.4142 19 12 19C11.5858 19 11.25 19.3358 11.25 19.75V22.25C11.25 22.6642 11.5858 23 12 23Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 5C12.4142 5 12.75 4.66421 12.75 4.25V1.75C12.75 1.33579 12.4142 1 12 1C11.5858 1 11.25 1.33579 11.25 1.75V4.25C11.25 4.66421 11.5858 5 12 5Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 14.5C12.4142 14.5 12.75 14.1642 12.75 13.75V10.75C12.75 10.3358 12.4142 10 12 10C11.5858 10 11.25 10.3358 11.25 10.75V13.75C11.25 14.1642 11.5858 14.5 12 14.5Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 18.75H9C8.17157 18.75 7.5 18.0784 7.5 17.25V16.25C7.5 15.4216 8.17157 14.75 9 14.75H15C15.8284 14.75 16.5 15.4216 16.5 16.25V17.25C16.5 18.0784 15.8284 18.75 15 18.75ZM9 20.25C7.34315 20.25 6 18.9069 6 17.25V16.25C6 14.5931 7.34315 13.25 9 13.25H15C16.6569 13.25 18 14.5931 18 16.25V17.25C18 18.9069 16.6569 20.25 15 20.25H9Z"
          fill="currentColor"
        />
        <path
          d="M6 9.75H18C18.8284 9.75 19.5 9.07843 19.5 8.25V7.25C19.5 6.42157 18.8284 5.75 18 5.75H17.25C16.8358 5.75 16.5 5.41421 16.5 5C16.5 4.58579 16.8358 4.25 17.25 4.25H18C19.6569 4.25 21 5.59315 21 7.25V8.25C21 9.90685 19.6569 11.25 18 11.25H6C4.34315 11.25 3 9.90685 3 8.25V7.25C3 5.59315 4.34315 4.25 6 4.25H13.75C14.1642 4.25 14.5 4.58579 14.5 5C14.5 5.41421 14.1642 5.75 13.75 5.75H6C5.17157 5.75 4.5 6.42157 4.5 7.25V8.25C4.5 9.07843 5.17157 9.75 6 9.75Z"
          fill="currentColor"
        />
      </svg>
    }
  </IconStyled>
);
export default IconAlignVertically;
