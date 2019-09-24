import * as React from "react";
import { render } from "@testing-library/react";

import { Command } from "../../../app/components/command";

test("shows command input", () => {
  const handleCommand = jest.fn();

  const reset = jest.fn();

  const { getByText } = render(
    <Command handleCommand={handleCommand} reset={reset} />
  );

  expect(getByText("Reset"));
});
