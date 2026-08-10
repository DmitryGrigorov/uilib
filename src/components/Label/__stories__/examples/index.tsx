import StorybookDocExamples from "../../../helpers/StorybookDocExamples";
import {
  LabelExampleStatusFilled,
  LabelExampleStatusInfo,
  LabelExampleStatusFocused,
  LabelExampleStatusError,
  LabelExampleStatusSuccess,
  LabelExampleStatusWarning,
  LabelExampleStatusFilledWithIcon,
  LabelExampleStatusInfoWithIcon,
  LabelExampleStatusFocusedWithIcon,
  LabelExampleStatusErrorWithIcon,
  LabelExampleStatusSuccessWithIcon,
  LabelExampleStatusWarningWithIcon,
  LabelExampleStatusFilledWithIconDisabled,
  LabelExampleStatusFilledDisabled,
  LabelExampleStatusFilledRequired,
  LabelExampleDisabledRequired
} from "./LabelExamples";

export const LabelExamples: React.FC = () => {
  const LABEL_EXAMPLES = [
    {
      key: "default",
      filled: <LabelExampleStatusFilled />,
      info: <LabelExampleStatusInfo />,
      focused: <LabelExampleStatusFocused />,
      error: <LabelExampleStatusError />,
      success: <LabelExampleStatusSuccess />,
      warning: <LabelExampleStatusWarning />
    },
    {
      key: "Icon",
      filledIcon: <LabelExampleStatusFilledWithIcon />,
      infoIcon: <LabelExampleStatusInfoWithIcon />,
      focusedIcon: <LabelExampleStatusFocusedWithIcon />,
      errorIcon: <LabelExampleStatusErrorWithIcon />,
      successIcon: <LabelExampleStatusSuccessWithIcon />,
      warningIcon: <LabelExampleStatusWarningWithIcon />
    },
    {
      key: "required",
      filled: <LabelExampleStatusFilledRequired />,
      disabled: <LabelExampleDisabledRequired />
    },
    {
      key: "disabled",
      filledIconDisabled: <LabelExampleStatusFilledWithIconDisabled />,
      filledDisabled: <LabelExampleStatusFilledDisabled />
    }
  ];

  const SIZE_TABS = [
    { label: "m", value: "m" },
    { label: "s", value: "s" }
  ];

  return <StorybookDocExamples items={LABEL_EXAMPLES} sizeTabs={SIZE_TABS} />;
};
