export const reset = () => ({ type: "RESET" });

export const runCommand = (command: string) => ({
  type: "COMMAND",
  command
});

export type Reset = ReturnType<typeof reset>;
export type RunCommand = ReturnType<typeof runCommand>;

export type RobotActions = Reset | RunCommand;
