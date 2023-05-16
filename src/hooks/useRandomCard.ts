import { useState, useEffect } from "react";
import { FruitType } from "../components/card/constant";

interface CardType {
  count: number;
  kind: FruitType;
  key: number;
  direction: "bottom" | "right" | "top" | "left";
}

export const rand = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const directionArray = ["bottom", "right", "top", "left", "bottom"] as const;

const keyOfFruit: FruitType[] = ["lime", "strawBerry", "plum", "banana"];

const isFiveFruit = (state: CardType[]) => {
  const fruitCnt = {
    lime: 0,
    strawBerry: 0,
    plum: 0,
    banana: 0,
  };
  state.forEach(({ kind, count }) => {
    fruitCnt[kind] += count;
  });

  const { lime, strawBerry, plum, banana } = fruitCnt;
  return lime === 5 || strawBerry === 5 || plum === 5 || banana === 5;
};

export const useRandomCard = () => {
  const [state, setState] = useState<CardType[]>([]);
  const [isFive, setFive] = useState<boolean>(false);
  const [current, setCurrent] = useState<number>(0);

  const nextOrder = () => {
    const randomCount = rand(1, 5);
    const randomKind = keyOfFruit[rand(0, 3)];
    const nextItem = {
      count: randomCount,
      key: current,
      kind: randomKind,
      direction: directionArray[current % 4],
    };
    const temp = [...state];
    temp.unshift(nextItem);
    if (temp.length >= 6) temp.pop();
    setState(temp);
    return temp;
  };

  const clear = () => {
    setState([]);
    setFive(false);
  };

  const next = () => {
    const temp = nextOrder().slice(0,4);
    setFive(isFiveFruit(temp));
    setCurrent(current + 1);
  };

  return { state, isFive, current, next, clear };
};
