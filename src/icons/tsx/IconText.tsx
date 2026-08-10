import * as React from "react";
import { IconStyled } from "../styles";
const IconText = ({
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
          d="M7 20.75C7 20.3358 7.33579 20 7.75 20H15.75C16.1642 20 16.5 20.3358 16.5 20.75C16.5 21.1642 16.1642 21.5 15.75 21.5H7.75C7.33579 21.5 7 21.1642 7 20.75Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11 2.75C11 2.33579 11.3358 2 11.75 2H18.75C19.7165 2 20.5 2.7835 20.5 3.75V5.75C20.5 6.16421 20.1642 6.5 19.75 6.5C19.3358 6.5 19 6.16421 19 5.75V3.75C19 3.61193 18.8881 3.5 18.75 3.5H11.75C11.3358 3.5 11 3.16421 11 2.75Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 3.75C3 2.7835 3.7835 2 4.75 2H11.75C12.1642 2 12.5 2.33579 12.5 2.75C12.5 3.16421 12.1642 3.5 11.75 3.5H4.75C4.61193 3.5 4.5 3.61193 4.5 3.75V5.75C4.5 6.16421 4.16421 6.5 3.75 6.5C3.33579 6.5 3 6.16421 3 5.75V3.75Z"
          fill="currentColor"
        />
        <path
          d="M12.5 2.75C12.5 2.33579 12.1642 2 11.75 2C11.3358 2 11 2.33579 11 2.75V11C11 11.4142 11.3358 11.75 11.75 11.75C12.1642 11.75 12.5 11.4142 12.5 11V2.75Z"
          fill="currentColor"
        />
        <path
          d="M12.5 14.5C12.5 14.0858 12.1642 13.75 11.75 13.75C11.3358 13.75 11 14.0858 11 14.5V20.75C11 21.1642 11.3358 21.5 11.75 21.5C12.1642 21.5 12.5 21.1642 12.5 20.75V14.5Z"
          fill="currentColor"
        />
      </svg>
    }
  </IconStyled>
);
export default IconText;
