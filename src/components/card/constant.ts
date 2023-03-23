import { Banana, Lime, Plum, StrawBerry } from "../../assets/img";

export interface FruitType {
  location: Locationtype;
}

export type ActionType =
  | "center"
  | "rightTop"
  | "rightBottom"
  | "leftTop"
  | "leftBottom";

export type Locationtype = [number, number];

export const transCount: { [i: number]: ActionType[] } = {
  1: ["center"],
  2: ["rightTop", "leftBottom"],
  3: ["rightTop", "leftBottom", "center"],
  4: ["rightTop", "rightBottom", "leftBottom", "leftTop"],
  5: ["rightTop", "rightBottom", "leftBottom", "leftTop", "center"],
};

export const position: { [i in ActionType]: Locationtype } = {
  leftTop: [0, 10],
  rightTop: [80, 10],
  center: [40, 70],
  leftBottom: [0, 130],
  rightBottom: [80, 130],
};

export const Fruit = {
  lime: Lime,
  strawBerry: StrawBerry,
  plum: Plum,
  banana: Banana,
};

export const rotateCard = {
  top: 0,
  right: 90,
  bottom: 180,
  left: 270,
};
