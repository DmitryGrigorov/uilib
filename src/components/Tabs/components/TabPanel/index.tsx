import React, { forwardRef, PropsWithChildren, useRef } from "react";
import { useTabContext } from "../TabContext";
import { TPropsWithAttributes } from "../../../utils/types/propsWithAttributes";
import { ITabPanelProps } from "./types";
import { TabPanelStyled } from "./styles";

const TabPanel = forwardRef<
  HTMLDivElement,
  TPropsWithAttributes<PropsWithChildren<ITabPanelProps>>
>(
  (
    { children, style, className, value, isKeepAlive = false, ...props },
    ref
  ) => {
    const context = useTabContext();
    const isLoaded = useRef<boolean>(false);

    if (context === null) {
      throw new Error("No TabContext provided");
    }

    const isTabActive = value === context.value;

    if (isKeepAlive) {
      if (context.isLazy && !isLoaded.current && !isTabActive) {
        return null;
      }
      if (!isLoaded.current) {
        isLoaded.current = true;
      }
    } else if (context.isLazy && !isTabActive) {
      return null;
    }

    return (
      <TabPanelStyled
        ref={ref}
        isHidden={!isTabActive}
        role="tabpanel"
        style={style}
        className={className}
        {...props}>
        {children}
      </TabPanelStyled>
    );
  }
);

TabPanel.displayName = "TabPanel";

export default TabPanel;
