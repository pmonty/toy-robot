import * as React from "react";
import { Provider } from "react-redux";

import createStore from "./common/store";

const store = createStore();

const App: React.FunctionComponent<{}> = () => (
  <Provider store={store}>
    <div>
      <p>Toy Robot React/Redux Implementation</p>
      {/* <Command /> */}
      {/* <Console /> */}
    </div>
  </Provider>
);

export default App;
