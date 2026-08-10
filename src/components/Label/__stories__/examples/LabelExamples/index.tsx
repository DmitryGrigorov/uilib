import React from "react";
import { IconSetting1 } from "@dmitrygrigorov/icons";
import Label from "../../../";
import { TLabelSize } from "../../../types";

export const LabelExampleStatusFilled: React.FC<{ size?: TLabelSize }> = ({
  size
}) => (
  <Label status="filled" size={size}>
    Label
  </Label>
);

export const LabelExampleStatusInfo: React.FC<{ size?: TLabelSize }> = ({
  size
}) => (
  <Label status="info" size={size}>
    Label
  </Label>
);

export const LabelExampleStatusFocused: React.FC<{ size?: TLabelSize }> = ({
  size
}) => (
  <Label status="focused" size={size}>
    Label
  </Label>
);

export const LabelExampleStatusError: React.FC<{ size?: TLabelSize }> = ({
  size
}) => (
  <Label status="error" size={size}>
    Label
  </Label>
);

export const LabelExampleStatusSuccess: React.FC<{ size?: TLabelSize }> = ({
  size
}) => (
  <Label status="success" size={size}>
    Label
  </Label>
);

export const LabelExampleStatusWarning: React.FC<{ size?: TLabelSize }> = ({
  size
}) => (
  <Label status="warning" size={size}>
    Label
  </Label>
);

export const LabelExampleStatusFilledWithIcon: React.FC<{
  size?: TLabelSize;
}> = ({ size }) => (
  <Label
    status="filled"
    size={size}
    icon={<IconSetting1 width={12} height={12} />}>
    Label
  </Label>
);

export const LabelExampleStatusInfoWithIcon: React.FC<{
  size?: TLabelSize;
}> = ({ size }) => (
  <Label status="info" size={size} isIcon>
    Label
  </Label>
);

export const LabelExampleStatusFocusedWithIcon: React.FC<{
  size?: TLabelSize;
}> = ({ size }) => (
  <Label
    status="focused"
    size={size}
    icon={<IconSetting1 width={12} height={12} />}>
    Label
  </Label>
);

export const LabelExampleStatusErrorWithIcon: React.FC<{
  size?: TLabelSize;
}> = ({ size }) => (
  <Label status="error" size={size} isIcon>
    Label
  </Label>
);

export const LabelExampleStatusSuccessWithIcon: React.FC<{
  size?: TLabelSize;
}> = ({ size }) => (
  <Label status="success" size={size} isIcon>
    Label
  </Label>
);

export const LabelExampleStatusWarningWithIcon: React.FC<{
  size?: TLabelSize;
}> = ({ size }) => (
  <Label status="warning" size={size} isIcon>
    Label
  </Label>
);

export const LabelExampleStatusFilledWithIconDisabled: React.FC<{
  size?: TLabelSize;
}> = ({ size }) => (
  <Label
    status="filled"
    size={size}
    icon={<IconSetting1 width={12} height={12} />}
    isDisabled>
    Label
  </Label>
);

export const LabelExampleStatusFilledDisabled: React.FC<{
  size?: TLabelSize;
}> = ({ size }) => (
  <Label status="filled" size={size} isIcon isDisabled>
    Label
  </Label>
);

export const LabelExampleStatusFilledRequired: React.FC<{
  size?: TLabelSize;
}> = ({ size }) => (
  <Label status="filled" size={size} isRequired={true}>
    Label
  </Label>
);

export const LabelExampleDisabledRequired: React.FC<{
  size?: TLabelSize;
}> = ({ size }) => (
  <Label status="filled" isRequired={true} size={size} isIcon isDisabled>
    Label
  </Label>
);
