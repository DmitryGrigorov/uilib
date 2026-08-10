import React, { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import { useLocation } from "react-router-dom";
import Router from "../../router";
import { ErrorBoundary } from "../../components/ErrorBoundary";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import { AppWrapper, GridItemRouterStyled, AppGrid } from "./styles";
import AppThemeProvider from "./components/AppTheme/AppThemeProvider";

export const App: React.FC = observer(() => {
  const location = useLocation();
  const gridItemRouterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location.hash) {
      const animationFrame = window.requestAnimationFrame(() => {
        document.getElementById(location.hash.slice(1))?.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches
            ? "auto"
            : "smooth",
          block: "start"
        });
      });

      return () => window.cancelAnimationFrame(animationFrame);
    }

    gridItemRouterRef.current?.scrollTo(0, 0);
    window.scrollTo({ top: 0, behavior: "auto" });

    return undefined;
  }, [location.hash, location.pathname]);

  return (
    <AppThemeProvider>
      <ErrorBoundary>
        <AppWrapper>
          <Header isLogo />
          {location.pathname !== "/" ? (
            <AppGrid>
              <SideBar />
              <GridItemRouterStyled ref={gridItemRouterRef}>
                <Router />
              </GridItemRouterStyled>
            </AppGrid>
          ) : (
            <Router />
          )}
        </AppWrapper>
      </ErrorBoundary>
    </AppThemeProvider>
  );
});
