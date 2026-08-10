import React from "react";
import { Tag } from "@dmitrygrigorov/components";
import { MainContainer } from "./style";
import { ITagsProps } from "./types";
const Tags = <TValue,>({
  children,
  leadIcon,
  isClosable
}: ITagsProps<TValue>): JSX.Element => (
  <MainContainer>
    {Array.isArray(children) &&
      children.map((_tag, i): JSX.Element => (
        <Tag key="tag" isClosable={isClosable} leadIcon={leadIcon}>
          {children[i] as unknown as React.ReactNode}
        </Tag>
      ))}
  </MainContainer>
);

export default Tags;
