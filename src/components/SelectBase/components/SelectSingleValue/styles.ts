import styled from "styled-components";
import P2 from "../../../typography/P2";
import { LIGHT_THEME } from "../../../Pallette/themes";

export const SingleValueStyle = styled(P2)<{ isDisabled?: boolean }>`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  color: ${({ theme, isDisabled }) =>
    isDisabled
      ? theme.colors.textBasicDisabled
      : theme.colors.textBasicDefault};
`;

SingleValueStyle.defaultProps = {
  theme: LIGHT_THEME
};
