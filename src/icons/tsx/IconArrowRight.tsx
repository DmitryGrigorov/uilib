import * as React from "react";
import { IconStyled } from "../styles";
const IconArrowRight = ({
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
          d="M19.4902 12.6991C20.0723 12.2002 20.0723 11.2998 19.4902 10.8009L14.2618 6.31946C13.9474 6.04989 13.9109 5.57641 14.1805 5.26192C14.4501 4.94743 14.9235 4.911 15.238 5.18057L20.4664 9.66206C21.7469 10.7596 21.7469 12.7405 20.4664 13.838L15.238 18.3195C14.9235 18.589 14.4501 18.5526 14.1805 18.2381C13.9109 17.9236 13.9474 17.4501 14.2618 17.1806L19.4902 12.6991Z"
          fill="currentColor"
        />
        <path
          d="M19.7499 12.5C20.1642 12.5 20.4999 12.1642 20.4999 11.75C20.4999 11.3358 20.1642 11 19.7499 11L9.49994 11C9.08573 11 8.74994 11.3358 8.74994 11.75C8.74994 12.1642 9.08573 12.5 9.49994 12.5L19.7499 12.5Z"
          fill="currentColor"
        />
        <path
          d="M5.99994 12.5C6.41415 12.5 6.74994 12.1642 6.74994 11.75C6.74994 11.3358 6.41415 11 5.99994 11L2.74994 11C2.33573 11 1.99994 11.3358 1.99994 11.75C1.99994 12.1642 2.33573 12.5 2.74994 12.5L5.99994 12.5Z"
          fill="currentColor"
        />
      </svg>
    }
  </IconStyled>
);
export default IconArrowRight;
