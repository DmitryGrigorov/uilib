import * as React from "react";
import { IconStyled } from "../styles";
const IconMenuCircle = ({
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
          d="M6.25 9C6.25 8.58579 6.58579 8.25 7 8.25H7.5C7.91421 8.25 8.25 8.58579 8.25 9C8.25 9.41421 7.91421 9.75 7.5 9.75H7C6.58579 9.75 6.25 9.41421 6.25 9Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.25 12C6.25 11.5858 6.58579 11.25 7 11.25H7.5C7.91421 11.25 8.25 11.5858 8.25 12C8.25 12.4142 7.91421 12.75 7.5 12.75H7C6.58579 12.75 6.25 12.4142 6.25 12Z"
          fill="currentColor"
        />
        <path
          d="M2.5 12C2.5 6.75329 6.75329 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12C21.5 13.9082 20.9374 15.685 19.969 17.1736C19.7631 17.49 19.7898 17.9111 20.0568 18.1781C20.378 18.4993 20.9098 18.4683 21.1616 18.0902C22.3231 16.3465 23 14.2523 23 12C23 5.92487 18.0751 1 12 1C5.92487 0.999999 1 5.92487 1 12C0.999999 18.0751 5.92487 23 12 23C14.1176 23 16.0954 22.4016 17.7736 21.3648C18.1693 21.1203 18.21 20.574 17.8812 20.2451C17.6209 19.9849 17.2131 19.9517 16.8979 20.1417C15.4677 21.004 13.7918 21.5 12 21.5C6.75329 21.5 2.5 17.2467 2.5 12Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.25 15C6.25 14.5858 6.58579 14.25 7 14.25H7.5C7.91421 14.25 8.25 14.5858 8.25 15C8.25 15.4142 7.91421 15.75 7.5 15.75H7C6.58579 15.75 6.25 15.4142 6.25 15Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.25 9C9.25 8.58579 9.58579 8.25 10 8.25H17C17.4142 8.25 17.75 8.58579 17.75 9C17.75 9.41421 17.4142 9.75 17 9.75H10C9.58579 9.75 9.25 9.41421 9.25 9Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.25 12C9.25 11.5858 9.58579 11.25 10 11.25H17C17.4142 11.25 17.75 11.5858 17.75 12C17.75 12.4142 17.4142 12.75 17 12.75H10C9.58579 12.75 9.25 12.4142 9.25 12Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.25 15C9.25 14.5858 9.58579 14.25 10 14.25H17C17.4142 14.25 17.75 14.5858 17.75 15C17.75 15.4142 17.4142 15.75 17 15.75H10C9.58579 15.75 9.25 15.4142 9.25 15Z"
          fill="currentColor"
        />
      </svg>
    }
  </IconStyled>
);
export default IconMenuCircle;
