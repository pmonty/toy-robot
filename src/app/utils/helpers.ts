import { FACING, RobotState, Coordinate } from "../reducers/robot/types";
import { CommandTypes } from "../reducers/robot/actions";

export const getFacingDirection: any = ({ x, y }) => {
  const keys = Object.keys(FACING);

  return keys.find(f => {
    const value = FACING[f];

    return value.x === x && value.y === y;
  });
};

export interface InputParams
  extends Pick<RobotState, "facing" | "isPlaced" | "location"> {
  command: string;
}

export const checkInput: any = ({
  facing,
  isPlaced,
  location,
  command
}: InputParams) => {
  const commands = command.split(/[\s,]+/);
  let error: string = "";

  if (CommandTypes[commands[0]] == null) {
    error = "Invalid command entered.";
    return error;
  } else if (commands[0] == CommandTypes.PLACE) {
    const x = parseInt(commands[1]);
    const y = parseInt(commands[2]);
    const f = commands[3];

    if (commands.length < 4) {
      error = "Invalid place command.";
      return error;
    }
    if (x > 4 || x < 0 || (y > 4 || y < 0)) {
      error = "Your coordinates are off the table.";
      return error;
    }
    if (!FACING[f]) {
      error = "Invalid direction";
      return error;
    }
  } else {
    if (!isPlaced) {
      error = "Robot is not yet placed.";
      return error;
    }
    if (commands[0] == CommandTypes.MOVE) {
      const nextLocation: Coordinate = {
        x: location.x + facing.x,
        y: location.y + facing.y
      };
      if (
        nextLocation.x > 4 ||
        nextLocation.x < 0 ||
        (nextLocation.y > 4 || nextLocation.y < 0)
      ) {
        error = "No square ahead";
        return error;
      }
    }
  }
  return error;
};
