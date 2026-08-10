import * as React from "react";
import { IconStyled } from "../styles";
const IconDocumentUpload = ({
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
          d="M6.75 2.5C4.95507 2.5 3.5 3.95507 3.5 5.75V17.75C3.5 19.5449 4.95507 21 6.75 21H16.75C18.5449 21 20 19.5449 20 17.75V10H15.75C13.6789 10 12 8.32107 12 6.25V2.77158C12 1.1868 13.9382 0.418156 15.0244 1.57219L20.7526 7.6584C21.2327 8.16852 21.5 8.84263 21.5 9.54315V17.75C21.5 20.3734 19.3734 22.5 16.75 22.5H6.75C4.12665 22.5 2 20.3734 2 17.75V5.75C2 3.12665 4.12665 1 6.75 1H10.25C10.6642 1 11 1.33579 11 1.75C11 2.16421 10.6642 2.5 10.25 2.5H6.75ZM19.4848 8.5L13.932 2.60024C13.7769 2.43537 13.5 2.54518 13.5 2.77158V6.25C13.5 7.49264 14.5074 8.5 15.75 8.5H19.4848Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.25 11C8.83579 11 8.5 11.3358 8.5 11.75V17.75C8.5 18.1642 8.83579 18.5 9.25 18.5C9.66421 18.5 10 18.1642 10 17.75V11.75C10 11.3358 9.66421 11 9.25 11Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.71967 13.7803C7.01256 14.0732 7.48744 14.0732 7.78033 13.7803L9.07322 12.4874C9.17085 12.3898 9.32915 12.3898 9.42678 12.4874L10.7197 13.7803C11.0126 14.0732 11.4874 14.0732 11.7803 13.7803C12.0732 13.4874 12.0732 13.0126 11.7803 12.7197L10.4874 11.4268C9.80402 10.7434 8.69598 10.7434 8.01256 11.4268L6.71967 12.7197C6.42678 13.0126 6.42678 13.4874 6.71967 13.7803Z"
          fill="currentColor"
        />
      </svg>
    }
  </IconStyled>
);
export default IconDocumentUpload;
