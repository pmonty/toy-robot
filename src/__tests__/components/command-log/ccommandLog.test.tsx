import * as React from "react";
import { render } from "@testing-library/react";

import { CommandLog } from "../../../app/components/command-log";

test("shows log in order", () => {
  const log = ["REPORT", "Robot is not yet placed."];

  const { getAllByTestId } = render(<CommandLog log={log} />);

  const renderedItems = getAllByTestId("logitem");

  renderedItems.forEach((i, index) => {
    expect(i.textContent).toBe(log[index]);
  });
});
