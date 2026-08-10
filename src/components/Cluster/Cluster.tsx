import React, { useState, useEffect } from "react";
import P1 from "../typography/P1";
import { TP1FontType } from "../typography/P1/types";
import { useStateProps } from "../hooks/useStateProps";
import { TPropsWithAttributes } from "../utils/types/propsWithAttributes";

import { IClusterProps } from "./types";
import { ClusterStyled } from "./style";

const Cluster = React.forwardRef<
  HTMLDivElement,
  TPropsWithAttributes<IClusterProps>
>(({ className, isDisabled, children, onClick, ...props }, ref) => {
  const [isPressed, setIsPressed] = useStateProps(props.isPressed);
  const [textType, setTextType] = useState<TP1FontType>("phoenix");

  const handleClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    setIsPressed(!isPressed);
    onClick?.(event);
  };

  useEffect(() => {
    if (isDisabled || isPressed) {
      setTextType("cygnus");
    } else {
      setTextType("phoenix");
    }
  }, [isPressed, isDisabled]);

  const handleMouseLeave = (): void => {
    if (!isDisabled && !isPressed) {
      setTextType("phoenix");
    }
  };

  return (
    <ClusterStyled
      onMouseOver={() => setTextType("cygnus")}
      onMouseLeave={handleMouseLeave}
      className={className}
      onClick={handleClick}
      isPressed={isPressed}
      isDisabled={isDisabled}
      ref={ref}
      {...props}>
      <P1 type={textType}>{children}</P1>
    </ClusterStyled>
  );
});

Cluster.displayName = "Cluster";

export default Cluster;
