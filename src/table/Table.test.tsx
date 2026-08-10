import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import { LIGHT_THEME } from "../components/Pallette/themes";
import Table from "./Table";
import { TColumn } from "./types";

type Person = { id: string; name: string; role: string };

const rows: Person[] = [
  { id: "1", name: "Ada", role: "Engineer" },
  { id: "2", name: "Grace", role: "Architect" }
];

const columns: TColumn<Person>[] = [
  { field: "name", title: "Name" },
  { field: "role", title: "Role" }
];

describe("Table", () => {
  it("renders semantic table headers and row data", () => {
    render(<Table columns={columns} rowData={rows} />);

    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(screen.getByRole("columnheader", { name: "Name" })).toBeVisible();
    expect(screen.getByRole("columnheader", { name: "Role" })).toBeVisible();
    expect(screen.getByText("Ada")).toBeVisible();
    expect(screen.getByText("Architect")).toBeVisible();
  });

  it("renders a custom empty state", () => {
    render(
      <Table
        columns={columns}
        rowData={[]}
        noDataComponent={<div>No matching people</div>}
      />
    );
    expect(screen.getByText("No matching people")).toBeVisible();
  });

  it("delivers the clicked row payload", async () => {
    const user = userEvent.setup();
    const rowClicked = jest.fn();
    render(<Table columns={columns} rowData={rows} rowClicked={rowClicked} />);

    await user.click(screen.getByText("Ada"));
    expect(rowClicked).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({ id: "1", name: "Ada" }),
        rowIndex: 0
      })
    );
  });

  it("supports row selection and reports selected data", async () => {
    const user = userEvent.setup();
    const onRowSelected = jest.fn();
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <Table
          columns={columns}
          rowData={rows}
          isCheckboxSelection
          onRowSelected={onRowSelected}
        />
      </ThemeProvider>
    );

    const checkboxes = screen.getAllByRole("checkbox");
    await user.click(checkboxes.at(-1) as HTMLElement);
    expect(onRowSelected).toHaveBeenCalledWith(
      expect.objectContaining({ isSelected: true, rowIndex: 1 })
    );
  });

  it("filters rows through the header search callback", async () => {
    const user = userEvent.setup();
    const onSearch = jest.fn();
    render(
      <Table
        title="People"
        columns={columns}
        rowData={rows}
        isSearch
        onSearch={onSearch}
        placeholderSearch="Search people"
      />
    );

    const input = screen.getByRole("textbox");
    await user.type(input, "Ada");
    await waitFor(() => expect(onSearch).toHaveBeenCalled(), { timeout: 1500 });
  });
});
