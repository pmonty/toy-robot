import { Reducer } from "redux";

import { RobotState, ORIENTATION } from "./types";
import { RobotActions, ActionTypes, CommandTypes } from "./actions";
import { getFacingDirection } from "../../utils/utils";

export const initialState: RobotState = {
  isPlaced: false,
  location: null,
  facing: null,
  log: []
};

const robotReducer: Reducer<RobotState, RobotActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ActionTypes.RUN_COMMAND: {
      const { command } = action.payload;
      const commands = command.split(/[\s,]+/);

      switch (commands[0]) {
        case CommandTypes.PLACE: {
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
            log: [...state.log, command]
          };
        }
        case CommandTypes.MOVE: {
          return {
            ...state,
            ...(state.isPlaced && {
              location: {
                x: state.location.x + state.facing.x,
                y: state.location.y + state.facing.y
              },
              log: [...state.log, command]
            })
          };
        }
        case CommandTypes.LEFT: {
          return {
            ...state,
            ...(state.isPlaced && {
              facing: {
                x: state.facing.y !== 0 ? -state.facing.y : 0,
                y: state.facing.x
              },
              log: [...state.log, command]
            })
          };
        }
        case CommandTypes.RIGHT: {
          return {
            ...state,
            ...(state.isPlaced && {
              facing: {
                x: state.facing.y,
                y: state.facing.x !== 0 ? -state.facing.x : 0
              },
              log: [...state.log, command]
            })
          };
        }
        case CommandTypes.REPORT: {
          return {
            ...state,
            ...(state.isPlaced && {
              log: [
                ...state.log,
                `Output: ${state.location.x}, ${
                  state.location.y
                }, ${getFacingDirection(state.facing)}`
              ]
            })
          };
        }
      }
    }
    case ActionTypes.ERROR: {
      const { error } = action.payload;
      return {
        ...state,
        log: [...state.log, error]
      };
    }
    case ActionTypes.RESET: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default robotReducer;
