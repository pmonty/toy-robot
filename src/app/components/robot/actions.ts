import { action } from "typesafe-actions";

import { checkInput } from "app/utils/utils";
import { AsyncActionCreator } from "./types";

export enum ActionTypes {
  RUN_COMMAND = "RUN_COMMAND",
  RESET = "RESET",
  ERROR = "ERROR"
}

export enum CommandTypes {
  PLACE = "PLACE",
  MOVE = "MOVE",
  RIGHT = "RIGHT",
  LEFT = "LEFT",
  REPORT = "REPORT"
}

export const reset = () => action(ActionTypes.RESET);

export const showError = (error: string) =>
  action(ActionTypes.ERROR, { error });

export const runCommand = (command: string) =>
  action(ActionTypes.RUN_COMMAND, { command });

export const handleCommand: AsyncActionCreator<void> = (command: string) => (
  dispatch,
  getState
) => {
  const { facing, isPlaced, location } = getState().robot;
  const error = checkInput({ command, facing, isPlaced, location });

  if (error) {
    dispatch(showError(error));
    return;
  }

  dispatch(runCommand(command));
};

export type RobotActions = ReturnType<
  typeof showError | typeof runCommand | typeof reset
>;
