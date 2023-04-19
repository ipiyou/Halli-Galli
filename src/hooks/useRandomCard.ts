import { useState, useEffect } from "react";
import { FruitType } from "../components/card/constant";

interface CardType {
  count: number;
  kind: FruitType;
  direction: "bottom" | "right" | "top" | "left";
}

const rand = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const directionArray = ["bottom", "right", "top", "left"] as const;

const keyOfFruit: FruitType[] = ["lime", "strawBerry", "plum", "banana"];

export const useRandomCard = () => {
  const [state, setState] = useState<CardType[]>([]);
  const [current, setCurrent] = useState<number>(0);

  const nextOrder = () => {
    const randomCount = rand(1, 5);
    const randomKind = keyOfFruit[rand(0, 4)];
    const nextItem = {
      count: randomCount,
      kind: randomKind,
      direction: directionArray[current % 4],
    };
    const temp = [...state];
    temp.splice(current % 4, 1, nextItem);
    setState(temp);
  };

  useEffect(() => {
    setTimeout(() => nextOrder(), 5000);
    setCurrent(current + 1);
    console.log(state);
  }, [state]);
  return [state, current, nextOrder] as const;
};
