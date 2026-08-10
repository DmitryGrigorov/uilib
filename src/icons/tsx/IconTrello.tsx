import * as React from "react";
import { IconStyled } from "../styles";
const IconTrello = ({
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
          d="M10 7.5H7C6.72386 7.5 6.5 7.72386 6.5 8V16C6.5 16.2761 6.72386 16.5 7 16.5H10C10.2761 16.5 10.5 16.2761 10.5 16V8C10.5 7.72386 10.2761 7.5 10 7.5ZM7 6C5.89543 6 5 6.89543 5 8V16C5 17.1046 5.89543 18 7 18H10C11.1046 18 12 17.1046 12 16V8C12 6.89543 11.1046 6 10 6H7Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17 7.5H15C14.7239 7.5 14.5 7.72386 14.5 8V12C14.5 12.2761 14.7239 12.5 15 12.5H17C17.2761 12.5 17.5 12.2761 17.5 12V8C17.5 7.72386 17.2761 7.5 17 7.5ZM15 6C13.8954 6 13 6.89543 13 8V12C13 13.1046 13.8954 14 15 14H17C18.1046 14 19 13.1046 19 12V8C19 6.89543 18.1046 6 17 6H15Z"
          fill="currentColor"
        />
        <path
          d="M7 2.5H17C19.4853 2.5 21.5 4.51472 21.5 7V17C21.5 19.4853 19.4853 21.5 17 21.5H7C4.51472 21.5 2.5 19.4853 2.5 17V12.75C2.5 12.3358 2.16421 12 1.75 12C1.33579 12 1 12.3358 1 12.75V17C1 20.3137 3.68629 23 7 23H17C20.3137 23 23 20.3137 23 17V7C23 3.68629 20.3137 1 17 1H7C3.68629 1 1 3.68629 1 7V8.25C1 8.66421 1.33579 9 1.75 9C2.16421 9 2.5 8.66421 2.5 8.25V7C2.5 4.51472 4.51472 2.5 7 2.5Z"
          fill="currentColor"
        />
      </svg>
    }
  </IconStyled>
);
export default IconTrello;
