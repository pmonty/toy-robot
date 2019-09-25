import * as React from "react";
import { render, fireEvent } from "@testing-library/react";

import { Command } from "../../../app/components/command";

test("shows command input", () => {
  const reset = jest.fn();
  const handleCommand = jest.fn();

  const { getByText, getByTestId, container } = render(
    <Command handleCommand={handleCommand} reset={reset} />
  );

  fireEvent.click(getByText("Reset"));
  expect(getByTestId("command-input")).toHaveValue("");
  expect(reset).toHaveBeenCalled();

  fireEvent.change(getByTestId("command-input"), {
    target: { value: "REPORT" }
  });
  fireEvent.click(getByText("Run Command"));
  expect(handleCommand).toHaveBeenCalled();
});
