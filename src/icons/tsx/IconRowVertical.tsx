import * as React from "react";
import { IconStyled } from "../styles";
const IconRowVertical = ({
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
          d="M5 2.5H8C8.82843 2.5 9.5 3.17157 9.5 4V20C9.5 20.8284 8.82843 21.5 8 21.5H5C4.17157 21.5 3.5 20.8284 3.5 20V9.75C3.5 9.33579 3.16421 9 2.75 9C2.33579 9 2 9.33579 2 9.75V20C2 21.6569 3.34315 23 5 23H8C9.65685 23 11 21.6569 11 20V4C11 2.34315 9.65685 1 8 1H5C3.34315 1 2 2.34315 2 4V5.25C2 5.66421 2.33579 6 2.75 6C3.16421 6 3.5 5.66421 3.5 5.25V4C3.5 3.17157 4.17157 2.5 5 2.5Z"
          fill="currentColor"
        />
        <path
          d="M16 2.5H19C19.8284 2.5 20.5 3.17157 20.5 4V14.25C20.5 14.6642 20.8358 15 21.25 15C21.6642 15 22 14.6642 22 14.25V4C22 2.34315 20.6569 1 19 1H16C14.3431 1 13 2.34315 13 4V20C13 21.6569 14.3431 23 16 23H19C20.6569 23 22 21.6569 22 20V18.75C22 18.3358 21.6642 18 21.25 18C20.8358 18 20.5 18.3358 20.5 18.75V20C20.5 20.8284 19.8284 21.5 19 21.5H16C15.1716 21.5 14.5 20.8284 14.5 20V4C14.5 3.17157 15.1716 2.5 16 2.5Z"
          fill="currentColor"
        />
      </svg>
    }
  </IconStyled>
);
export default IconRowVertical;
