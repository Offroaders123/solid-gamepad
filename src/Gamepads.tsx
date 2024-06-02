import { createEffect } from "solid-js";
import { createStore } from "solid-js/store";

import type { Component } from "solid-js";

export type Gamepads = ReturnType<typeof navigator.getGamepads>;

export default function Gamepad() {
  const [gamepads, setGamepads] = createStore<Gamepads>(navigator.getGamepads());

  loop();

  createEffect(() => {
    console.log(
      ...gamepads
        .filter((gamepad): gamepad is Gamepad => gamepad !== null)
        .map(gamepad => gamepad.axes)
    );
  });

  function loop() {
    setGamepads(navigator.getGamepads());
    requestAnimationFrame(loop);
  }

  return (
    <>{
      gamepads
        .filter((gamepad): gamepad is Gamepad => gamepad !== null)
        .map(gamepad => <GamepadRender gamepad={gamepad}/>)
    }</>
  );
}

const GamepadRender: Component<{ gamepad: Gamepad; }> = (props) => {
  return (
    <pre style={{ "font-size": "10px" }}>
      <fieldset>
        Axes: {props.gamepad.axes.join(", ")}
      </fieldset>
      <fieldset>
        Buttons: {props.gamepad.buttons.map(({ pressed, touched, value }) => JSON.stringify({ pressed, touched, value })).join("\n")}
      </fieldset>
      <fieldset>
        Connected: {props.gamepad.connected}
      </fieldset>
      <fieldset>
        ID: {props.gamepad.id}
      </fieldset>
      <fieldset>
        Index: {props.gamepad.index}
      </fieldset>
      <fieldset>
        Mapping: {props.gamepad.mapping}
      </fieldset>
      <fieldset>
        Timestamp: {props.gamepad.timestamp}
      </fieldset>
      <fieldset>
        Vibration Actuator: {JSON.stringify(props.gamepad.vibrationActuator)}
      </fieldset>
    </pre>
  );
};