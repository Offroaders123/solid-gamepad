import { GamepadsProvider } from "./Gamepads.js";
import "./App.scss";

export default function App() {
  return (
    <GamepadsProvider>
      <button>Hi</button>
    </GamepadsProvider>
  );
}