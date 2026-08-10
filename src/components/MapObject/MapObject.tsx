import React from "react";
import { useStateProps } from "../hooks/useStateProps";
import { TPropsWithAttributes } from "../utils/types/propsWithAttributes";
import { IMapObjectProps } from "./types";

import { MapObjectRoot, StripeStyled } from "./styles";

const MapObject = React.forwardRef<
  HTMLDivElement,
  TPropsWithAttributes<IMapObjectProps>
>(({ className, icon, typeColor, onClick, isDisabled, ...props }, ref) => {
  const [isChecked, setIsChecked] = useStateProps(props.isChecked);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    setIsChecked((prevState) => !prevState);
    onClick?.(event);
  };

  return (
    <MapObjectRoot
      className={className}
      typeColor={typeColor}
      onClick={handleClick}
      isChecked={isChecked}
      isDisabled={isDisabled}
      ref={ref}
      {...props}>
      {icon}
      {!isDisabled && <StripeStyled isChecked={isChecked} />}
    </MapObjectRoot>
  );
});

MapObject.displayName = "MapObject";

export default MapObject;
