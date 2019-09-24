import { RobotState } from "../../../app/reducers/robot/types";
import { RobotActions, ActionTypes } from "../../../app/reducers/robot/actions";
import robotReducer, {
  initialState
} from "../../../app/reducers/robot/reducers";

describe("robot reducer test", () => {
  let state: RobotState = initialState;

  test("initial state is applied correctly", () => {
    expect(robotReducer(undefined, {} as RobotActions)).toBe(initialState);
  });

  test("should return initial state unless  ", () => {
    console.log(initialState);
    expect(
      robotReducer(initialState, {
        type: ActionTypes.RUN_COMMAND,
        payload: {
          command: "MOVE"
        }
      })
    ).toEqual(initialState);

    expect(
      robotReducer(initialState, {
        type: ActionTypes.RUN_COMMAND,
        payload: {
          command: "LEFT"
        }
      })
    ).toEqual(initialState);

    expect(
      robotReducer(initialState, {
        type: ActionTypes.RUN_COMMAND,
        payload: {
          command: "RIGHT"
        }
      })
    ).toEqual(initialState);

    expect(
      robotReducer(initialState, {
        type: ActionTypes.RUN_COMMAND,
        payload: {
          command: "REPORT"
        }
      })
    ).toEqual(initialState);
  });

  test("now lets place the robot", () => {
    const prevState = state;
    state = robotReducer(state, {
      type: ActionTypes.RUN_COMMAND,
      payload: {
        command: "PLACE 3,3,SOUTH"
      }
    });

    expect(state).toEqual({
      ...prevState,
      location: { x: 3, y: 3 },
      facing: { x: 0, y: -1 },
      isPlaced: true,
      log: ["PLACE 3,3,SOUTH"]
    });
  });

  test("now lets move the robot", () => {
    const prevState = state;
    state = robotReducer(state, {
      type: ActionTypes.RUN_COMMAND,
      payload: {
        command: "MOVE"
      }
    });

    expect(state).toEqual({
      ...prevState,
      location: { x: 3, y: 2 },
      log: ["PLACE 3,3,SOUTH", "MOVE"]
    });
  });

  test("now lets turn the robot right", () => {
    const prevState = state;
    state = robotReducer(state, {
      type: ActionTypes.RUN_COMMAND,
      payload: {
        command: "RIGHT"
      }
    });

    expect(state).toEqual({
      ...prevState,
      facing: { x: -1, y: 0 },
      log: ["PLACE 3,3,SOUTH", "MOVE", "RIGHT"]
    });
  });

  test("now lets report the robot location", () => {
    const prevState = state;
    state = robotReducer(state, {
      type: ActionTypes.RUN_COMMAND,
      payload: {
        command: "REPORT"
      }
    });

    expect(state).toEqual({
      ...prevState,
      log: ["PLACE 3,3,SOUTH", "MOVE", "RIGHT", "Output: 3, 2, WEST"]
    });
  });

  test("reset to initial state", () => {
    expect(robotReducer(state, { type: ActionTypes.RESET })).toEqual(
      initialState
    );
  });
});
