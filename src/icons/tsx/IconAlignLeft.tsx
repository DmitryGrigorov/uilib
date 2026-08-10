import * as React from "react";
import { IconStyled } from "../styles";
const IconAlignLeft = ({
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
          d="M4 9.75C4 10.1642 4.33579 10.5 4.75 10.5H18.25C19.7688 10.5 21 9.26878 21 7.75V6.25C21 4.73122 19.7688 3.5 18.25 3.5H7.75C7.33579 3.5 7 3.83579 7 4.25C7 4.66421 7.33579 5 7.75 5H18.25C18.9404 5 19.5 5.55964 19.5 6.25V7.75C19.5 8.44036 18.9404 9 18.25 9H4.75C4.33579 9 4 9.33579 4 9.75Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 18.75C4 19.1642 4.33579 19.5 4.75 19.5H12.75C14.2688 19.5 15.5 18.2688 15.5 16.75V15.25C15.5 13.7312 14.2688 12.5 12.75 12.5H4.75C4.33579 12.5 4 12.8358 4 13.25C4 13.6642 4.33579 14 4.75 14H12.75C13.4404 14 14 14.5596 14 15.25V16.75C14 17.4404 13.4404 18 12.75 18H4.75C4.33579 18 4 18.3358 4 18.75Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.75 22.5C5.16421 22.5 5.5 22.1642 5.5 21.75V1.75C5.5 1.33579 5.16421 1 4.75 1C4.33579 1 4 1.33579 4 1.75V21.75C4 22.1642 4.33579 22.5 4.75 22.5Z"
          fill="currentColor"
        />
      </svg>
    }
  </IconStyled>
);
export default IconAlignLeft;
