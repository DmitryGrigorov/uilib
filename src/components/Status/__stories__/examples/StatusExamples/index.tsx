import React from "react";
import { IconSetting1 } from "@dmitrygrigorov/icons";
import Status from "../../../";

export const StatusCompleted: React.FC = () => (
  <Status
    status="completed"
    leadIcon={<IconSetting1 />}
    trailIcon={<IconSetting1 />}>
    Label
  </Status>
);

export const StatusProcessing: React.FC = () => (
  <Status
    status="processing"
    leadIcon={<IconSetting1 />}
    trailIcon={<IconSetting1 />}>
    Label
  </Status>
);

export const StatusSuccess: React.FC = () => (
  <Status
    status="success"
    leadIcon={<IconSetting1 />}
    trailIcon={<IconSetting1 />}>
    Label
  </Status>
);

export const StatusWarning: React.FC = () => (
  <Status
    status="warning"
    leadIcon={<IconSetting1 />}
    trailIcon={<IconSetting1 />}>
    Label
  </Status>
);

export const StatusError: React.FC = () => (
  <Status
    status="error"
    leadIcon={<IconSetting1 />}
    trailIcon={<IconSetting1 />}>
    Label
  </Status>
);

export const StatusColorCyan: React.FC = () => (
  <Status
    colorType="cyan"
    leadIcon={<IconSetting1 />}
    trailIcon={<IconSetting1 />}>
    Label
  </Status>
);

export const StatusColorGreen: React.FC = () => (
  <Status
    colorType="green"
    leadIcon={<IconSetting1 />}
    trailIcon={<IconSetting1 />}>
    Label
  </Status>
);

export const StatusColorYellow: React.FC = () => (
  <Status
    colorType="yellow"
    leadIcon={<IconSetting1 />}
    trailIcon={<IconSetting1 />}>
    Label
  </Status>
);

export const StatusColorPurple: React.FC = () => (
  <Status
    colorType="purple"
    leadIcon={<IconSetting1 />}
    trailIcon={<IconSetting1 />}>
    Label
  </Status>
);

export const StatusCompletedFilled: React.FC = () => (
  <Status
    isFilled
    status="completed"
    leadIcon={<IconSetting1 />}
    trailIcon={<IconSetting1 />}>
    Label
  </Status>
);

export const StatusProcessingFilled: React.FC = () => (
  <Status
    status="processing"
    isFilled
    leadIcon={<IconSetting1 />}
    trailIcon={<IconSetting1 />}>
    Label
  </Status>
);

export const StatusSuccessFilled: React.FC = () => (
  <Status
    status="success"
    isFilled
    leadIcon={<IconSetting1 />}
    trailIcon={<IconSetting1 />}>
    Label
  </Status>
);

export const StatusWarningFilled: React.FC = () => (
  <Status
    status="warning"
    isFilled
    leadIcon={<IconSetting1 />}
    trailIcon={<IconSetting1 />}>
    Label
  </Status>
);

export const StatusErrorFilled: React.FC = () => (
  <Status
    status="error"
    isFilled
    leadIcon={<IconSetting1 />}
    trailIcon={<IconSetting1 />}>
    Label
  </Status>
);

export const StatusCyanFilled: React.FC = () => (
  <Status
    colorType="cyan"
    isFilled
    leadIcon={<IconSetting1 />}
    trailIcon={<IconSetting1 />}>
    Label
  </Status>
);

export const StatusGreenFilled: React.FC = () => (
  <Status
    colorType="green"
    isFilled
    leadIcon={<IconSetting1 />}
    trailIcon={<IconSetting1 />}>
    Label
  </Status>
);

export const StatusYellowFilled: React.FC = () => (
  <Status
    colorType="yellow"
    isFilled
    leadIcon={<IconSetting1 />}
    trailIcon={<IconSetting1 />}>
    Label
  </Status>
);

export const StatusPurpleFilled: React.FC = () => (
  <Status
    colorType="purple"
    isFilled
    leadIcon={<IconSetting1 />}
    trailIcon={<IconSetting1 />}>
    Label
  </Status>
);

export const StatusErrorLeadIcon: React.FC = () => (
  <Status status="completed" leadIcon={<IconSetting1 />}>
    Label
  </Status>
);

export const StatusErrorTrailIcon: React.FC = () => (
  <Status status="completed" trailIcon={<IconSetting1 />}>
    Label
  </Status>
);

export const StatusErrorAllIcons: React.FC = () => (
  <Status
    status="completed"
    trailIcon={<IconSetting1 />}
    leadIcon={<IconSetting1 />}>
    Label
  </Status>
);

export const StatusClear: React.FC = () => (
  <Status status="completed">Label</Status>
);

export const StatusFilled: React.FC = () => (
  <Status status="completed" isFilled>
    Label
  </Status>
);

export const StatusPurple: React.FC = () => (
  <Status colorType="purple">Label</Status>
);

export const StatusDisabled: React.FC = () => (
  <Status isFilled isDisabled>
    Label
  </Status>
);

export const StatusPressed: React.FC = () => (
  <Status isFilled isPressed>
    Label
  </Status>
);

export const StatusHover: React.FC = () => (
  <Status isFilled canHover>
    Label
  </Status>
);
