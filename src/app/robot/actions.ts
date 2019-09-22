export enum ActionTypes {
  RUN_COMMAND = "RUN_COMMAND",
  RESET = "RESET"
}

export enum CommandTypes {
  PLACE = "RUN_COMMAND",
  MOVE = "MOVE",
  RIGHT = "RIGHT",
  LEFT = "LEFT",
  REPORT = "REPORT"
}

export const reset = () => ({ type: ActionTypes.RUN_COMMAND });

export const runCommand = (command: string) => ({
  type: ActionTypes.RESET,
  payload: { command }
});

export type RobotActions = ReturnType<typeof reset | typeof runCommand>;
