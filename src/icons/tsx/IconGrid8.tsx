import * as React from "react";
import { IconStyled } from "../styles";
const IconGrid8 = ({
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
          d="M1 7.75C1 4.02208 4.02208 1 7.75 1C8.7165 1 9.5 1.7835 9.5 2.75V18.25C9.5 18.6642 9.16421 19 8.75 19C8.33579 19 8 18.6642 8 18.25V2.75C8 2.61193 7.88807 2.5 7.75 2.5C4.85051 2.5 2.5 4.85051 2.5 7.75V15.75C2.5 18.6495 4.85051 21 7.75 21H15.75C18.6495 21 21 18.6495 21 15.75V7.75C21 4.85051 18.6495 2.5 15.75 2.5H12.25C11.8358 2.5 11.5 2.16421 11.5 1.75C11.5 1.33579 11.8358 1 12.25 1H15.75C19.4779 1 22.5 4.02208 22.5 7.75V15.75C22.5 19.4779 19.4779 22.5 15.75 22.5H7.75C4.02208 22.5 1 19.4779 1 15.75V7.75Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.5 11.75C1.5 11.3358 1.83579 11 2.25 11H21.75C22.1642 11 22.5 11.3358 22.5 11.75C22.5 12.1642 22.1642 12.5 21.75 12.5H2.25C1.83579 12.5 1.5 12.1642 1.5 11.75Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.75 1C15.1642 1 15.5 1.33579 15.5 1.75L15.5 21.25C15.5 21.6642 15.1642 22 14.75 22C14.3358 22 14 21.6642 14 21.25L14 1.75C14 1.33579 14.3358 1 14.75 1Z"
          fill="currentColor"
        />
      </svg>
    }
  </IconStyled>
);
export default IconGrid8;
