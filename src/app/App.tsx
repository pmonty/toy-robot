import * as React from "react";
import { Provider } from "react-redux";

import Command from "./containers/command";
import CommandLog from "./containers/commandLog";
import createStore from "./utils/store";
import { MainStyle } from "./utils/styles";

const store = createStore();

const App: React.FunctionComponent<{}> = () => (
  <Provider store={store}>
    <MainStyle />
    <div id="app-container">
      <h1>Toy Robot</h1>
      <Command />
      <CommandLog />
    </div>
  </Provider>
);

export default App;
