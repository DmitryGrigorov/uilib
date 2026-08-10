import * as React from "react";
import { IconStyled } from "../styles";
const IconNotificationSquareStatus = ({
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
          d="M5.25 18C5.25 17.5858 5.58579 17.25 6 17.25H16C16.4142 17.25 16.75 17.5858 16.75 18C16.75 18.4142 16.4142 18.75 16 18.75H6C5.58579 18.75 5.25 18.4142 5.25 18Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.25 14C5.25 13.5858 5.58579 13.25 6 13.25H11C11.4142 13.25 11.75 13.5858 11.75 14C11.75 14.4142 11.4142 14.75 11 14.75H6C5.58579 14.75 5.25 14.4142 5.25 14Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.5 6.5C20.6046 6.5 21.5 5.60457 21.5 4.5C21.5 3.39543 20.6046 2.5 19.5 2.5C18.3954 2.5 17.5 3.39543 17.5 4.5C17.5 5.60457 18.3954 6.5 19.5 6.5ZM19.5 8C21.433 8 23 6.433 23 4.5C23 2.567 21.433 1 19.5 1C17.567 1 16 2.567 16 4.5C16 6.433 17.567 8 19.5 8Z"
          fill="currentColor"
        />
        <path
          d="M14.25 1C14.6642 1 15 1.33579 15 1.75C15 2.16421 14.6642 2.5 14.25 2.5H7C4.51472 2.5 2.5 4.51472 2.5 7V8.25C2.5 8.66421 2.16421 9 1.75 9C1.33579 9 1 8.66421 1 8.25V7C1 3.68629 3.68629 1 7 1H14.25Z"
          fill="currentColor"
        />
        <path
          d="M1.75 12C1.33579 12 1 12.3358 1 12.75V17C1 20.3137 3.68629 23 7 23H17C20.3137 23 23 20.3137 23 17V9.75C23 9.33579 22.6642 9 22.25 9C21.8358 9 21.5 9.33579 21.5 9.75V17C21.5 19.4853 19.4853 21.5 17 21.5H7C4.51472 21.5 2.5 19.4853 2.5 17V12.75C2.5 12.3358 2.16421 12 1.75 12Z"
          fill="currentColor"
        />
      </svg>
    }
  </IconStyled>
);
export default IconNotificationSquareStatus;
