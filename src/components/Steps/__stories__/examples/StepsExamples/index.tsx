import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../../../";
import Steps, { IStepsItem } from "../../..";

const ITEMS_FOR_USE_EXAMPLE = [
  { key: 1, title: "Step 1", description: "P2-l-1" },
  { key: 2, title: "Step 2", description: "P2-l-2" },
  { key: 3, title: "Step 3", description: "P2-l-3" },
  { key: 4, title: "Step 4", description: "P2-l-4" },
  { key: 5, title: "Step 5", description: "P2-l-5" }
] as IStepsItem[];

const ITEMS_ALL_STATE_EXAMPLE = [
  { key: 9, title: "Success" },
  { key: 10, title: "Warning", status: "warning" },
  { key: 11, title: "Error", status: "error" },
  { key: 12, title: "Waiting", status: "waiting" },
  { key: 13, title: "Current" },
  { key: 14, title: "Default", status: "default" },
  { key: 15, title: "Disabled", isDisabled: true }
] as IStepsItem[];

const ITEMS_WITH_DISABLED_EXAMPLE = [
  { key: 22, title: "Step 1", isDisabled: true },
  { key: 23, title: "Step 2", isDisabled: true, status: "error" },
  { key: 34, title: "Step 3" },
  { key: 45, title: "Step 4" }
] as IStepsItem[];

const generateKey = (step: IStepsItem): string =>
  step.key + new Date().getTime().toString();

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  gap: 15px;
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  & > div {
    display: flex;
    align-items: center;
  }
`;

export const StepsHorizontalSizeL: React.FC = () => (
  <Steps
    width="900px"
    getItemKey={generateKey}
    style={{ margin: "20px 0" }}
    size="l"
    direction="horizontal"
    steps={ITEMS_FOR_USE_EXAMPLE}
    current={3}
  />
);

export const StepsHorizontalSizeM: React.FC = () => (
  <Steps
    size="m"
    getItemKey={generateKey}
    style={{ margin: "20px 0" }}
    width="900px"
    direction="horizontal"
    steps={ITEMS_FOR_USE_EXAMPLE}
    current={3}
  />
);

export const StepsHorizontalSizeS: React.FC = () => (
  <Steps
    size="s"
    getItemKey={generateKey}
    style={{ margin: "20px 0" }}
    width="900px"
    direction="horizontal"
    steps={ITEMS_FOR_USE_EXAMPLE}
    current={3}
  />
);

export const StepsVerticalSizeL: React.FC = () => (
  <Steps
    size="l"
    getItemKey={generateKey}
    direction="vertical"
    steps={ITEMS_FOR_USE_EXAMPLE}
    current={3}
  />
);

export const StepsVerticalSizeM: React.FC = () => (
  <Steps
    size="m"
    getItemKey={generateKey}
    direction="vertical"
    steps={ITEMS_FOR_USE_EXAMPLE}
    current={3}
  />
);

export const StepsVerticalSizeS: React.FC = () => (
  <Steps
    size="s"
    getItemKey={generateKey}
    direction="vertical"
    steps={ITEMS_FOR_USE_EXAMPLE}
    current={3}
  />
);

export const StepsVerticalAllSize: React.FC = () => (
  <RowWrapper>
    <StepsVerticalSizeL />
    <StepsVerticalSizeM />
    <StepsVerticalSizeS />
  </RowWrapper>
);

export const StepsUseExample: React.FC = () => {
  const [current, setCurrent] = useState(3);

  return (
    <>
      <Steps
        style={{ margin: "20px 0" }}
        size="l"
        getItemKey={generateKey}
        steps={ITEMS_FOR_USE_EXAMPLE}
        direction="horizontal"
        current={current}
      />
      <ButtonWrapper>
        <Button size="s" onClick={() => setCurrent(Math.max(current - 1, 1))}>
          Back
        </Button>
        <Button
          size="s"
          onClick={() =>
            setCurrent(Math.min(current + 1, ITEMS_FOR_USE_EXAMPLE.length))
          }>
          Next
        </Button>
      </ButtonWrapper>
    </>
  );
};

export const StepsExampleSizeL: React.FC = () => (
  <Steps
    style={{ margin: "20px 0" }}
    size="l"
    direction="horizontal"
    current={3}
    getItemKey={generateKey}
    steps={ITEMS_FOR_USE_EXAMPLE}
  />
);

export const StepsWidthAllStateSizeL: React.FC = () => (
  <Steps
    style={{ margin: "20px 0" }}
    size="l"
    direction="horizontal"
    current={5}
    steps={ITEMS_ALL_STATE_EXAMPLE}
  />
);

export const StepsWidthImplicitStatus: React.FC = () => (
  <Steps
    style={{ margin: "20px 0" }}
    size="l"
    direction="horizontal"
    current={3}
    getItemKey={generateKey}
    steps={ITEMS_FOR_USE_EXAMPLE}
  />
);

export const StepsWidthHelpersFunction: React.FC = () => {
  const changeTitleForSomeStep = (item: IStepsItem): string | undefined => {
    if (item.title === "Step 1") {
      return "Step changed";
    }
    return undefined;
  };

  const handlerItemClick = (_: React.MouseEvent, item: IStepsItem): void => {
    if (item.key === 3) {
      item.status = "error";
    }
  };

  return (
    <Steps
      style={{ margin: "20px 0" }}
      size="l"
      direction="horizontal"
      onItemClick={handlerItemClick}
      getItemTitle={changeTitleForSomeStep}
      current={3}
      getItemKey={generateKey}
      steps={JSON.parse(JSON.stringify(ITEMS_FOR_USE_EXAMPLE))}
    />
  );
};

export const StepsWithDisabledExample: React.FC = () => (
  <Steps
    size="l"
    style={{ margin: "20px 0" }}
    current={3}
    direction="horizontal"
    steps={ITEMS_WITH_DISABLED_EXAMPLE}
  />
);
