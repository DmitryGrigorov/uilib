import StorybookDocExamples from "../../../helpers/StorybookDocExamples";
import {
  DividerExampleRowActiveCenter,
  DividerExampleRowActiveLeft,
  DividerExampleRowActiveRight,
  DividerExampleRowActiveWithoutContend,
  DividerExampleRowDefaultCenter,
  DividerExampleRowDefaultLeft,
  DividerExampleRowDefaultRight,
  DividerExampleRowDefaultWithoutContend,
  DividerExampleRowDisabledWithoutContend,
  DividerExampleRowErrorWithoutContend,
  DividerExampleRowFilledCenter,
  DividerExampleRowFilledLeft,
  DividerExampleRowFilledRight,
  DividerExampleRowFilledWithoutContend,
  DividerExampleRowSuccessWithoutContend,
  DividerExampleRowWarningWithoutContend,
  DividerExampleRowDisabledLeft,
  DividerExampleRowDisabledCenter,
  DividerExampleRowDisabledRight,
  DividerExampleRowErrorLeft,
  DividerExampleRowErrorCenter,
  DividerExampleRowErrorRight,
  DividerExampleRowWarningLeft,
  DividerExampleRowWarningCenter,
  DividerExampleRowWarningRight,
  DividerExampleRowSuccessLeft,
  DividerExampleRowSuccessCenter,
  DividerExampleRowSuccessRight,
  DividerExampleColumnActiveCenter,
  DividerExampleColumnActiveLeft,
  DividerExampleColumnActiveRight,
  DividerExampleColumnActiveWithoutContend,
  DividerExampleColumnDefaultCenter,
  DividerExampleColumnDefaultLeft,
  DividerExampleColumnDefaultRight,
  DividerExampleColumnDefaultWithoutContend,
  DividerExampleColumnDisabledWithoutContend,
  DividerExampleColumnErrorWithoutContend,
  DividerExampleColumnFilledCenter,
  DividerExampleColumnFilledLeft,
  DividerExampleColumnFilledRight,
  DividerExampleColumnFilledWithoutContend,
  DividerExampleColumnSuccessWithoutContend,
  DividerExampleColumnWarningWithoutContend,
  DividerExampleColumnDisabledLeft,
  DividerExampleColumnDisabledCenter,
  DividerExampleColumnDisabledRight,
  DividerExampleColumnErrorLeft,
  DividerExampleColumnErrorCenter,
  DividerExampleColumnErrorRight,
  DividerExampleColumnWarningLeft,
  DividerExampleColumnWarningCenter,
  DividerExampleColumnWarningRight,
  DividerExampleColumnSuccessLeft,
  DividerExampleColumnSuccessCenter,
  DividerExampleColumnSuccessRight
} from "./DividerExamples";

export const DividerExamples: React.FC = () => {
  const DIVIDER_EXAMPLES = [
    {
      key: "defaultRow",
      withoutContend: <DividerExampleRowDefaultWithoutContend />,
      alignLeft: <DividerExampleRowDefaultLeft />,
      alignCenter: <DividerExampleRowDefaultCenter />,
      alignRight: <DividerExampleRowDefaultRight />
    },
    {
      key: "activeRow",
      withoutContend: <DividerExampleRowActiveWithoutContend />,
      alignLeft: <DividerExampleRowActiveLeft />,
      alignCenter: <DividerExampleRowActiveCenter />,
      alignRight: <DividerExampleRowActiveRight />
    },
    {
      key: "filledRow",
      withoutContend: <DividerExampleRowFilledWithoutContend />,
      alignLeft: <DividerExampleRowFilledLeft />,
      alignCenter: <DividerExampleRowFilledCenter />,
      alignRight: <DividerExampleRowFilledRight />
    },
    {
      key: "disabledRow",
      withoutContend: <DividerExampleRowDisabledWithoutContend />,
      alignLeft: <DividerExampleRowDisabledLeft />,
      alignCenter: <DividerExampleRowDisabledCenter />,
      alignRight: <DividerExampleRowDisabledRight />
    },
    {
      key: "errorRow",
      withoutContend: <DividerExampleRowErrorWithoutContend />,
      alignLeft: <DividerExampleRowErrorLeft />,
      alignCenter: <DividerExampleRowErrorCenter />,
      alignRight: <DividerExampleRowErrorRight />
    },
    {
      key: "warningRow",
      withoutContend: <DividerExampleRowWarningWithoutContend />,
      alignLeft: <DividerExampleRowWarningLeft />,
      alignCenter: <DividerExampleRowWarningCenter />,
      alignRight: <DividerExampleRowWarningRight />
    },
    {
      key: "successRow",
      withoutContend: <DividerExampleRowSuccessWithoutContend />,
      alignLeft: <DividerExampleRowSuccessLeft />,
      alignCenter: <DividerExampleRowSuccessCenter />,
      alignRight: <DividerExampleRowSuccessRight />
    },

    {
      key: "defaultColumn",
      withoutContend: <DividerExampleColumnDefaultWithoutContend />,
      alignLeft: <DividerExampleColumnDefaultLeft />,
      alignCenter: <DividerExampleColumnDefaultCenter />,
      alignRight: <DividerExampleColumnDefaultRight />
    },
    {
      key: "activeColumn",
      withoutContend: <DividerExampleColumnActiveWithoutContend />,
      alignLeft: <DividerExampleColumnActiveLeft />,
      alignCenter: <DividerExampleColumnActiveCenter />,
      alignRight: <DividerExampleColumnActiveRight />
    },
    {
      key: "filledColumn",
      withoutContend: <DividerExampleColumnFilledWithoutContend />,
      alignLeft: <DividerExampleColumnFilledLeft />,
      alignCenter: <DividerExampleColumnFilledCenter />,
      alignRight: <DividerExampleColumnFilledRight />
    },
    {
      key: "disabledColumn",
      withoutContend: <DividerExampleColumnDisabledWithoutContend />,
      alignLeft: <DividerExampleColumnDisabledLeft />,
      alignCenter: <DividerExampleColumnDisabledCenter />,
      alignRight: <DividerExampleColumnDisabledRight />
    },
    {
      key: "errorColumn",
      withoutContend: <DividerExampleColumnErrorWithoutContend />,
      alignLeft: <DividerExampleColumnErrorLeft />,
      alignCenter: <DividerExampleColumnErrorCenter />,
      alignRight: <DividerExampleColumnErrorRight />
    },
    {
      key: "warningColumn",
      withoutContend: <DividerExampleColumnWarningWithoutContend />,
      alignLeft: <DividerExampleColumnWarningLeft />,
      alignCenter: <DividerExampleColumnWarningCenter />,
      alignRight: <DividerExampleColumnWarningRight />
    },
    {
      key: "successColumn",
      withoutContend: <DividerExampleColumnSuccessWithoutContend />,
      alignLeft: <DividerExampleColumnSuccessLeft />,
      alignCenter: <DividerExampleColumnSuccessCenter />,
      alignRight: <DividerExampleColumnSuccessRight />
    }
  ];

  return <StorybookDocExamples items={DIVIDER_EXAMPLES} />;
};
