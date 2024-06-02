/* @refresh reload */
import { render } from "solid-js/web";
import App from "./App.js";
import { gamepads } from "./Gamepads.js";
import "./index.scss";

const root: HTMLDivElement = document.querySelector("#root")!;

render(() => <App gamepads={gamepads}/>, root);