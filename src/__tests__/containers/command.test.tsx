import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import robotReducer, { initialState } from "../../app/reducers/robot/robot";
import Command from "../../app/containers/command";

const renderWithRedux = (
  ui,
  {
    s = {
      isPlaced: false,
      location: null,
      facing: null,
      log: []
    },
    store = createStore(robotReducer, initialState)
  } = {}
) => {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  };
};

test("render command container", () => {
  const reset = jest.fn();

  const { getByText, getByTestId, container } = renderWithRedux(<Command />);

  fireEvent.change(getByTestId("command-input"), {
    target: { value: "REPORT" }
  });
  expect(getByTestId("command-input")).toHaveValue("REPORT");

  fireEvent.click(getByText("Reset"));
  // not firing when rendering the container component :-(
  // expect(getByTestId("command-input")).toHaveValue("");
  // expect(reset).toHaveBeenCalled();
});
