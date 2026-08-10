import * as React from "react";
import { IconStyled } from "../styles";
const IconArrowSquareUp = ({
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
          d="M6.46967 14.5303C6.17678 14.2374 6.17678 13.7626 6.46967 13.4697L10.0555 9.88388C11.1294 8.80994 12.8706 8.80994 13.9445 9.88388L17.5303 13.4697C17.8232 13.7626 17.8232 14.2374 17.5303 14.5303C17.2374 14.8232 16.7626 14.8232 16.4697 14.5303L12.8839 10.9445C12.3957 10.4564 11.6043 10.4564 11.1161 10.9445L7.53033 14.5303C7.23744 14.8232 6.76256 14.8232 6.46967 14.5303Z"
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
export default IconArrowSquareUp;
