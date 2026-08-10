import React from "react";
import { IconSetting1 } from "@dmitrygrigorov/icons";
import StorybookDocExamples from "../../../helpers/StorybookDocExamples";
import MapObject from "../../";

const MapObjectExample: React.FC = () => {
  const MAP_OBJECT_EXAMPLE = [
    {
      key: "default",
      additional: <MapObject typeColor="additional" icon={<IconSetting1 />} />,
      danger: <MapObject typeColor="danger" icon={<IconSetting1 />} />,
      positive: <MapObject typeColor="positive" icon={<IconSetting1 />} />,
      warning: <MapObject typeColor="warning" icon={<IconSetting1 />} />,
      disabled: (
        <MapObject typeColor="warning" icon={<IconSetting1 />} isDisabled />
      )
    },
    {
      key: "isChecked",
      additional: (
        <MapObject typeColor="additional" icon={<IconSetting1 />} isChecked />
      ),
      danger: (
        <MapObject typeColor="danger" icon={<IconSetting1 />} isChecked />
      ),
      positive: (
        <MapObject typeColor="positive" icon={<IconSetting1 />} isChecked />
      ),
      warning: (
        <MapObject typeColor="warning" icon={<IconSetting1 />} isChecked />
      ),
      disabled: (
        <MapObject
          typeColor="warning"
          icon={<IconSetting1 />}
          isDisabled
          isChecked
        />
      )
    }
  ];

  return <StorybookDocExamples items={MAP_OBJECT_EXAMPLE} />;
};

export default MapObjectExample;
