import styled from "styled-components";
import { LIGHT_THEME } from "../Pallette/themes";
import { LIGHT_COLORS } from "../Pallette/Colors";
import { ZINDEX } from "../Pallette/ZIndex";
import { MEDIA } from "../Pallette/style-utils";

export const ErrorPageMain = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: ${ZINDEX.widget};
  height: 100vh;
  width: 100vw;
  grid-template-rows: 1fr min-content;
  grid-template-columns: 100vw;
  display: grid;
  background-color: ${({ theme }) => theme.colors.neutral1};

  ${MEDIA.desktopM`.body {
    padding-top: 84px;
  }
  .footer {
  box-shadow: 0 -8px 8px rgba(16, 17, 20, 0.24);
  }
  `}

  ${MEDIA.mobile`
  .body {
  padding-top: 68px
  } 
  .footer {
  box-shadow: 0 -8px 8px rgba(16, 17, 20, 0.24); 
  border-radius: 16px 16px 0px 0px;
  }`}
`;

export const Body = styled.div`
  box-sizing: border-box;
  position: relative;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  padding: 244px 20px 40px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: stretch;
  justify-content: flex-start;

  .text-container {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    box-sizing: border-box;
    gap: 40px;
    align-content: stretch;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    max-width: 586px;

    .error-description {
      position: relative;
      width: 100%;
    }
  }
`;

export const ActionsAccess = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 586px;
  display: flex;
  flex-flow: column nowrap;
  box-sizing: border-box;
  align-content: stretch;
  align-items: flex-start;
  justify-content: space-around;
  gap: 20px;
`;

export const Footer = styled.div`
  position: relative;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background-color: ${LIGHT_COLORS.neutral1};
`;

ErrorPageMain.defaultProps = {
  theme: LIGHT_THEME
};

Body.defaultProps = {
  theme: LIGHT_THEME
};
