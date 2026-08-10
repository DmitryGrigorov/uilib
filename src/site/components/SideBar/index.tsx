import React, { useState, useMemo, ChangeEvent, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import SearchBox from "../../../components/SearchBox";
import { Tree } from "../../../components/Tree";
// These generated files are available only after the build step.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import * as pages from "../../build/pages";
// These generated files are available only after the build step.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import * as componentsPage from "../../build/components";
import { ICreateComponentStand, IPageConfig } from "../../types";
import { SideBarStyled, SideBarTreeWrapper } from "./styles";
import { getSourceTreeComponentList, getSourceTreePagesList } from "./helpers";

const SideBar: React.FC = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const listMenu = useMemo(
    () =>
      getSourceTreePagesList(
        Object.values<IPageConfig>(pages).filter(({ mainPage }) => !mainPage),
        search
      ),
    [search]
  );

  const listComponents = useMemo(
    () => [
      {
        id: "Components",
        title: "Components",
        elements: getSourceTreeComponentList(
          Object.values<ICreateComponentStand>(componentsPage).map(
            (component) => component.componentStand
          ),
          search
        )
      }
    ],
    [search]
  );

  const handleClickItemMenu = (page: string): void => {
    navigate(page);
  };

  const handleSearch = (
    _: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>,
    value: string
  ): void => {
    setSearch(value.toLocaleLowerCase());
  };

  return (
    <SideBarStyled $colEnd={5} $colStart={1}>
      <div>
        <SearchBox className="sidebar-child" onChange={handleSearch} />
      </div>
      <SideBarTreeWrapper>
        <Tree
          title="About the design system"
          dataSource={listMenu}
          className="sidebar-tree"
          onItemClick={({ id, elements }) =>
            !elements?.length && handleClickItemMenu(String(id))
          }
        />
        <Tree
          title="Components"
          dataSource={listComponents}
          onItemClick={({ id, elements }) =>
            !elements?.length &&
            handleClickItemMenu(`/components/${String(id)}`)
          }
        />
      </SideBarTreeWrapper>
    </SideBarStyled>
  );
};

export default SideBar;
