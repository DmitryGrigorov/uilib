import React from "react";
import { Avatar, P1, P2 } from "@dmitrygrigorov/components";
import { TCellParamsAvatar } from "../types";
import { SingleAvatarStyled, TextContainer } from "../style";

const SingleAvatar = <TData, TValue>({
  value,
  data,
  node,
  column
}: TCellParamsAvatar<TData, TValue>): JSX.Element => {
  const { cellParamsGetter } = column;
  const props = cellParamsGetter({
    value,
    node,
    data,
    column
  });

  return (
    <SingleAvatarStyled>
      <Avatar
        size={props.description ? "l" : "m"}
        status={props.status}
        text={props.text}
        icon={props.icon}
        image={props.image}
      />
      <TextContainer>
        <div>
          <P1 type="phoenix">{props.title}</P1>
        </div>
        {props.description && (
          <div>
            <P2 type="pavo">{props.description}</P2>
          </div>
        )}
      </TextContainer>
    </SingleAvatarStyled>
  );
};
export default SingleAvatar;
