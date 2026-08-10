import * as React from "react";
import { IconStyled } from "../styles";
const IconNoteText = ({
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
          d="M17.75 2.5H7.75C6.36929 2.5 5.25 3.61929 5.25 5V10.25C5.25 10.6642 4.91421 11 4.5 11C4.08579 11 3.75 10.6642 3.75 10.25V5C3.75 2.79086 5.54086 1 7.75 1H17.75C19.9591 1 21.75 2.79086 21.75 5V6.25C21.75 6.66421 21.4142 7 21 7C20.5858 7 20.25 6.66421 20.25 6.25V5C20.25 3.61929 19.1307 2.5 17.75 2.5Z"
          fill="currentColor"
        />
        <path
          d="M4.5 13C4.08579 13 3.75 13.3358 3.75 13.75V19C3.75 21.2091 5.54086 23 7.75 23H17.75C19.9591 23 21.75 21.2091 21.75 19V9.75C21.75 9.33579 21.4142 9 21 9C20.5858 9 20.25 9.33579 20.25 9.75V19C20.25 20.3807 19.1307 21.5 17.75 21.5H7.75C6.36929 21.5 5.25 20.3807 5.25 19V13.75C5.25 13.3358 4.91421 13 4.5 13Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 8C2 7.58579 2.33579 7.25 2.75 7.25H6.25C6.66421 7.25 7 7.58579 7 8C7 8.41421 6.66421 8.75 6.25 8.75H2.75C2.33579 8.75 2 8.41421 2 8Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 16C2 15.5858 2.33579 15.25 2.75 15.25H6.25C6.66421 15.25 7 15.5858 7 16C7 16.4142 6.66421 16.75 6.25 16.75H2.75C2.33579 16.75 2 16.4142 2 16Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 10C9 9.58579 9.33579 9.25 9.75 9.25H12.25C12.6642 9.25 13 9.58579 13 10C13 10.4142 12.6642 10.75 12.25 10.75H9.75C9.33579 10.75 9 10.4142 9 10Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 10C14 9.58579 14.3358 9.25 14.75 9.25H16.75C17.1642 9.25 17.5 9.58579 17.5 10C17.5 10.4142 17.1642 10.75 16.75 10.75H14.75C14.3358 10.75 14 10.4142 14 10Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 14C9 13.5858 9.33579 13.25 9.75 13.25H14.75C15.1642 13.25 15.5 13.5858 15.5 14C15.5 14.4142 15.1642 14.75 14.75 14.75H9.75C9.33579 14.75 9 14.4142 9 14Z"
          fill="currentColor"
        />
      </svg>
    }
  </IconStyled>
);
export default IconNoteText;
