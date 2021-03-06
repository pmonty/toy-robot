import * as React from "react";
import { useCallback, useState } from "react";
import { Button, Input, Label, Form, FormGroup, Row, Col } from "reactstrap";

import { CommandProps } from "./types";

export const Command: React.FunctionComponent<CommandProps> = React.memo<
  CommandProps
>(({ reset, handleCommand }) => {
  const [command, updateCommand] = useState("");

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    updateCommand(e.target.value.toUpperCase());
  }, []);

  const handleSubmit = useCallback(
    (e: any) => {
      e.preventDefault();

      if (command.length === 0) return;
      handleCommand(command);
      updateCommand("");
    },
    [command]
  );

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup row>
        <Col xl={{ size: "auto" }}>
          <Label for="command">Command</Label>
          <Input
            data-testid="command-input"
            type="text"
            name="command"
            id="command"
            onChange={onChange}
            value={command}
          />
        </Col>
      </FormGroup>

      <FormGroup>
        <Row>
          <Col xl={{ size: "auto" }}>
            <Button color="primary" type="submit">
              Run Command
            </Button>
          </Col>
          <Col xl={{ size: "auto" }}>
            <Button color="danger" onClick={reset}>
              Reset
            </Button>
          </Col>
        </Row>
      </FormGroup>
    </Form>
  );
});
