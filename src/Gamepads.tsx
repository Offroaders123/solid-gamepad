import { onMount } from "solid-js";
import "gamecontroller.js";

import type GameControl from "gamecontroller.js/dist/gamecontrol.js";
import type { GamepadPrototype } from "gamecontroller.js/dist/gamepad.js";

declare global {
  var gameControl: typeof GameControl;
}

export default function Gamepad() {
  let gamepad: GamepadPrototype;

  onMount(() => {
    gameControl
      .on("connect", (gamepadd: GamepadPrototype) => {
        console.log(gamepadd);
        gamepad = gamepadd;

        gamepad.on("button0", event => {
          console.log(event);
        });
      });
  });

  return (
    <></>
  );
}