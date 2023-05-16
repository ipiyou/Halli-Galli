import { useState } from "react";
import { rand } from "./useRandomCard";

type BotType = [boolean, boolean, boolean, boolean];

const initData: BotType = [false, false, false, false];
// bot 하나라도 있으면 모두 초기화
export const useBot = (time: number) => {
  const [bot, setBot] = useState<BotType>(initData);

  const botClick = (isFive: boolean, nextGame: () => void) => {
    const randomBot = [rand(0, 30), rand(0, 30)];
    setTimeout(async () => {
      if (isFive) {
        const delay = (delay: number) =>
          new Promise((resolve) => setTimeout(resolve, delay));
        // if (bot.every((isClicked) => !isClicked)) {
        //   nextGame();
        //   setBot(initData);
        // }
        clickBell(1);
        nextGame();
        randomBot.forEach(async (time, idx) => {
          await delay(time);
          clickBell((idx + 2) as 1 | 2 | 3);
        });
      }
    }, time * 500);
  };
  const clickBell = (userId: 0 | 1 | 2 | 3) => {
    setBot((bot) => {
      const temp: BotType = [...bot];
      temp.splice(userId, 1, true);
      console.log(temp);
      return temp;
    });
  };

  return { bot, clickBell, botClick };
};
