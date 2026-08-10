import StorybookDocExamples from "../../../helpers/StorybookDocExamples";
import { BadgeExample, BadgeExampleDisabled } from "./BadgeExamples";

export const BadgeExamples: React.FC = () => {
  const BADGES_EXAMPLES = [
    {
      key: "badge",
      default: <BadgeExample isClick />,
      teal: <BadgeExample isClick colorType="teal" />,
      red: <BadgeExample isClick colorType="red" />,
      amber: <BadgeExample isClick colorType="amber" />,
      extra: <BadgeExample isClick colorType="extra" />
    },
    {
      key: "disabled badge",
      default: <BadgeExampleDisabled />
    }
  ];

  const SIZE_BADGES = [
    { label: "Size M", value: "m" },
    { label: "Size L", value: "l" }
  ];

  return (
    <StorybookDocExamples items={BADGES_EXAMPLES} sizeTabs={SIZE_BADGES} />
  );
};
