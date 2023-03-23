import { Banana, Lime, Plum, StrawBerry } from "../../assets/img";

export type ActionType =
  | "center"
  | "rightTop"
  | "rightBottom"
  | "leftTop"
  | "leftBottom";

export type DirectionType = "top" | "right" | "bottom" | "left";

export type Locationtype = {
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
};

export const transCount: { [i: number]: ActionType[] } = {
  1: ["center"],
  2: ["rightTop", "leftBottom"],
  3: ["rightTop", "leftBottom", "center"],
  4: ["rightTop", "rightBottom", "leftBottom", "leftTop"],
  5: ["rightTop", "rightBottom", "leftBottom", "leftTop", "center"],
};

export const position: { [i in ActionType]: Locationtype } = {
  leftTop: { left: "0", top: "10" },
  rightTop: { top: "10", right: "0" },
  center: { top: "70", left: "40" },
  leftBottom: { left: "0", top: "130" },
  rightBottom: { right: "0", top: "130" },
};

export const locationCard: { [i in DirectionType]: Locationtype } = {
  left: { top: "285", left: "0" },
  right: { top: "285", right: "0" },
  bottom: { bottom: "0", left: "335" },
  top: { top: "0", left: "335" },
};

export const Fruit = {
  lime: Lime,
  strawBerry: StrawBerry,
  plum: Plum,
  banana: Banana,
};

export const rotateCard = {
  top: 180,
  right: 270,
  bottom: 0,
  left: 90,
};
