import { ORIENTATION, RobotState, Coordinate } from "../components/robot/types";
import { CommandTypes } from "app/components/robot/actions";

export const getFacingDirection: any = ({ x, y }) => {
  const keys = Object.keys(ORIENTATION);

  return keys.find(k => {
    const value = ORIENTATION[k];

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
    // TODO: Helper function checkCoordinates
    if (x > 4 || x < 0 || (y > 4 || y < 0)) {
      error = "Your coordinates are off the table.";
      return error;
    }
    if (!ORIENTATION[f]) {
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
      // TODO: Helper function checkCoordinates
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
