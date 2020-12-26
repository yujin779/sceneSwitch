import { createGlobalState } from "react-hooks-global-state";

export const Scene = {
  Opning: 0,
  Game: 1,
  GameOver: 2
};

const initialState = {
  scene: Scene.Opning
};
export const { useGlobalState } = createGlobalState(initialState);
