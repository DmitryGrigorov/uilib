import styled from "styled-components";
import { LIGHT_THEME } from "../Pallette/themes";
import { defineResponsibleWidth } from "../utils/defineResponsibleSize";

import InputDate from "./components/InputDate";
import { IStylesProps, IStInputDate } from "./interfaces";

export const DatePickerWrapper = styled.div<{ width?: string }>`
  position: relative;
  display: block;
  ${({ width }) => defineResponsibleWidth(width)};
`;

export const CalendarWrapper = styled.div`
  position: absolute;
  left: 0;
  margin-top: 4px;
  z-index: 3;
`;

export const StyledInputDate = styled(InputDate)<IStInputDate & IStylesProps>`
  pointer-events: ${(p) => (p.isReadOnly || p.isDisabled ? "none" : "auto")};
`;

StyledInputDate.defaultProps = {
  theme: LIGHT_THEME
};
