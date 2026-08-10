import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Select from "./index";

const options = [
  { label: "Primary", value: "primary" },
  { label: "Neutral", value: "neutral" },
  { label: "Orange", value: "orange", isDisabled: true }
];

describe("Select", () => {
  it("renders a labelled combobox and placeholder", () => {
    render(
      <>
        <label htmlFor="color-select">Color</label>
        <Select inputId="color-select" options={options} placeholder="Choose" />
      </>
    );

    expect(screen.getByRole("combobox", { name: "Color" })).toBeInTheDocument();
    expect(screen.getByText("Choose")).toBeVisible();
  });

  it("opens with keyboard and returns the selected instance", async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    render(<Select inputId="variant" options={options} onChange={onChange} />);
    const combobox = screen.getByRole("combobox");

    await user.click(combobox);
    await user.keyboard("{ArrowDown}");
    expect(combobox).toHaveAttribute("aria-expanded", "true");
    await user.click(screen.getByText("Primary"));

    expect(onChange).toHaveBeenCalledWith(
      options[0],
      expect.objectContaining({ action: "select-option" })
    );
  });

  it("can return only the configured value", async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    render(
      <Select
        inputId="semantic-color"
        options={options}
        onChangeReturnType="value"
        onChange={onChange}
      />
    );

    await user.click(screen.getByRole("combobox"));
    await user.click(screen.getByText("Neutral"));
    expect(onChange).toHaveBeenCalledWith(
      "neutral",
      expect.objectContaining({ action: "select-option" })
    );
  });

  it("does not open or change when disabled", async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    render(<Select options={options} isDisabled onChange={onChange} />);

    expect(screen.queryByRole("combobox")).not.toBeInTheDocument();
    expect(document.querySelector("input")).toBeDisabled();
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
    expect(onChange).not.toHaveBeenCalled();
  });

  it("filters searchable options from typed input", async () => {
    const user = userEvent.setup();
    render(<Select options={options} isSearchable />);

    const combobox = screen.getByRole("combobox");
    await user.click(combobox);
    await user.type(combobox, "Neu");

    expect(screen.getByText("Neutral")).toBeVisible();
    expect(screen.queryByText("Primary")).toBeNull();
  });
});
