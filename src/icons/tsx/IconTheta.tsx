import * as React from "react";
import { IconStyled } from "../styles";
const IconTheta = ({
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
          d="M15 6.5H9C8.17157 6.5 7.5 7.17157 7.5 8V16C7.5 16.8284 8.17157 17.5 9 17.5H15C15.8284 17.5 16.5 16.8284 16.5 16V8C16.5 7.17157 15.8284 6.5 15 6.5ZM9 5C7.34315 5 6 6.34315 6 8V16C6 17.6569 7.34315 19 9 19H15C16.6569 19 18 17.6569 18 16V8C18 6.34315 16.6569 5 15 5H9Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.25 13.5C9.25 13.0858 9.58579 12.75 10 12.75H14C14.4142 12.75 14.75 13.0858 14.75 13.5C14.75 13.9142 14.4142 14.25 14 14.25H12.75V15.5C12.75 15.9142 12.4142 16.25 12 16.25C11.5858 16.25 11.25 15.9142 11.25 15.5V14.25H10C9.58579 14.25 9.25 13.9142 9.25 13.5Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 7.75C12.4142 7.75 12.75 8.08579 12.75 8.5V9.75H14C14.4142 9.75 14.75 10.0858 14.75 10.5C14.75 10.9142 14.4142 11.25 14 11.25H10C9.58579 11.25 9.25 10.9142 9.25 10.5C9.25 10.0858 9.58579 9.75 10 9.75H11.25V8.5C11.25 8.08579 11.5858 7.75 12 7.75Z"
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
export default IconTheta;
