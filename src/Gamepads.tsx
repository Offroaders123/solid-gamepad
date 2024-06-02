import { ParentProps, createContext, createEffect } from "solid-js";
import { createStore } from "solid-js/store";

export type Gamepads = ReturnType<typeof navigator.getGamepads>;

const GamepadsContext = createContext<Gamepads>(navigator.getGamepads());

export function GamepadsProvider(props: ParentProps) {
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
    <GamepadsContext.Provider value={gamepads}>
      {props.children}
    </GamepadsContext.Provider>
  );
}