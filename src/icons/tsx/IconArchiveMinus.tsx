import * as React from "react";
import { IconStyled } from "../styles";
const IconArchiveMinus = ({
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
          d="M9 2.5H15C17.4853 2.5 19.5 4.51472 19.5 7V19.7574C19.5 21.0937 17.8843 21.763 16.9393 20.818L13.7678 17.6464C12.7915 16.6701 11.2085 16.6701 10.2322 17.6464L7.06066 20.818C6.11571 21.763 4.5 21.0937 4.5 19.7574V11.75C4.5 11.3358 4.16421 11 3.75 11C3.33579 11 3 11.3358 3 11.75V19.7574C3 22.4301 6.23142 23.7686 8.12132 21.8787L11.2929 18.7071C11.6834 18.3166 12.3166 18.3166 12.7071 18.7071L15.8787 21.8787C17.7686 23.7686 21 22.4301 21 19.7574V7C21 3.68629 18.3137 1 15 1H9C5.68629 1 3 3.68629 3 7V7.25C3 7.66421 3.33579 8 3.75 8C4.16421 8 4.5 7.66421 4.5 7.25V7C4.5 4.51472 6.51472 2.5 9 2.5Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.5 11C7.5 10.5858 7.83579 10.25 8.25 10.25H15.75C16.1642 10.25 16.5 10.5858 16.5 11C16.5 11.4142 16.1642 11.75 15.75 11.75H8.25C7.83579 11.75 7.5 11.4142 7.5 11Z"
          fill="currentColor"
        />
      </svg>
    }
  </IconStyled>
);
export default IconArchiveMinus;
