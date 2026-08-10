import * as React from "react";
import { IconStyled } from "../styles";
const IconGrid3 = ({
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
          d="M8.5 13.75C8.5 12.2312 9.73122 11 11.25 11H21.75C22.1642 11 22.5 11.3358 22.5 11.75C22.5 12.1642 22.1642 12.5 21.75 12.5H11.25C10.5596 12.5 10 13.0596 10 13.75V21.25C10 21.6642 9.66421 22 9.25 22C8.83579 22 8.5 21.6642 8.5 21.25V13.75Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.5 9.75C8.5 11.2688 9.73122 12.5 11.25 12.5H21.75C22.1642 12.5 22.5 12.1642 22.5 11.75C22.5 11.3358 22.1642 11 21.75 11H11.25C10.5596 11 10 10.4404 10 9.75V5.75C10 5.33579 9.66421 5 9.25 5C8.83579 5 8.5 5.33579 8.5 5.75V9.75Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.75 2.36805C5.75 1.83836 5.235 1.46163 4.76025 1.69656C2.53212 2.79912 1 5.09564 1 7.75V15.75C1 19.4779 4.02208 22.5 7.75 22.5H15.75C19.4779 22.5 22.5 19.4779 22.5 15.75V7.75C22.5 4.02208 19.4779 1 15.75 1H11.25C9.73122 1 8.5 2.23122 8.5 3.75V21H7.75C4.85051 21 2.5 18.6495 2.5 15.75V7.75C2.5 5.74576 3.62309 4.00384 5.27427 3.11923C5.55502 2.96881 5.75 2.68656 5.75 2.36805ZM15.75 21H10V3.75C10 3.05964 10.5596 2.5 11.25 2.5H15.75C18.6495 2.5 21 4.85051 21 7.75V15.75C21 18.6495 18.6495 21 15.75 21Z"
          fill="currentColor"
        />
      </svg>
    }
  </IconStyled>
);
export default IconGrid3;
