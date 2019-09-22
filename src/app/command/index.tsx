import * as React from "react";
import { useCallback, useState } from "react";
import { connect } from "react-redux";

import { ApplicationState } from "../../reducers";
import { reset, runCommand } from "../robot/actions";
import { CommandProps } from "./types";

const Command: React.FunctionComponent<CommandProps> = ({
  reset,
  runCommand
}) => {
  const [command, updateCommand] = useState("");

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    updateCommand(e.target.value.toUpperCase());
  }, []);

  const handleSubmit = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();

      if (command.length === 0) return;

      runCommand(command);

      updateCommand("");
    },
    [command, runCommand]
  );

  return (
    <div>
      <form onSubmit={() => handleSubmit}>
        <input
          type="text"
          value={command}
          onChange={onChange}
          placeholder="Tell the robot what to do ..."
          height="50px"
        />
        <button type="submit">Run Command</button>
        <button type="button" onClick={reset}>
          Reset
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ robot }: ApplicationState) => ({
  commands: robot.commands
});

export default connect(
  mapStateToProps,
  { reset, runCommand }
)(Command);
