import styled, { css } from "styled-components";
import {
  ActionType,
  rotateCard,
  Fruit,
  FruitType,
  position,
  transCount,
} from "./constant";

type DirectionType = keyof typeof rotateCard;

interface PropsType {
  count?: 1 | 2 | 3 | 4 | 5;
  kind?: keyof typeof Fruit;
  direction?: DirectionType;
}

export const Card = ({
  count = 1,
  kind = "plum",
  direction = "top",
}: PropsType) => {
  return (
    <_Wrapper direction={direction}>
      {transCount[count].map((action: ActionType) => (
        <_Fruit src={Fruit[kind]} location={position[action]} />
      ))}
    </_Wrapper>
  );
};

const _Wrapper = styled.div<{ direction: DirectionType }>`
  position: relative;
  width: 150px;
  height: 210px;
  background-color: white;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  rotate: ${({ direction }) => rotateCard[direction]}deg;
`;

const _Fruit = styled.img<FruitType>`
  width: 70px;
  height: 70px;
  position: absolute;
  ${({ location }) => {
    const [x, y] = location;
    console.log(x, y);
    return css`
      left: ${x}px;
      top: ${y}px;
    `;
  }}
`;
