import * as React from "react";
import { IconStyled } from "../styles";
const IconImport3 = ({
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
          d="M11.75 16.5C11.3358 16.5 11 16.1642 11 15.75L11 8.75C11 8.33579 11.3358 8 11.75 8C12.1642 8 12.5 8.33579 12.5 8.75L12.5 15.75C12.5 16.1642 12.1642 16.5 11.75 16.5Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.75 6.5C11.3358 6.5 11 6.16421 11 5.75V2.75C11 2.33579 11.3358 2 11.75 2C12.1642 2 12.5 2.33579 12.5 2.75V5.75C12.5 6.16421 12.1642 6.5 11.75 6.5Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.71967 12.7197C8.01256 12.4268 8.48744 12.4268 8.78033 12.7197L10.8661 14.8055C11.3543 15.2936 12.1457 15.2936 12.6339 14.8055L14.7197 12.7197C15.0126 12.4268 15.4874 12.4268 15.7803 12.7197C16.0732 13.0126 16.0732 13.4874 15.7803 13.7803L13.6945 15.8661C12.6206 16.9401 10.8794 16.9401 9.80546 15.8661L7.71967 13.7803C7.42678 13.4874 7.42678 13.0126 7.71967 12.7197Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.75 13C20.1642 13 20.5 13.3358 20.5 13.75V15.75C20.5 18.9256 17.9256 21.5 14.75 21.5H8.75C5.57436 21.5 3 18.9256 3 15.75L3 13.75C3 13.3358 3.33579 13 3.75 13C4.16421 13 4.5 13.3358 4.5 13.75L4.5 15.75C4.5 18.0972 6.40279 20 8.75 20H14.75C17.0972 20 19 18.0972 19 15.75V13.75C19 13.3358 19.3358 13 19.75 13Z"
          fill="currentColor"
        />
      </svg>
    }
  </IconStyled>
);
export default IconImport3;
