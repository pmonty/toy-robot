import { combineReducers } from "redux";

import robotReducer from "./robot/robot";
import { RobotState } from "./robot/types";

export interface ApplicationState {
  robot: RobotState;
}

const rootReducer = combineReducers<ApplicationState>({ robot: robotReducer });

export default rootReducer;
