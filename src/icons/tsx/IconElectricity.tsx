import * as React from "react";
import { IconStyled } from "../styles";
const IconElectricity = ({
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
          d="M9.5 1.75C9.5 1.33579 9.16421 1 8.75 1C8.33579 1 8 1.33579 8 1.75V5H4.75C4.33579 5 4 5.33579 4 5.75C4 6.16421 4.33579 6.5 4.75 6.5H6V8C6 8.41421 6.33579 8.75 6.75 8.75V8.75C7.16421 8.75 7.5 8.41421 7.5 8V6.5H16V10.75C16 13.0972 14.0972 15 11.75 15C9.65747 15 7.91815 13.4877 7.56534 11.4965C7.49308 11.0886 7.16421 10.75 6.75 10.75V10.75C6.33579 10.75 5.99486 11.0874 6.04823 11.4982C6.38304 14.0748 8.4236 16.1159 11 16.4515V21.75C11 22.1642 11.3358 22.5 11.75 22.5C12.1642 22.5 12.5 22.1642 12.5 21.75V16.4515C15.3213 16.084 17.5 13.6714 17.5 10.75V6.5H18.75C19.1642 6.5 19.5 6.16421 19.5 5.75C19.5 5.33579 19.1642 5 18.75 5H15.5V1.75C15.5 1.33579 15.1642 1 14.75 1C14.3358 1 14 1.33579 14 1.75V5H9.5V1.75Z"
          fill="currentColor"
        />
      </svg>
    }
  </IconStyled>
);
export default IconElectricity;
