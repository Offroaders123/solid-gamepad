import { createEffect } from "solid-js";
import { gamepads } from "./Gamepads.js";
import "./App.scss";

export default function App() {
  createEffect(() => {
    console.log(gamepads());
  });

  return (
    <></>
  );
}