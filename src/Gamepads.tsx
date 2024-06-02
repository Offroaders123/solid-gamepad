import { createEffect, onMount } from "solid-js";
import { createStore } from "solid-js/store";

export type Gamepads = ReturnType<typeof navigator.getGamepads>;

export default function createGamepads(): Gamepads {
  const [gamepads, setGamepads] = createStore<Gamepads>(navigator.getGamepads());

  onMount(() => {
    loop();
  });

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

  return gamepads;
}