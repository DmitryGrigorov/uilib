import * as React from "react";
import { IconStyled } from "../styles";
const IconTable = ({
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
          d="M0.678589 9.5C0.678589 9.08579 1.01438 8.75 1.42859 8.75H22.1649V10.25H1.42859C1.01438 10.25 0.678589 9.91421 0.678589 9.5Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.1648 14.75H8.16479V13.25H22.1648V14.75Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.1648 18.75H8.16479V17.25H22.1648V18.75Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.41479 22.5V2.5L8.91479 2.5V22.5H7.41479Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.9148 22.5L14.9148 9.5H16.4148L16.4148 22.5H14.9148Z"
          fill="currentColor"
        />
        <path
          d="M2.66479 3.5H19.6648C21.0455 3.5 22.1648 4.61929 22.1648 6V21C22.1648 21.2761 21.9409 21.5 21.6648 21.5H4.6648C3.28408 21.5 2.16479 20.3807 2.16479 19V14.25C2.16479 13.8358 1.82901 13.5 1.41479 13.5C1.00058 13.5 0.664795 13.8358 0.664795 14.25V19C0.664795 21.2091 2.45566 23 4.6648 23H21.6648C22.7694 23 23.6648 22.1046 23.6648 21V6C23.6648 3.79086 21.8739 2 19.6648 2H2.66479C1.56023 2 0.664795 2.89543 0.664795 4V9.50332C0.664795 9.91754 1.00058 10.2533 1.41479 10.2533C1.82901 10.2533 2.16479 9.91754 2.16479 9.50332V4C2.16479 3.72386 2.38865 3.5 2.66479 3.5Z"
          fill="currentColor"
        />
      </svg>
    }
  </IconStyled>
);
export default IconTable;
