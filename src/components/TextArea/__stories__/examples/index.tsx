import React from "react";
import { IconSetting1 } from "@dmitrygrigorov/icons";
import TextArea from "../../";
import StorybookDocExamples from "../../../helpers/StorybookDocExamples";

export const TextAreaExamples: React.FC = () => {
  const TEXT_AREA_EXAMPLES = [
    {
      key: "default",
      default: <TextArea placeholder="Text" />,
      required: <TextArea placeholder="Text" isRequired />,
      icon: <TextArea placeholder="Text" iconLeft={<IconSetting1 />} />
    },
    {
      key: "focus",
      default: <TextArea placeholder="Text" value="Text" isShowClearIcon />,
      required: (
        <TextArea placeholder="Text" value="Text" isShowClearIcon isRequired />
      ),
      icon: (
        <TextArea
          placeholder="Text"
          value="Text"
          isShowClearIcon
          iconLeft={<IconSetting1 />}
        />
      )
    },
    {
      key: "disabled",
      default: <TextArea placeholder="Text" isDisabled value="Text" />,
      required: (
        <TextArea placeholder="Text" isDisabled isRequired value="Text" />
      ),
      icon: (
        <TextArea
          placeholder="Text"
          isDisabled
          iconLeft={<IconSetting1 />}
          value="Text"
        />
      )
    },
    {
      key: "error",
      default: (
        <TextArea
          statusLabel="Error label"
          status="error"
          statusText="Error text"
          value="Text"
        />
      ),
      required: (
        <TextArea
          statusLabel="Error label"
          status="error"
          statusText="Error text"
          isRequired
          value="Text"
        />
      ),
      icon: (
        <TextArea
          statusLabel="Error label"
          status="error"
          statusText="Error text"
          iconLeft={<IconSetting1 />}
          value="Text"
        />
      )
    },
    {
      key: "warning",
      default: (
        <TextArea
          statusLabel="Warning label"
          status="warning"
          statusText="Warning text"
          value="Text"
        />
      ),
      required: (
        <TextArea
          statusLabel="Warning label"
          status="warning"
          statusText="Warning text"
          isRequired
          value="Text"
        />
      ),
      icon: (
        <TextArea
          statusLabel="Warning label"
          status="warning"
          statusText="Warning text"
          iconLeft={<IconSetting1 />}
          value="Text"
        />
      )
    },
    {
      key: "success",
      default: (
        <TextArea
          statusLabel="Success label"
          status="success"
          statusText="Success text"
          value="Text"
        />
      ),
      required: (
        <TextArea
          statusLabel="Success label"
          status="success"
          statusText="Success text"
          isRequired
          value="Text"
        />
      ),
      icon: (
        <TextArea
          statusLabel="Success label"
          status="success"
          statusText="Success text"
          iconLeft={<IconSetting1 />}
          value="Text"
        />
      )
    }
  ];

  const SIZE_TABS = [
    { label: "L", value: "l" },
    { label: "M", value: "m" },
    { label: "S", value: "s" }
  ];

  return (
    <StorybookDocExamples items={TEXT_AREA_EXAMPLES} sizeTabs={SIZE_TABS} />
  );
};
