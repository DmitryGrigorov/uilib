import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ThemeSwitch from "./ThemeSwitch";

jest.mock("motion/react", () => {
  const actual = jest.requireActual("motion/react");
  return { ...actual, useReducedMotion: () => true };
});

describe("ThemeSwitch", () => {
  it("exposes switch semantics for the light theme", () => {
    render(<ThemeSwitch themeSelected="light" />);
    expect(
      screen.getByRole("switch", { name: "Switch theme" })
    ).toHaveAttribute("aria-checked", "false");
  });

  it("marks the switch checked for the dark theme", () => {
    render(<ThemeSwitch themeSelected="dark" size="xl" />);
    expect(screen.getByRole("switch")).toHaveAttribute("aria-checked", "true");
  });

  it("returns the next custom theme from click and keyboard activation", async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    render(
      <ThemeSwitch
        themeSelected="day"
        themes={["day", "night"]}
        onChange={onChange}
      />
    );
    const control = screen.getByRole("switch");

    await user.click(control);
    control.focus();
    await user.keyboard("{Enter}");
    await user.keyboard(" ");

    expect(onChange).toHaveBeenCalledTimes(3);
    expect(onChange.mock.calls[0][1]).toBe("night");
  });

  it("uses native disabled behavior", async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    render(<ThemeSwitch themeSelected="light" disabled onChange={onChange} />);
    const control = screen.getByRole("switch");

    expect(control).toBeDisabled();
    await user.click(control);
    expect(onChange).not.toHaveBeenCalled();
  });
});
