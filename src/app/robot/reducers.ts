import { Reducer } from "redux";

import { RobotState, ORIENTATION } from "./types";
import { RobotActions } from "./actions";
import { getFacingDirection } from "../common/utils";

export const initialState: RobotState = {
  isPlaced: false,
  location: null,
  facing: { x: 0, y: 1 },
  commands: []
};

const robotReducer: Reducer<RobotState, RobotActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "RESET": {
      return initialState;
    }
    case "COMMAND": {
      const commands = action.command.split(/[\s,]+/);
      const command = commands[0];

      switch (command) {
        case "PLACE": {
          const x = parseInt(commands[1]);
          const y = parseInt(commands[2]);
          const f = commands[3];

          return {
            ...state,
            isPlaced: true,
            location: { x, y },
            facing: {
              ...state.facing,
              ...ORIENTATION[f]
            },
            commands: [...state.commands, commands]
          };
        }
        case "MOVE": {
          return {
            ...state,
            ...(state.isPlaced && {
              location: {
                x: state.location.x + state.facing.x,
                y: state.location.y + state.facing.y
              },
              commands: [...state.commands, commands]
            })
          };
        }
        case "LEFT": {
          return {
            ...state,
            ...(state.isPlaced && {
              facing: {
                x: state.facing.y !== 0 ? -state.facing.y : 0,
                y: state.facing.x
              },
              commands: [...state.commands, commands]
            })
          };
        }
        case "RIGHT": {
          return {
            ...state,
            ...(state.isPlaced && {
              facing: {
                x: state.facing.y,
                y: state.facing.x !== 0 ? -state.facing.x : 0
              },
              commands: [...state.commands, commands]
            })
          };
        }
        case "REPORT": {
          return {
            ...state,
            ...(state.isPlaced && {
              commands: [
                ...state.commands,
                `Output: ${state.location.x}, ${
                  state.location.y
                }, ${getFacingDirection(state.facing)}`
              ]
            })
          };
        }
      }
    }
    default: {
      return state;
    }
  }
};

export default robotReducer;
