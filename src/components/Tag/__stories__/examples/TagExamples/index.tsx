import React, { useState } from "react";
import { IconSetting1, IconCloseSquare } from "@dmitrygrigorov/icons";
import AvatarImg from "../../../../../assets/avatar.svg";
import Tag from "../../../";
import { TTagSize } from "../../../types";

export const TagExampleChoice: React.FC<{ size?: TTagSize }> = ({ size }) => {
  const [isPressed, setIsPressed] = useState(false);
  const handleClick = (): void => {
    setIsPressed(!isPressed);
  };

  return (
    <Tag isPressed={isPressed} onClick={handleClick} size={size}>
      P2-l
    </Tag>
  );
};

export const TagExampleDefault: React.FC<{ size?: TTagSize }> = ({ size }) => {
  const [isPressed, setIsPressed] = useState(false);
  const handleClick = (): void => {
    setIsPressed(!isPressed);
  };

  return (
    <Tag
      isClosable
      size={size}
      leadIcon={<IconSetting1 />}
      isPressed={isPressed}
      onClick={handleClick}>
      P2-l
    </Tag>
  );
};

export const TagExampleDefaultDisabled: React.FC<{ size?: TTagSize }> = ({
  size
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const handleClick = (): void => {
    setIsPressed(!isPressed);
  };

  return (
    <Tag
      isClosable
      isDisabled
      size={size}
      leadIcon={<IconSetting1 />}
      isPressed={isPressed}
      onClick={handleClick}>
      P2-l
    </Tag>
  );
};

export const TagExampleClosable: React.FC<{ size?: TTagSize }> = ({ size }) => {
  const [isPressed, setIsPressed] = useState(false);
  const handleClick = (): void => {
    setIsPressed(!isPressed);
  };

  return (
    <Tag isClosable size={size} isPressed={isPressed} onClick={handleClick}>
      P2-l
    </Tag>
  );
};

export const TagExampleIconClosable: React.FC<{ size?: TTagSize }> = ({
  size
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const handleClick = (): void => {
    setIsPressed(!isPressed);
  };

  return (
    <Tag
      isClosable
      closeIcon={<IconCloseSquare />}
      size={size}
      isPressed={isPressed}
      onClick={handleClick}>
      P2-l
    </Tag>
  );
};

export const TagExampleFilter: React.FC<{ size?: TTagSize }> = ({ size }) => {
  const [isPressed, setIsPressed] = useState(false);
  const handleClick = (): void => {
    setIsPressed(!isPressed);
  };

  return (
    <Tag
      leadIcon={<IconSetting1 />}
      isClosable
      isPressed={isPressed}
      onClick={handleClick}
      size={size}>
      P2-l
    </Tag>
  );
};

export const TagExampleAvatar: React.FC<{ size?: TTagSize }> = ({ size }) => {
  const [isPressed, setIsPressed] = useState(false);
  const handleClick = (): void => {
    setIsPressed(!isPressed);
  };

  return (
    <Tag
      avatarProps={{ image: AvatarImg, status: "online" }}
      isPressed={isPressed}
      onClick={handleClick}
      size={size}>
      P2-l
    </Tag>
  );
};

export const TagExampleChoiceDisabled: React.FC<{ size?: TTagSize }> = ({
  size
}) => (
  <Tag isDisabled size={size}>
    P2-l
  </Tag>
);

export const TagExampleClosableDisabled: React.FC<{ size?: TTagSize }> = ({
  size
}) => (
  <Tag isClosable isDisabled size={size}>
    P2-l
  </Tag>
);

export const TagExampleFilterDisabled: React.FC<{ size?: TTagSize }> = ({
  size
}) => (
  <Tag isDisabled size={size}>
    P2-l
  </Tag>
);

export const TagExampleAvatarDisabled: React.FC<{ size?: TTagSize }> = ({
  size
}) => (
  <Tag avatarProps={{}} isDisabled size={size}>
    P2-l
  </Tag>
);

export const TagExampleLeadIcon: React.FC<{ size?: TTagSize }> = ({ size }) => {
  const [isPressed, setIsPressed] = useState(false);
  const handleClick = (): void => {
    setIsPressed(!isPressed);
  };

  return (
    <Tag
      size={size}
      leadIcon={<IconSetting1 />}
      isPressed={isPressed}
      onClick={handleClick}>
      P2-l
    </Tag>
  );
};

export const TagExampleStroke: React.FC<{ size?: TTagSize }> = ({ size }) => {
  const [isPressed, setIsPressed] = useState(false);
  const handleClick = (): void => {
    setIsPressed(!isPressed);
  };

  return (
    <Tag
      isClosable
      isStroke
      size={size}
      leadIcon={<IconSetting1 />}
      isPressed={isPressed}
      onClick={handleClick}>
      P2-l
    </Tag>
  );
};

export const TagExampleStrokeDisabled: React.FC<{ size?: TTagSize }> = ({
  size
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const handleClick = (): void => {
    setIsPressed(!isPressed);
  };

  return (
    <Tag
      isClosable
      isStroke
      isDisabled
      size={size}
      leadIcon={<IconSetting1 />}
      isPressed={isPressed}
      onClick={handleClick}>
      P2-l
    </Tag>
  );
};

export const TagExampleStrokeAvatar: React.FC<{ size?: TTagSize }> = ({
  size
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const handleClick = (): void => {
    setIsPressed(!isPressed);
  };

  return (
    <Tag
      isStroke
      avatarProps={{ image: AvatarImg, status: "online" }}
      isPressed={isPressed}
      onClick={handleClick}
      size={size}>
      P2-l
    </Tag>
  );
};

export const TagExampleStrokeAvatarDisabled: React.FC<{ size?: TTagSize }> = ({
  size
}) => (
  <Tag avatarProps={{}} isDisabled isStroke size={size}>
    P2-l
  </Tag>
);

export const TagExampleStrokeChoice: React.FC<{ size?: TTagSize }> = ({
  size
}) => (
  <Tag isPressed isStroke size={size}>
    P2-l
  </Tag>
);

export const TagExampleStrokeChoiceDisabled: React.FC<{ size?: TTagSize }> = ({
  size
}) => (
  <Tag isStroke isDisabled size={size}>
    P2-l
  </Tag>
);
