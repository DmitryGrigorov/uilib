import { createGlobalStyle, css } from "styled-components";
import { ITheme, LIGHT_THEME } from "../Pallette/themes";

const ScrollStyle = createGlobalStyle<{ theme?: ITheme }>`
  ::-webkit-scrollbar {
    background-color: transparent;
    width: 12px;
    height: 12px;
    z-index: 999999;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 50%;
  }

  ::-webkit-scrollbar-track:hover {
    background-color: transparent;
  }

  ::-webkit-scrollbar-track-piece {
    background-color: transparent;
  }

  ::-webkit-scrollbar-corner {
    background: transparent;
  }
  
  ${({ theme = LIGHT_THEME }) => css`
    ::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.neutral5};
      border: 4px solid transparent;
      background-clip: padding-box;
      border-radius: 8px;

      &:hover {
        background-color: ${theme.colors.neutral7};
      }

      &:active {
        background-color: ${theme.colors.neutral10};
      }

      &:disabled {
        background-color: ${theme.colors.neutral3};
      }
    }
  `}
`;

export default ScrollStyle;
