import * as React from "react";
import { IconStyled } from "../styles";
const IconTimer = ({
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
          d="M7.75714 2.5C5.56825 2.5 4.66818 5.30864 6.44935 6.5809L12.3957 10.8283L18.3421 6.5809C20.1233 5.30864 19.2232 2.5 17.0343 2.5H14.8957C14.4815 2.5 14.1457 2.16421 14.1457 1.75C14.1457 1.33579 14.4815 1 14.8957 1H17.0343C20.6825 1 22.1826 5.68106 19.214 7.8015L13.6861 11.75L19.214 15.6985C22.1826 17.8189 20.6825 22.5 17.0343 22.5H7.75714C4.10899 22.5 2.60888 17.8189 5.5775 15.6985L11.1054 11.75L5.5775 7.8015C2.60888 5.68106 4.10899 1 7.75714 1H9.89574C10.31 1 10.6457 1.33579 10.6457 1.75C10.6457 2.16421 10.31 2.5 9.89574 2.5H7.75714ZM12.3957 12.6717L6.44935 16.9191C4.66818 18.1914 5.56825 21 7.75714 21H17.0343C19.2232 21 20.1233 18.1914 18.3421 16.9191L12.3957 12.6717Z"
          fill="currentColor"
        />
      </svg>
    }
  </IconStyled>
);
export default IconTimer;
