import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Button", () => {
  it("renders a semantic button with its default props", () => {
    render(<Button>Save</Button>);

    expect(screen.getByRole("button", { name: "Save" })).toBeInTheDocument();
    expect(screen.getByTestId("button").tagName).toBe("BUTTON");
  });

  it.each(["l", "m", "s", "xs"] as const)("renders size %s", (size) => {
    render(<Button size={size}>Save</Button>);
    expect(screen.getByRole("button", { name: "Save" })).toBeVisible();
  });

  it.each(["primary", "secondary", "ghost"] as const)(
    "renders the %s view",
    (viewType) => {
      render(<Button viewType={viewType}>Action</Button>);
      expect(screen.getByRole("button", { name: "Action" })).toBeEnabled();
    }
  );

  it("calls onClick from mouse and keyboard activation", async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Continue</Button>);
    const button = screen.getByRole("button", { name: "Continue" });

    await user.click(button);
    button.focus();
    await user.keyboard("{Enter}");
    await user.keyboard(" ");

    expect(onClick).toHaveBeenCalledTimes(3);
  });

  it("is disabled and does not invoke callbacks", async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();
    render(
      <Button isDisabled onClick={onClick} aria-disabled="true">
        Delete
      </Button>
    );
    const button = screen.getByRole("button", { name: "Delete" });

    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-disabled", "true");
    await user.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });

  it("blocks activation and displays a progress indicator while loading", async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();
    render(
      <Button isLoading onClick={onClick} aria-label="Saving">
        Save
      </Button>
    );

    await user.click(screen.getByRole("button", { name: "Saving" }));
    expect(onClick).not.toHaveBeenCalled();
    expect(screen.getByTestId("button").querySelector("svg")).not.toBeNull();
  });

  it("renders link view as an anchor", () => {
    render(
      <Button viewType="link" href="/docs">
        Documentation
      </Button>
    );
    expect(screen.getByRole("link", { name: "Documentation" })).toHaveAttribute(
      "href",
      "/docs"
    );
  });
});
