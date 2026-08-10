import React, { useState, ChangeEvent, MouseEvent } from "react";
import SearchBox from "../../../components/SearchBox";
import { useSnackBar } from "../../../components/SnackBar";
import * as Icons from "../../tsx";
import { IconContainer, IconsContainer, ListItemsStyled } from "./styles";

const ListIcons: React.FC = () => {
  const [icons, setIcons] = useState<
    Array<React.FC<React.SVGProps<SVGSVGElement>>>
  >(Object.values(Icons));
  const [openSnackBar] = useSnackBar();

  const handleSearchIcons = (
    _: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>,
    search: string
  ): void => {
    setIcons(
      Object.values<React.FC<React.SVGProps<SVGSVGElement>>>(Icons).filter(
        ({ name }) => name?.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  const handleCopy = async (name?: string): Promise<void> => {
    if (name) {
      await navigator.clipboard.writeText(`<${name} />`);
      openSnackBar({
        message: `<${name} /> copied!`
      });
    }
  };

  return (
    <ListItemsStyled>
      <SearchBox
        placeholder="Search icons"
        className="searchbox"
        onChange={handleSearchIcons}
      />
      <IconsContainer>
        {icons.map((Icon) => (
          <IconContainer
            viewType="ghost"
            key={Icon.name}
            onClick={() => handleCopy(Icon.name)}>
            <Icon width={24} height={24} />
            <p>{Icon.name}</p>
          </IconContainer>
        ))}
      </IconsContainer>
    </ListItemsStyled>
  );
};

export default ListIcons;
