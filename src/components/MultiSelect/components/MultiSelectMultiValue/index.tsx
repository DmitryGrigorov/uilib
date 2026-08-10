import React from "react";
import { IconUser } from "@dmitrygrigorov/icons";
import { MultiValueProps } from "react-select";
import Tag from "../../../Tag";

const MultiSelectMultiValue = <TOption,>(
  props: MultiValueProps<TOption, true>
): JSX.Element => {
  const { selectProps } = props;

  if (selectProps.type === "avatar") {
    return (
      <Tag
        size="s"
        isClosable
        isStroke
        onClickClose={props.removeProps.onClick}
        as="div"
        isReadOnly={selectProps.isReadOnly}
        isDisabled={selectProps.isDisabled}
        avatarProps={{
          icon: <IconUser />,
          image: (props.data as { url?: string }).url
        }}>
        {props.children}
      </Tag>
    );
  }

  return (
    <Tag
      size="s"
      isReadOnly={selectProps.isReadOnly}
      isClosable
      isStroke
      onClickClose={props.removeProps.onClick}
      onMouseDown={(event) => event.stopPropagation()}
      as="div"
      isDisabled={selectProps.isDisabled && !selectProps.isReadOnly}>
      {props.children}
    </Tag>
  );
};

export default MultiSelectMultiValue;
