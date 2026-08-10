import StorybookDocExamples from "../../../helpers/StorybookDocExamples";
import {
  TagExampleChoice,
  TagExampleAvatar,
  TagExampleChoiceDisabled,
  TagExampleAvatarDisabled,
  TagExampleDefault,
  TagExampleDefaultDisabled,
  TagExampleStroke,
  TagExampleStrokeDisabled,
  TagExampleStrokeAvatar,
  TagExampleStrokeAvatarDisabled,
  TagExampleStrokeChoice,
  TagExampleStrokeChoiceDisabled
} from "./TagExamples";

export const TagExamples: React.FC = () => {
  const TAGS_EXAMPLES = [
    {
      key: "tags",
      default: <TagExampleDefault />,
      choice: <TagExampleChoice />,
      avatar: <TagExampleAvatar />,
      strokeDefaul: <TagExampleStroke />,
      strokeChoice: <TagExampleStrokeChoice />,
      strokeAvatar: <TagExampleStrokeAvatar />
    },
    {
      key: "disabled tags",
      default: <TagExampleDefaultDisabled />,
      choice: <TagExampleChoiceDisabled />,
      avatar: <TagExampleAvatarDisabled />,
      strokeDefaul: <TagExampleStrokeDisabled />,
      strokeChoice: <TagExampleStrokeChoiceDisabled />,
      strokeAvatar: <TagExampleStrokeAvatarDisabled />
    }
  ];

  const SIZE_TABS = [
    { label: "Size S", value: "s" },
    { label: "Size M", value: "m" },
    { label: "Size XS", value: "xs" }
  ];

  return <StorybookDocExamples items={TAGS_EXAMPLES} sizeTabs={SIZE_TABS} />;
};
