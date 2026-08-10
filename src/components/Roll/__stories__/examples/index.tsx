import React, { useState } from "react";
import { IconSetting1 } from "@dmitrygrigorov/icons";
import Button from "../../../../components/Button";
import StorybookDocExamples from "../../../helpers/StorybookDocExamples";
import Footer from "./Footer";
import MainContent from "./MainContent";
import RollContent from "./RollContent";
import { RollStyled } from "./styles";

const RollExample: React.FC = () => {
  const [isOpenRoll, setIsOpenRoll] = useState(false);

  const handleClick = (): void => {
    setIsOpenRoll((prevState) => !prevState);
  };

  return (
    <RollStyled
      titleHeader="H-s"
      subTitleHeader="P2-l"
      mainContent={<MainContent />}
      rollContent={<RollContent />}
      titleSubHeader="P1-s"
      statusSubHeader="info"
      labelSubHeader="Focused label"
      isIconStatusSubHeader
      classNameContent="content-roll"
      footer={<Footer />}
      isOpenRoll={isOpenRoll}
      trailContentHeader={
        <Button icon={<IconSetting1 />} size="s" onClick={handleClick} />
      }
    />
  );
};

export const RollExamples: React.FC = () => {
  const ROLL_EXAMPLES = [
    {
      key: "main",
      main: <RollExample />
    }
  ];

  return <StorybookDocExamples items={ROLL_EXAMPLES} />;
};
