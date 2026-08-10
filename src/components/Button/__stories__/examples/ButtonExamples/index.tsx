import React from "react";
import { IconSetting1 } from "@dmitrygrigorov/icons";
import Button from "../../../";
import { TButtonSize } from "../../../types";

export const ButtonTextPlusIconPrimary: React.FC<{ size?: TButtonSize }> = ({
  size
}) => (
  <Button icon={<IconSetting1 />} viewType="primary" size={size}>
    P1-s
  </Button>
);

export const ButtonTextPlusIconPrimaryDisabled: React.FC<{
  size?: TButtonSize;
}> = ({ size }) => (
  <Button icon={<IconSetting1 />} viewType="primary" size={size} isDisabled>
    P1-s
  </Button>
);

export const ButtonIconPrimary: React.FC<{ size?: TButtonSize }> = ({
  size
}) => <Button icon={<IconSetting1 />} viewType="primary" size={size} />;

export const ButtonIconPrimaryDisabled: React.FC<{ size?: TButtonSize }> = ({
  size
}) => (
  <Button icon={<IconSetting1 />} viewType="primary" size={size} isDisabled />
);

export const ButtonTextPrimary: React.FC<{ size?: TButtonSize }> = ({
  size
}) => (
  <Button viewType="primary" size={size}>
    P1-s
  </Button>
);
export const ButtonTextPrimaryS: React.FC = () => (
  <Button viewType="primary" size={"s"}>
    P1-s
  </Button>
);

export const ButtonTextPrimaryDisabled: React.FC<{ size?: TButtonSize }> = ({
  size
}) => (
  <Button viewType="primary" size={size} isDisabled>
    P1-s
  </Button>
);

export const ButtonTextPlusIconSecondary: React.FC<{ size?: TButtonSize }> = ({
  size
}) => (
  <Button icon={<IconSetting1 />} viewType="secondary" size={size}>
    P1-s
  </Button>
);

export const ButtonTextPlusIconSecondaryDisabled: React.FC<{
  size?: TButtonSize;
}> = ({ size }) => (
  <Button icon={<IconSetting1 />} viewType="secondary" size={size} isDisabled>
    P1-s
  </Button>
);

export const ButtonIconSecondary: React.FC<{ size?: TButtonSize }> = ({
  size
}) => <Button icon={<IconSetting1 />} viewType="secondary" size={size} />;

export const ButtonIconSecondaryDisabled: React.FC<{ size?: TButtonSize }> = ({
  size
}) => (
  <Button icon={<IconSetting1 />} viewType="secondary" size={size} isDisabled />
);

export const ButtonTextSecondary: React.FC<{ size?: TButtonSize }> = ({
  size
}) => (
  <Button viewType="secondary" size={size}>
    P1-s
  </Button>
);

export const ButtonTextSecondaryDisabled: React.FC<{ size?: TButtonSize }> = ({
  size
}) => (
  <Button viewType="secondary" size={size} isDisabled>
    P1-s
  </Button>
);

export const ButtonTextPlusIconGhost: React.FC<{ size?: TButtonSize }> = ({
  size
}) => (
  <Button icon={<IconSetting1 />} viewType="ghost" size={size}>
    P1-s
  </Button>
);

export const ButtonTextPlusIconGhostDisabled: React.FC<{
  size?: TButtonSize;
}> = ({ size }) => (
  <Button icon={<IconSetting1 />} viewType="ghost" size={size} isDisabled>
    P1-s
  </Button>
);

export const ButtonIconGhost: React.FC<{ size?: TButtonSize }> = ({ size }) => (
  <Button icon={<IconSetting1 />} viewType="ghost" size={size} />
);

export const ButtonIconGhostDisabled: React.FC<{ size?: TButtonSize }> = ({
  size
}) => (
  <Button icon={<IconSetting1 />} viewType="ghost" size={size} isDisabled />
);

export const ButtonTextGhost: React.FC<{ size?: TButtonSize }> = ({ size }) => (
  <Button viewType="ghost" size={size}>
    P1-s
  </Button>
);

export const ButtonTextGhostDisabled: React.FC<{ size?: TButtonSize }> = ({
  size
}) => (
  <Button viewType="ghost" size={size} isDisabled>
    P1-s
  </Button>
);

export const ButtonTextPlusIconLink: React.FC<{ size?: TButtonSize }> = ({
  size
}) => (
  <Button icon={<IconSetting1 />} viewType="link" size={size}>
    P1-s
  </Button>
);

export const ButtonTextPlusIconLinkDisabled: React.FC<{
  size?: TButtonSize;
}> = ({ size }) => (
  <Button icon={<IconSetting1 />} viewType="link" size={size} isDisabled>
    P1-s
  </Button>
);

export const ButtonIconLink: React.FC<{ size?: TButtonSize }> = ({ size }) => (
  <Button icon={<IconSetting1 />} viewType="link" size={size} />
);

export const ButtonIconLinkDisabled: React.FC<{ size?: TButtonSize }> = ({
  size
}) => <Button icon={<IconSetting1 />} viewType="link" size={size} isDisabled />;

export const ButtonTextLink: React.FC<{ size?: TButtonSize }> = ({ size }) => (
  <Button viewType="link" size={size}>
    P1-s
  </Button>
);

export const ButtonTextLinkDisabled: React.FC<{ size?: TButtonSize }> = ({
  size
}) => (
  <Button viewType="link" size={size} isDisabled>
    P1-s
  </Button>
);

export const ButtonIcon: React.FC<{ size?: TButtonSize }> = ({ size }) => (
  <Button viewType="icon" size={size}>
    <IconSetting1 />
  </Button>
);

export const ButtonTextPlusIconPrimaryColor: React.FC<{
  size?: TButtonSize;
}> = ({ size }) => (
  <Button icon={<IconSetting1 />} viewType="primary" size={size} color="red">
    P1-s
  </Button>
);

export const ButtonTextPlusIconSecondaryColor: React.FC<{
  size?: TButtonSize;
}> = ({ size }) => (
  <Button icon={<IconSetting1 />} viewType="secondary" size={size} color="gray">
    P1-s
  </Button>
);

export const ButtonBusy: React.FC<{
  size?: TButtonSize;
}> = ({ size }) => (
  <Button isLoading size={size}>
    Please wait...
  </Button>
);
