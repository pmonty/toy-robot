import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";

import rootReducer, { ApplicationState } from "../reducers";
import { RobotActions } from "../reducers/robot/actions";

export default () => {
  const middlewares = [thunk];

  if (process.env.NODE_ENV === "development") {
    const { logger } = require("redux-logger");

    middlewares.push(logger);
  }

  return createStore<ApplicationState, RobotActions, { dispatch }, {}>(
    rootReducer,
    {},
    compose(applyMiddleware(...middlewares))
  );
};
