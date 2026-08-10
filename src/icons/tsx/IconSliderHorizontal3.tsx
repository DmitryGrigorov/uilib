import * as React from "react";
import { IconStyled } from "../styles";
const IconSliderHorizontal3 = ({
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
          d="M13.75 2.5H9.75C7.817 2.5 6.25 4.067 6.25 6V18C6.25 19.933 7.817 21.5 9.75 21.5H13.75C15.683 21.5 17.25 19.933 17.25 18V6C17.25 4.067 15.683 2.5 13.75 2.5ZM9.75 1C6.98858 1 4.75 3.23858 4.75 6V18C4.75 20.7614 6.98858 23 9.75 23H13.75C16.5114 23 18.75 20.7614 18.75 18V6C18.75 3.23858 16.5114 1 13.75 1H9.75Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.5 6C19.5 5.58579 19.8358 5.25 20.25 5.25H20.75C22.2688 5.25 23.5 6.48122 23.5 8V16C23.5 17.5188 22.2688 18.75 20.75 18.75H20.25C19.8358 18.75 19.5 18.4142 19.5 18C19.5 17.5858 19.8358 17.25 20.25 17.25H20.75C21.4404 17.25 22 16.6904 22 16V8C22 7.30964 21.4404 6.75 20.75 6.75H20.25C19.8358 6.75 19.5 6.41421 19.5 6Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 6C4 5.58579 3.66421 5.25 3.25 5.25H2.75C1.23122 5.25 0 6.48122 0 8V16C0 17.5188 1.23122 18.75 2.75 18.75H3.25C3.66421 18.75 4 18.4142 4 18C4 17.5858 3.66421 17.25 3.25 17.25H2.75C2.05964 17.25 1.5 16.6904 1.5 16V8C1.5 7.30964 2.05964 6.75 2.75 6.75H3.25C3.66421 6.75 4 6.41421 4 6Z"
          fill="currentColor"
        />
      </svg>
    }
  </IconStyled>
);
export default IconSliderHorizontal3;
