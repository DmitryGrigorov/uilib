import React from "react";
import { IconBank } from "@dmitrygrigorov/icons";
import Pagination from "../../../";

export const PaginationDefault: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  return (
    <Pagination
      currentPage={currentPage}
      totalPages={13}
      width="80vw"
      onPageChange={setCurrentPage}
    />
  );
};

export const PaginationDefaultWithSwitchers: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  return (
    <Pagination
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      totalPages={13}
      width="80vw"
      isShowSwitchers
    />
  );
};

export const PaginationDisabled: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(6);
  return (
    <Pagination
      width="382px"
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      totalPages={100}
      isShowSwitchers
      isDisabled
    />
  );
};

export const PaginationText: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  return (
    <Pagination
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      totalPages={100}
      width="382px"
      isShowSwitchers
      switcherTextPrev="Prev."
      switcherTextNext="Next"
    />
  );
};

export const PaginationWithoutArrows: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  return (
    <Pagination
      width="382px"
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      totalPages={100}
    />
  );
};

export const PaginationCurrentPage: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(48);
  return (
    <Pagination
      totalPages={100}
      width="382px"
      isShowSwitchers
      currentPage={currentPage}
      onPageChange={setCurrentPage}
    />
  );
};

export const PaginationMinimized: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  return (
    <Pagination
      totalPages={100}
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      width="180px"
      isMinimized={true}
      isShowSwitchers
      isFill
    />
  );
};

export const PaginationMinimizedDisabled: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  return (
    <Pagination
      width="180px"
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      totalPages={100}
      isMinimized
      isShowSwitchers
      isDisabled
    />
  );
};

export const PaginationCustomSwitcher: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  return (
    <Pagination
      width="382px"
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      totalPages={100}
      isShowSwitchers
      iconNext={<IconBank />}
      iconPrev={<IconBank />}
      switcherTextNext="Next"
    />
  );
};

export const PaginationFill: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  return (
    <Pagination
      width="382px"
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      totalPages={100}
      isShowSwitchers
      isFill
    />
  );
};

export const PaginationWithConfig: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  return (
    <Pagination
      isShowConfig
      currentPage={currentPage}
      totalPages={100}
      isShowSwitchers
      width="382px"
      onPageChange={setCurrentPage}
    />
  );
};

export const PaginationGoToPage: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  return (
    <Pagination
      isShowConfig
      isShowGoToPage
      currentPage={currentPage}
      totalPages={100}
      isShowSwitchers
      width="382px"
      onPageChange={setCurrentPage}
    />
  );
};

export const PaginationCustomConf: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  return (
    <Pagination
      isShowConfig
      isShowGoToPage
      paginationConf={{
        itemsPerPage: [
          { label: "100", value: 100 },
          { label: "200", value: 200 }
        ]
      }}
      currentPage={currentPage}
      totalPages={100}
      isShowSwitchers
      width="382px"
      onPageChange={setCurrentPage}
    />
  );
};

export const PaginationCustomConfOnChange: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const handleItemsPerPageChange = (value: number): void => {
    console.log(`Selected ${value} items per page`);
  };

  return (
    <Pagination
      isShowConfig
      isShowGoToPage
      paginationConf={{
        itemsPerPage: [
          { label: "100", value: 100 },
          { label: "200", value: 200 }
        ],
        onItemsPerPageChange: handleItemsPerPageChange
      }}
      currentPage={currentPage}
      totalPages={100}
      isShowSwitchers
      width="382px"
      onPageChange={setCurrentPage}
    />
  );
};
