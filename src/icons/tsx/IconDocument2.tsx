import * as React from "react";
import { IconStyled } from "../styles";
const IconDocument2 = ({
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
          d="M7 2.75C5.20507 2.75 3.75 4.20507 3.75 6V18C3.75 19.7949 5.20507 21.25 7 21.25H17C18.7949 21.25 20.25 19.7949 20.25 18V10.25H16C13.9289 10.25 12.25 8.57107 12.25 6.5V3.02158C12.25 1.4368 14.1882 0.668156 15.2744 1.82219L21.0026 7.9084C21.4827 8.41852 21.75 9.09263 21.75 9.79315V18C21.75 20.6234 19.6234 22.75 17 22.75H7C4.37665 22.75 2.25 20.6234 2.25 18V6C2.25 3.37665 4.37665 1.25 7 1.25H10.5C10.9142 1.25 11.25 1.58579 11.25 2C11.25 2.41421 10.9142 2.75 10.5 2.75H7ZM19.7348 8.75L14.182 2.85024C14.0269 2.68537 13.75 2.79518 13.75 3.02158V6.5C13.75 7.74264 14.7574 8.75 16 8.75H19.7348Z"
          fill="currentColor"
        />
      </svg>
    }
  </IconStyled>
);
export default IconDocument2;
