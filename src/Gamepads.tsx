import { createEffect, onCleanup, onMount } from "solid-js";
import { createStore } from "solid-js/store";

export type Gamepads = ReturnType<typeof navigator.getGamepads>;

export default function Gamepad() {
  const [gamepads, setGamepads] = createStore<Gamepads>(navigator.getGamepads());

  const controller = new AbortController();
  const { signal } = controller;

  window.addEventListener("gamepadconnected", event => {
    console.log(event);
  }, { signal });

  onMount(() => {
    loop();
  });

  onCleanup(() => {
    controller.abort();
  });

  createEffect(() => {
    console.log(
      gamepads
        .filter((gamepad): gamepad is Gamepad => gamepad !== null)
        .map(gamepad => gamepad.axes)
    );
  });

  function loop() {
    requestAnimationFrame(loop);
  }

  return (
    <>{gamepads.map(gamepad => gamepad)}</>
  );
}