import * as React from "react";
import { IconStyled } from "../styles";
const IconArrowDown2 = ({
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
          d="M9.28399 4.86717C9.28399 5.24924 8.99778 5.56361 8.63865 5.69404C6.89427 6.32758 5.94682 8.39861 6.84924 10.2034L10.2715 17.048C11.1007 18.7064 13.4673 18.7064 14.2965 17.048L17.7187 10.2034C18.7992 8.04252 17.2279 5.5 14.8119 5.5L13.034 5.5C12.6198 5.5 12.284 5.16421 12.284 4.75V4.75C12.284 4.33579 12.6198 4 13.034 4L14.8119 4C18.3429 4 20.6395 7.71598 19.0604 10.8743L15.6381 17.7189C14.2561 20.4828 10.3119 20.4828 8.92989 17.7188L5.5076 10.8743C4.1326 8.12427 5.69605 4.95145 8.45429 4.17707C8.89027 4.05467 9.28399 4.41434 9.28399 4.86717V4.86717Z"
          fill="currentColor"
        />
      </svg>
    }
  </IconStyled>
);
export default IconArrowDown2;
