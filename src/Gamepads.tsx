import { createEffect } from "solid-js";
import { createStore } from "solid-js/store";

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
    <>{gamepads.map(gamepad => gamepad)}</>
  );
}