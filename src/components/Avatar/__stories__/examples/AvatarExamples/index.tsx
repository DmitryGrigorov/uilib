import React from "react";
import { IconUser, IconForbidden4 } from "@dmitrygrigorov/icons";
import { Avatar } from "../../../";
import AvatarImg from "../../../../../assets/avatar.svg";
import { TAvatarSize } from "../../../types";
import { AvatarExampleWrapper } from "./styles";

export const AvatarIcon: React.FC<{ size?: TAvatarSize }> = ({ size }) => (
  <Avatar status={"online"} size={size} icon={<IconUser />} />
);

export const AvatarText: React.FC<{ size?: TAvatarSize }> = ({ size }) => (
  <Avatar status={"online"} size={size} text="A" />
);

export const AvatarImage: React.FC<{ size?: TAvatarSize }> = ({ size }) => (
  <Avatar status={"online"} size={size} image={AvatarImg} />
);

export const AvatarImageCustomHoverIcon: React.FC<{ size?: TAvatarSize }> = ({
  size
}) => <Avatar status={"online"} size={size} image={AvatarImg} />;

export const AvatarDisabled: React.FC<{ size?: TAvatarSize }> = ({ size }) => (
  <Avatar status={"online"} size={size} isDisabled />
);

export const AvatarDisabledCustomIcon: React.FC<{ size?: TAvatarSize }> = ({
  size
}) => (
  <Avatar
    status={"online"}
    size={size}
    isDisabled
    disabledIcon={<IconForbidden4 />}
  />
);

export const AvatarExampleStatus: React.FC = () => (
  <AvatarExampleWrapper>
    <Avatar status="online" text="A" />
    <Avatar status="offline" text="A" />
    <Avatar status="busy" text="A" />
    <Avatar status="disabled" text="A" />
  </AvatarExampleWrapper>
);

export const AvatarExampleSize: React.FC = () => (
  <AvatarExampleWrapper>
    <Avatar status="online" text="AA" size="xl" />
    <Avatar status="online" text="AA" size="l" />
    <Avatar status="online" text="AA" size="m" />
    <Avatar status="online" text="AA" size="s" />
    <Avatar status="online" text="AA" size="xs" />
  </AvatarExampleWrapper>
);

export const AvatarExampleUser: React.FC = () => (
  <AvatarExampleWrapper>
    <AvatarImage />
    <AvatarText />
  </AvatarExampleWrapper>
);

export const AvatarClick: React.FC<{ size?: TAvatarSize }> = ({ size }) => (
  <Avatar
    status={"online"}
    size={size}
    icon={<IconUser />}
    onClick={() => null}
  />
);
