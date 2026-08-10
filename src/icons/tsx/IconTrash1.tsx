import * as React from "react";
import { IconStyled } from "../styles";
const IconTrash1 = ({
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
          d="M9 0.75C9.41421 0.75 9.75 1.08579 9.75 1.5V3.5C9.75 4.74264 10.7574 5.75 12 5.75C13.2426 5.75 14.25 4.74264 14.25 3.5V1.5C14.25 1.08579 14.5858 0.75 15 0.75C15.4142 0.75 15.75 1.08579 15.75 1.5V3.5C15.75 5.57107 14.0711 7.25 12 7.25C9.92893 7.25 8.25 5.57107 8.25 3.5V1.5C8.25 1.08579 8.58579 0.75 9 0.75Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13 1.5H11C7.41015 1.5 4.5 4.41015 4.5 8V8.5H19.5V8C19.5 4.41015 16.5899 1.5 13 1.5ZM11 0C6.58172 0 3 3.58172 3 8V10H21V8C21 3.58172 17.4183 0 13 0H11Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 10H4C3.72386 10 3.5 10.2239 3.5 10.5C3.5 10.7761 3.72386 11 4 11H20C20.2761 11 20.5 10.7761 20.5 10.5C20.5 10.2239 20.2761 10 20 10ZM4 8.5C2.89543 8.5 2 9.39543 2 10.5C2 11.6046 2.89543 12.5 4 12.5H20C21.1046 12.5 22 11.6046 22 10.5C22 9.39543 21.1046 8.5 20 8.5H4Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 11.75C4.41421 11.75 4.75 12.0858 4.75 12.5V18.5C4.75 20.2949 6.20507 21.75 8 21.75H16C17.7949 21.75 19.25 20.2949 19.25 18.5V15C19.25 14.5858 19.5858 14.25 20 14.25C20.4142 14.25 20.75 14.5858 20.75 15V18.5C20.75 21.1234 18.6234 23.25 16 23.25H8C5.37665 23.25 3.25 21.1234 3.25 18.5V12.5C3.25 12.0858 3.58579 11.75 4 11.75Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 18H10C9.72386 18 9.5 18.2239 9.5 18.5C9.5 18.7761 9.72386 19 10 19H14C14.2761 19 14.5 18.7761 14.5 18.5C14.5 18.2239 14.2761 18 14 18ZM10 16.5C8.89543 16.5 8 17.3954 8 18.5C8 19.6046 8.89543 20.5 10 20.5H14C15.1046 20.5 16 19.6046 16 18.5C16 17.3954 15.1046 16.5 14 16.5H10Z"
          fill="currentColor"
        />
      </svg>
    }
  </IconStyled>
);
export default IconTrash1;
