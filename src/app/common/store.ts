import { createStore } from "redux";

import rootReducer, { ApplicationState } from "../../reducers";
import { RobotActions } from "../robot/actions";

export default () => {
  return createStore<ApplicationState, RobotActions, {}, {}>(rootReducer, {});
};
