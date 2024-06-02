import { createEffect } from "solid-js";
import createGamepads from "./Gamepads.js";
import "./App.scss";

export default function App() {
  const gamepads = createGamepads();

  createEffect(() => {
    console.log(gamepads);
  });

  return (
    <></>
  );
}