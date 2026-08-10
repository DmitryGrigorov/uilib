import styled, { css } from "styled-components";
import { Shape } from "../Pallette/Shape";
import { ITheme, LIGHT_THEME } from "../Pallette/themes";

interface IAccordionWrapper {
  theme?: ITheme;
  width?: number | string;
  isOpened?: boolean;
}

interface IAccordionHeader {
  theme?: ITheme;
  isDisabled?: boolean;
}

export const AccordionStyled = styled.div`
  height: max-content;
`;

export const AccordionWrapper = styled.div<IAccordionWrapper>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width ?? "100%"};
  max-height: inherit;
  height: 100%;
  margin-bottom: ${({ isOpened }) => Number(!isOpened) * 4}px;
`;

export const AccordionHeaderWrap = styled.div<IAccordionHeader>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  padding: 8px 0px 0px 0px;
  gap: 16px;
  width: 100%;
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
  ${({ theme, isDisabled }) =>
    isDisabled &&
    css`
      ${IconWrapper} {
        pointer-events: none;
        svg {
          cursor: not-allowed;
          color: ${theme.colors.textBasicDisabled};
        }
      }
      color: ${theme.colors.textBasicDisabled};
      cursor: not-allowed;
    `}
  color: ${({ theme, isDisabled }) =>
    isDisabled
      ? theme.colors.textBasicDisabled
      : theme.colors.textBasicDefault};

  &:hover {
    color: ${({ theme, isDisabled }) =>
      isDisabled
        ? theme.colors.textBasicDisabled
        : theme.colors.textBasicHover};
  }

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const AccordionContent = styled.div`
  padding: 16px 4px;
  overflow: auto;
`;

export const LeadWrapperHeader = styled.div`
  display: flex;
  gap: 8px;
  #accordion-title {
    padding: 4px;
  }
`;
export const TrailWrapperHeader = styled.div`
  display: flex;
  gap: 16px;
`;

export const IconWrapper = styled.div<{ isShown?: boolean }>`
  display: flex;
  flex-grow: 0;
  padding: 4px;
  border-radius: ${Shape.borderRadiusDefault};

  & svg {
    width: 12px;
    height: 12px;
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.overlay2};
    .arrow-icon {
      svg {
        color: ${({ theme }) => theme.colors.textBasicHover};
      }
    }
  }
  :active {
    background: inherit;
    .arrow-icon {
      svg {
        color: ${({ theme }) => theme.colors.componentPrimaryOrangePressed};
      }
    }
  }

  .arrow-icon {
    padding: 2px;
    transform: rotate(${({ isShown }) => (isShown ? "180deg" : "0deg")});
    transition: all 0.2s;
  }
`;

AccordionHeaderWrap.defaultProps = {
  theme: LIGHT_THEME
};

AccordionWrapper.defaultProps = {
  theme: LIGHT_THEME
};
