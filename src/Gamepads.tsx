import { createStore } from "solid-js/store";

export type Gamepads = ReturnType<typeof navigator.getGamepads>;

export const [gamepads, setGamepads] = createStore<Gamepads>(navigator.getGamepads());