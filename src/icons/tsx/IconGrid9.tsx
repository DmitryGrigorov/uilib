import * as React from "react";
import { IconStyled } from "../styles";
const IconGrid9 = ({
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
          d="M1 7.75C1 4.02208 4.02208 1 7.75 1C8.7165 1 9.5 1.7835 9.5 2.75V8H14V2.5H12.25C11.8358 2.5 11.5 2.16421 11.5 1.75C11.5 1.33579 11.8358 1 12.25 1H15.75C19.4779 1 22.5 4.02208 22.5 7.75V15.75C22.5 19.4779 19.4779 22.5 15.75 22.5H7.75C4.02208 22.5 1 19.4779 1 15.75V7.75ZM21 14V9.5H15.5L15.5 14H21ZM15.5 15.5H21V15.75C21 18.6495 18.6495 21 15.75 21H15.5V15.5ZM14 14L14 9.5H9.5V14H14ZM9.5 15.5H14V21H7.75C4.85051 21 2.5 18.6495 2.5 15.75V15.5H8V18.25C8 18.6642 8.33579 19 8.75 19C9.16421 19 9.5 18.6642 9.5 18.25V15.5ZM8 14V9.5H2.5V14H8ZM2.5 8H8V2.75C8 2.61193 7.88807 2.5 7.75 2.5C4.85051 2.5 2.5 4.85051 2.5 7.75V8ZM15.5 8H21V7.75C21 4.85051 18.6495 2.5 15.75 2.5H15.5V8Z"
          fill="currentColor"
        />
      </svg>
    }
  </IconStyled>
);
export default IconGrid9;
