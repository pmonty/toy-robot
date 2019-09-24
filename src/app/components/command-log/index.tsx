import * as React from "react";

import { CommandLogProps } from "./types";

export const CommandLog: React.FunctionComponent<CommandLogProps> = React.memo<
  CommandLogProps
>(({ log }) => {
  return (
    <div className="command-log">
      {log.map((logItem, i) => (
        <p data-testid="logitem" key={i}>
          {logItem}
        </p>
      ))}
    </div>
  );
});
