import StorybookDocExamples from "../../../helpers/StorybookDocExamples";
import {
  AvatarIcon,
  AvatarImage,
  AvatarText,
  AvatarImageCustomHoverIcon,
  AvatarDisabled,
  AvatarDisabledCustomIcon,
  AvatarClick
} from "./AvatarExamples";

export const AvatarExamples: React.FC = () => {
  const AVATAR_EXAMPLES = [
    {
      key: "avatar",
      icon: <AvatarIcon />,
      text: <AvatarText />,
      image: <AvatarImage />,
      customHover: <AvatarImageCustomHoverIcon />,
      disabled: <AvatarDisabled />,
      customDisabled: <AvatarDisabledCustomIcon />,
      click: <AvatarClick />
    }
  ];

  const SIZE_TABS = [
    { label: "s", value: "s" },
    { label: "m", value: "m" },
    { label: "l", value: "l" },
    { label: "xl", value: "xl" }
  ];

  return <StorybookDocExamples items={AVATAR_EXAMPLES} sizeTabs={SIZE_TABS} />;
};
