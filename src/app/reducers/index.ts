import { combineReducers } from "redux";

import robotReducer from "../components/robot/reducers";
import { RobotState } from "../components/robot/types";

export interface ApplicationState {
  robot: RobotState;
}

const rootReducer = combineReducers<ApplicationState>({ robot: robotReducer });

export default rootReducer;
