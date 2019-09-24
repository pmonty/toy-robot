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
    <div>
      <h3>Toy Robot</h3>
      <Command />
      <CommandLog />
    </div>
  </Provider>
);

export default App;
