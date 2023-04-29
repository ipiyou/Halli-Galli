import { useState, useEffect } from "react";
import { FruitType } from "../components/card/constant";

interface CardType {
  count: number;
  kind: FruitType;
  key: number;
  direction: "bottom" | "right" | "top" | "left";
}

const rand = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const directionArray = ["bottom", "right", "top", "left","bottom"] as const;

const keyOfFruit: FruitType[] = ["lime", "strawBerry", "plum", "banana"];

export const useRandomCard = () => {
  const [state, setState] = useState<CardType[]>([]);
  const [current, setCurrent] = useState<number>(0);

  const nextOrder = () => {
    const randomCount = rand(1, 5);
    const randomKind = keyOfFruit[rand(0, 4)];
    const nextItem = {
      count: randomCount,
      key: current,
      kind: randomKind,
      direction: directionArray[current % 4],
    };
    const temp = [...state];
    temp.splice(current % 5, 1, nextItem);
    setState(temp);
  };

  const clear = () => {
    setState([]);
  };

  useEffect(() => {
    setTimeout(() => nextOrder(), 1000);
    setCurrent(current + 1);
  }, [state]);
  return [state, current, nextOrder] as const;
};
