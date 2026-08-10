import * as React from "react";
import { IconStyled } from "../styles";
const IconArrowSquareRight = ({
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
          d="M9.46967 6.46967C9.76256 6.17678 10.2374 6.17678 10.5303 6.46967L14.1161 10.0555C15.1901 11.1294 15.1901 12.8706 14.1161 13.9445L10.5303 17.5303C10.2374 17.8232 9.76256 17.8232 9.46967 17.5303C9.17678 17.2374 9.17678 16.7626 9.46967 16.4697L13.0555 12.8839C13.5436 12.3957 13.5436 11.6043 13.0555 11.1161L9.46967 7.53033C9.17678 7.23744 9.17678 6.76256 9.46967 6.46967Z"
          fill="currentColor"
        />
        <path
          d="M7 2.5H17C19.4853 2.5 21.5 4.51472 21.5 7V17C21.5 19.4853 19.4853 21.5 17 21.5H7C4.51472 21.5 2.5 19.4853 2.5 17V12.75C2.5 12.3358 2.16421 12 1.75 12C1.33579 12 1 12.3358 1 12.75V17C1 20.3137 3.68629 23 7 23H17C20.3137 23 23 20.3137 23 17V7C23 3.68629 20.3137 1 17 1H7C3.68629 1 1 3.68629 1 7V7.25C1 7.66421 1.33579 8 1.75 8C2.16421 8 2.5 7.66421 2.5 7.25V7C2.5 4.51472 4.51472 2.5 7 2.5Z"
          fill="currentColor"
        />
      </svg>
    }
  </IconStyled>
);
export default IconArrowSquareRight;
