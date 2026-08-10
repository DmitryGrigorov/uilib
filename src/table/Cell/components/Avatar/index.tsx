import React from "react";
import { Avatar } from "@dmitrygrigorov/components";
import { TCellParamsAvatar } from "./types";
import { MainContainer, MultipleAvatar, StyledCounter } from "./style";
import SingleAvatar from "./components/SingleAvatar";

const AvatarCells = <TData, TValue>({
  value,
  data,
  node,
  column
}: TCellParamsAvatar<TData, TValue>): JSX.Element => (
  <MainContainer>
    {Array.isArray(value) ? (
      <MultipleAvatar>
        {value.slice(0, 5).map((avatar): any => (
          <Avatar
            key={avatar.id}
            size="m"
            {...column.cellParamsGetter({
              value: avatar,
              node,
              data,
              column
            })}
          />
        ))}
        {value.length > 5 ? (
          <StyledCounter type="corvus">
            {"+" + String(value.length - 5)}
          </StyledCounter>
        ) : null}
      </MultipleAvatar>
    ) : (
      <SingleAvatar column={column} node={node} data={data} value={value} />
    )}
  </MainContainer>
);
export default AvatarCells;
