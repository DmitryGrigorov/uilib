import * as React from "react";
import { IconStyled } from "../styles";
const IconLogin = ({
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
          d="M16.5 11.75C16.5 12.1642 16.1642 12.5 15.75 12.5L8.75 12.5C8.33579 12.5 8 12.1642 8 11.75C8 11.3358 8.33579 11 8.75 11L15.75 11C16.1642 11 16.5 11.3358 16.5 11.75Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.5 11.75C6.5 12.1642 6.16421 12.5 5.75 12.5H2.75C2.33579 12.5 2 12.1642 2 11.75C2 11.3358 2.33579 11 2.75 11H5.75C6.16421 11 6.5 11.3358 6.5 11.75Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.7197 15.7803C12.4268 15.4874 12.4268 15.0126 12.7197 14.7197L14.8055 12.6339C15.2937 12.1457 15.2937 11.3543 14.8055 10.8661L12.7197 8.78033C12.4268 8.48744 12.4268 8.01256 12.7197 7.71967C13.0126 7.42678 13.4875 7.42678 13.7804 7.71967L15.8662 9.80546C16.9401 10.8794 16.9401 12.6206 15.8662 13.6945L13.7804 15.7803C13.4875 16.0732 13.0126 16.0732 12.7197 15.7803Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13 3.75C13 3.33579 13.3358 3 13.75 3H15.75C18.9256 3 21.5 5.57436 21.5 8.75V14.75C21.5 17.9256 18.9256 20.5 15.75 20.5H13.75C13.3358 20.5 13 20.1642 13 19.75C13 19.3358 13.3358 19 13.75 19H15.75C18.0972 19 20 17.0972 20 14.75V8.75C20 6.40279 18.0972 4.5 15.75 4.5H13.75C13.3358 4.5 13 4.16421 13 3.75Z"
          fill="currentColor"
        />
      </svg>
    }
  </IconStyled>
);
export default IconLogin;
