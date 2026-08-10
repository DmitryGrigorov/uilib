import * as React from "react";
import { IconStyled } from "../styles";
const IconAlignTop = ({
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
          d="M9.75 4C10.1642 4 10.5 4.33579 10.5 4.75L10.5 18.25C10.5 19.7688 9.26878 21 7.75 21H6.25C4.73122 21 3.5 19.7688 3.5 18.25L3.5 7.75C3.5 7.33579 3.83579 7 4.25 7C4.66421 7 5 7.33579 5 7.75L5 18.25C5 18.9404 5.55964 19.5 6.25 19.5H7.75C8.44036 19.5 9 18.9404 9 18.25L9 4.75C9 4.33579 9.33579 4 9.75 4Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.75 4C19.1642 4 19.5 4.33579 19.5 4.75V12.75C19.5 14.2688 18.2688 15.5 16.75 15.5H15.25C13.7312 15.5 12.5 14.2688 12.5 12.75V4.75C12.5 4.33579 12.8358 4 13.25 4C13.6642 4 14 4.33579 14 4.75V12.75C14 13.4404 14.5596 14 15.25 14H16.75C17.4404 14 18 13.4404 18 12.75V4.75C18 4.33579 18.3358 4 18.75 4Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.5 4.75C22.5 5.16421 22.1642 5.5 21.75 5.5L1.75 5.5C1.33579 5.5 1 5.16421 1 4.75C1 4.33579 1.33579 4 1.75 4L21.75 4C22.1642 4 22.5 4.33579 22.5 4.75Z"
          fill="currentColor"
        />
      </svg>
    }
  </IconStyled>
);
export default IconAlignTop;
