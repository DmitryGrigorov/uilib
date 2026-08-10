import styled, { css, RuleSet } from "styled-components";
import { size } from "polished";
import { ITheme, LIGHT_THEME } from "../Pallette/themes";
import { Padding } from "../Pallette/style-utils";
import { Typography } from "../Pallette/Typography";

interface ISwitch {
  theme: ITheme;
  $isDisabled?: boolean;
  $isChecked?: boolean;
  $isIndeterminate?: boolean;
  $hasTextOrIcon?: boolean;
  $iconBefore?: JSX.Element;
  $iconAfter?: JSX.Element;
}

const getColorSwitch = (options: ISwitch): RuleSet<object> => {
  if (options.$isDisabled) {
    return css`
      background-color: ${options.theme.colors.neutral2};
      color: ${options.theme.colors.textBasicHover};

      svg {
        color: ${options.theme.colors.textBasicHover};
      }
    `;
  } else if (options.$isChecked || options.$isIndeterminate) {
    return css`
      background-color: ${options.theme.colors.orange5};
      color: ${options.theme.colors.textBasicPressed};
      svg {
        color: ${options.theme.colors.textBasicPressed};
      }
    `;
  }

  return css`
    background-color: ${options.theme.colors.neutral6};
    color: ${options.theme.colors.textBasicDefault};
    svg {
      color: ${options.theme.colors.textBasicDefault};
    }
    &:hover {
      background: ${options.theme.colors.neutral4};
      color: ${options.theme.colors.textBasicDefault};

      svg {
        color: ${options.theme.colors.textBasicDefault};
      }
    }
  `;
};

export const SwitchWrapper = styled.label<ISwitch>`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 16px;
  ${({ $hasTextOrIcon, $iconBefore, $iconAfter, $isIndeterminate }) => {
    if ($isIndeterminate) {
      return Padding.allSide(1.5, 4, 1.5, 4);
    }
    if ($hasTextOrIcon && ($iconAfter || $iconBefore)) {
      return Padding.allSide(1, 1.5, 1, 1);
    }
    return Padding.allSide(1);
  }}
  cursor: ${({ $isDisabled }) => ($isDisabled ? "not-allowed" : "pointer")};
  box-sizing: border-box;
  ${(props) => getColorSwitch(props)};

  &:focus-within {
    outline: 3px solid ${({ theme }) => theme.colors.orange3};
    outline-offset: 3px;
  }

  .beforeSVG {
    margin-right: 6px;
  }

  .afterSVG {
    margin-left: 6px;
  }
`;

export const SwitchSlider = styled.div<ISwitch>`
  object-fit: contain;
  ${({ $hasTextOrIcon }) =>
    $hasTextOrIcon
      ? ""
      : css`
          width: 36px;
        `};
  display: inline-flex;
  cursor: inherit;
  align-items: center;
  transition: all 0.2s;
  position: relative;
  text-align: left;

  &:before {
    content: "";
    position: relative;
    display: inline-block;
    ${size("16px", "16px")};
    transition: 0.2s;
    border-radius: 16px;
    box-sizing: border-box;
    background-color: ${({ $isDisabled, theme }) =>
      $isDisabled ? theme.colors.neutral5 : theme.colors.neutral1};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:before {
      transition: none;
    }
  }
`;

export const SwitchInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  border: 0;
  margin: -1px;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  overflow: hidden;
  white-space: nowrap;

  &:checked + ${SwitchSlider} {
    justify-content: flex-end;
  }
`;

export const SwitchSliderIndeterminate = styled.div<ISwitch>`
  object-fit: contain;
  display: inline-flex;
  cursor: inherit;
  align-items: center;
  transition: all 0.2s;
  position: relative;
  border-radius: 16px;
  ${size("12px", "12px")};
  background-color: ${({ $isDisabled, theme }) =>
    $isDisabled ? theme.colors.neutral5 : theme.colors.neutral1};

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const SwitchComponent = styled.div`
  font-family: ${Typography.fontFamily};
  display: flex;
  align-items: center;
  user-select: none;
  width: max-content;
`;

export const TextBefore = styled.div`
  margin-right: 8px;
  margin-left: 4px;
`;

export const TextAfter = styled.div`
  margin-left: 8px;
  margin-right: 4px;
`;

SwitchWrapper.defaultProps = {
  theme: LIGHT_THEME
};

SwitchSlider.defaultProps = {
  theme: LIGHT_THEME
};

SwitchSliderIndeterminate.defaultProps = {
  theme: LIGHT_THEME
};
