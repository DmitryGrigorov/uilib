import StorybookDocExamples from "../../../helpers/StorybookDocExamples";
import {
  BannerExampleMultiActionLight,
  BannerExampleSingleActionLight
} from "./BannerExample";

export const BannerExamples: React.FC = () => {
  const BANNER_EXAMPLES = [
    {
      key: "single",
      single: <BannerExampleSingleActionLight />
    },
    {
      key: "multi",
      multi: <BannerExampleMultiActionLight />
    }
  ];

  return <StorybookDocExamples items={BANNER_EXAMPLES} />;
};
