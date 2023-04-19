import { useState } from "react";

export const useOrderCard = () => {
  const [order, setOrder] = useState<number>(0);

  const nextOrder = () => {
    setOrder((order + 1) % 4);
  };
  return [order, nextOrder] as const;
};
