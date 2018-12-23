import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from '@storybook/react/demo';
import { StateDecorator, Store } from "@sambego/storybook-state";
import { withInfo } from '@storybook/addon-info';

const store = new Store({
  active: false
});

storiesOf("Button", module)
  .addDecorator(StateDecorator(store))
  .add("with text", () => [
    <Button
      onClick={() => store.set({ active: !store.get("active") })}
      key="button"
    >AA</Button>
  ])
  .add('simple info',
    withInfo('doc string about my component')(() =>
      <Button>Click the "?" mark at top-right to view the info.</Button>
    )
  );
