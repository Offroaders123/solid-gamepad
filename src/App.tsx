import { createEffect } from "solid-js";
import "./App.scss";

import type { Gamepads } from "./Gamepads.js";

export interface AppProps {
  gamepads: Gamepads;
}

export default function App(props: AppProps) {
  createEffect(() => {
    console.log(props.gamepads);
  });

  return (
    <></>
  );
}