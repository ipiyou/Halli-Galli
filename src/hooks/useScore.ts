import { useState } from "react";

interface GameDataType {
  heart: number;
  score: number;
  time: number;
}

const reSetData = {
  heart: 10,
};

const initData: GameDataType = {
  score: 0,
  time: 2,
  ...reSetData,
};

export const useScore = () => {
  const [user, setUser] = useState<GameDataType>(initData);
  // 목숨, 스코어, 시간,
  const reStartData = () => setUser({ ...user, ...reSetData });
  const setData = (newData: (value: GameDataType) => GameDataType) =>
    setUser(newData(user));

  const increase = (changeScore: number, changeTime: number) => {
    const score = user.score * changeScore;
    const time = user.time > 0.5 ? user.time - changeTime : 0.5;
    setUser({ ...user, score, time });
  };
  const decrease = (changeHeart: 1 | 2) => {
    const heart = user.heart - changeHeart;
    setUser({ ...user, heart });
  };
  return { user, reStartData, setData, increase, decrease };
};
