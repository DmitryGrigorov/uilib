import React, { useState } from "react";
import styled from "styled-components";
import MobileSteps from "../../../MobileSteps";
import P1 from "../../../../typography/P1";

const ContentWrapper = styled.div`
  margin: 30px 0;
  width: 300px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CenteredWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const generateKey = (step: number): string =>
  step + new Date().getTime().toString();

export const MobileStepsGalleryUseExample: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <CenteredWrapper>
      <ContentWrapper>
        <P1 type="cygnus">Current step: {currentStep}</P1>
      </ContentWrapper>
      <MobileSteps
        type="gallery"
        current={currentStep}
        steps={6}
        onChange={(step) => setCurrentStep(step)}
      />
    </CenteredWrapper>
  );
};

export const MobileStepsProgressUseExample: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <CenteredWrapper>
      <ContentWrapper>
        <P1 type="cygnus">Current step: {currentStep}</P1>
      </ContentWrapper>
      <MobileSteps
        type="progress"
        current={currentStep}
        steps={6}
        onChange={(step) => setCurrentStep(step)}
      />
    </CenteredWrapper>
  );
};

export const MobileStepsWidthGenerateKey: React.FC = () => (
  <CenteredWrapper>
    <MobileSteps
      type="progress"
      current={1}
      steps={6}
      width="600px"
      getStepKey={generateKey}
    />
  </CenteredWrapper>
);
