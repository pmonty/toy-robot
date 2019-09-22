import { combineReducers } from "redux";

import robotReducer from "./app/robot/reducers";
import { RobotState } from "./app/robot/types";

export interface ApplicationState {
  robot: RobotState;
}

const rootReducer = combineReducers<ApplicationState>({ robot: robotReducer });

export default rootReducer;
