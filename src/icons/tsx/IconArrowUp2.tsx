import * as React from "react";
import { IconStyled } from "../styles";
const IconArrowUp2 = ({
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
          d="M9.28399 18.9246C9.28399 18.5425 8.99778 18.2281 8.63865 18.0977C6.89427 17.4642 5.94682 15.3931 6.84924 13.5883L10.2715 6.74372C11.1007 5.08536 13.4673 5.08536 14.2965 6.74372L17.7187 13.5883C18.7992 15.7492 17.2278 18.2917 14.8119 18.2917L13.034 18.2917C12.6198 18.2917 12.284 18.6275 12.284 19.0417V19.0417C12.284 19.456 12.6198 19.7917 13.034 19.7917L14.8119 19.7917C18.3429 19.7917 20.6395 16.0758 19.0604 12.9175L15.6381 6.0729C14.2561 3.30896 10.3119 3.30897 8.92989 6.0729L5.5076 12.9175C4.1326 15.6675 5.69605 18.8403 8.45429 19.6147C8.89027 19.7371 9.28399 19.3774 9.28399 18.9246V18.9246Z"
          fill="currentColor"
        />
      </svg>
    }
  </IconStyled>
);
export default IconArrowUp2;
