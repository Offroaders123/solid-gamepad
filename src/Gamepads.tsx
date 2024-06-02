import { createEffect } from "solid-js";
import { createStore } from "solid-js/store";

export type Gamepads = ReturnType<typeof navigator.getGamepads>;

export default function Gamepad() {
  const [gamepads, setGamepads] = createStore<Gamepads>(navigator.getGamepads());

  window.addEventListener("gamepadconnected", event => {
    console.log(event);
  });

  createEffect(() => {
    console.log(gamepads);
  });

  return (
    <>{gamepads.map(gamepad => gamepad)}</>
  );
}