import * as React from "react";
import { IconStyled } from "../styles";
const IconTick = ({
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
          d="M22.2803 7.28033C22.5732 6.98744 22.5732 6.51256 22.2803 6.21967C21.9874 5.92678 21.5126 5.92678 21.2197 6.21967L18.8107 8.62866C18.5178 8.92155 18.5178 9.39642 18.8107 9.68932V9.68932C19.1036 9.98221 19.5785 9.98221 19.8714 9.68932L22.2803 7.28033Z"
          fill="currentColor"
        />
        <path
          d="M17.2655 12.2952C17.5584 12.0023 17.5584 11.5274 17.2655 11.2345V11.2345C16.9726 10.9416 16.4977 10.9416 16.2048 11.2345L11.7573 15.682C10.4237 17.0157 8.23853 16.9377 7.00326 15.5124L3.31678 11.2588C3.0455 10.9458 2.57183 10.912 2.25881 11.1832C1.9458 11.4545 1.91196 11.9282 2.18324 12.2412L5.86972 16.4948C7.67512 18.578 10.8688 18.6919 12.818 16.7427L17.2655 12.2952Z"
          fill="currentColor"
        />
      </svg>
    }
  </IconStyled>
);
export default IconTick;
