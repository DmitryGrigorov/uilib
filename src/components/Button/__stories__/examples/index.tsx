import React from "react";
import StorybookDocExamples from "../../../helpers/StorybookDocExamples";
import {
  ButtonTextPlusIconPrimary,
  ButtonTextPlusIconPrimaryDisabled,
  ButtonIconPrimary,
  ButtonIconPrimaryDisabled,
  ButtonTextPrimary,
  ButtonTextPrimaryDisabled,
  ButtonTextPlusIconSecondary,
  ButtonTextPlusIconSecondaryDisabled,
  ButtonIconSecondary,
  ButtonIconSecondaryDisabled,
  ButtonTextSecondary,
  ButtonTextSecondaryDisabled,
  ButtonTextPlusIconGhost,
  ButtonTextPlusIconGhostDisabled,
  ButtonIconGhost,
  ButtonIconGhostDisabled,
  ButtonTextGhost,
  ButtonTextGhostDisabled,
  ButtonTextPlusIconLink,
  ButtonTextPlusIconLinkDisabled,
  ButtonIconLink,
  ButtonIconLinkDisabled,
  ButtonTextLink,
  ButtonTextLinkDisabled
} from "./ButtonExamples";

export const ButtonExamples: React.FC = () => {
  const BUTTON_EXAMPLES = [
    {
      key: "primary",
      textPlusIcon: <ButtonTextPlusIconPrimary />,
      icon: <ButtonIconPrimary />,
      text: <ButtonTextPrimary />,
      textPlusIconDisabled: <ButtonTextPlusIconPrimaryDisabled />,
      iconDisabled: <ButtonIconPrimaryDisabled />,
      textDisabled: <ButtonTextPrimaryDisabled />
    },
    {
      key: "secondary",
      textPlusIcon: <ButtonTextPlusIconSecondary />,
      icon: <ButtonIconSecondary />,
      text: <ButtonTextSecondary />,
      textPlusIconDisabled: <ButtonTextPlusIconSecondaryDisabled />,
      iconDisabled: <ButtonIconSecondaryDisabled />,
      textDisabled: <ButtonTextSecondaryDisabled />
    },
    {
      key: "ghost",
      textPlusIcon: <ButtonTextPlusIconGhost />,
      icon: <ButtonIconGhost />,
      text: <ButtonTextGhost />,
      textPlusIconDisabled: <ButtonTextPlusIconGhostDisabled />,
      iconDisabled: <ButtonIconGhostDisabled />,
      textDisabled: <ButtonTextGhostDisabled />
    },
    {
      key: "link",
      textPlusIcon: <ButtonTextPlusIconLink />,
      icon: <ButtonIconLink />,
      text: <ButtonTextLink />,
      textPlusIconDisabled: <ButtonTextPlusIconLinkDisabled />,
      iconDisabled: <ButtonIconLinkDisabled />,
      textDisabled: <ButtonTextLinkDisabled />
    }
  ];

  const SIZE_TABS = [
    { label: "l", value: "l" },
    { label: "m", value: "m" },
    { label: "s", value: "s" },
    { label: "xs", value: "xs" }
  ];

  return <StorybookDocExamples items={BUTTON_EXAMPLES} sizeTabs={SIZE_TABS} />;
};
