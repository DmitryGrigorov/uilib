import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "./Input";

describe("Input", () => {
  it("renders with its standard attributes", () => {
    render(
      <Input
        id="email"
        name="email"
        placeholder="Email"
        testId="email"
        value=""
      />
    );
    const input = screen.getByRole("textbox");

    expect(input).toHaveAttribute("id", "email");
    expect(input).toHaveAttribute("name", "email");
    expect(input).toHaveAttribute("autocomplete", "on");
    expect(screen.getByTestId("email-placeholder")).toHaveTextContent("Email");
  });

  it("reports typed values and the component id", async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    render(<Input id="login" testId="login" value="" onChange={onChange} />);

    await user.type(screen.getByRole("textbox"), "alex");

    expect(onChange).toHaveBeenCalledTimes(4);
    expect(onChange).toHaveBeenLastCalledWith(
      expect.any(Object),
      "x",
      "login"
    );
  });

  it("supports focus, blur, and keyboard callbacks", async () => {
    const user = userEvent.setup();
    const onFocus = jest.fn();
    const onBlur = jest.fn();
    const onKeyDown = jest.fn();
    render(
      <Input
        testId="query"
        value="query"
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
      />
    );

    await user.tab();
    await user.keyboard("{Enter}");
    await user.tab();

    expect(onFocus).toHaveBeenCalledTimes(1);
    expect(onKeyDown).toHaveBeenCalledWith(
      expect.objectContaining({ key: "Enter" })
    );
    expect(onBlur).toHaveBeenCalledWith(expect.any(Object), "query");
  });

  it("prevents editing when disabled", async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    render(
      <Input isDisabled testId="disabled" value="locked" onChange={onChange} />
    );

    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();
    await user.type(input, " value");
    expect(onChange).not.toHaveBeenCalled();
  });

  it("renders status and read-only fallback text", () => {
    const { rerender } = render(
      <Input
        testId="status"
        value=""
        status="error"
        statusText="Required field"
      />
    );
    expect(screen.getByTestId("status_status-text")).toHaveTextContent(
      "Required field"
    );

    rerender(<Input testId="readonly" value="" isReadOnly />);
    expect(screen.getByRole("textbox")).toHaveValue("Not provided");
    expect(screen.getByRole("textbox")).toHaveAttribute("readonly");
  });
});
