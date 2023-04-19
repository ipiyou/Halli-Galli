import styled, { css } from "styled-components";
import {
  ActionType,
  rotateCard,
  Fruit,
  position,
  transCount,
  Locationtype,
  locationCard,
  DirectionType,
} from "./constant";

interface DirectionPropsType {
  direction: DirectionType;
}

export interface CardType {
  count: number;
  kind: keyof typeof Fruit;
  direction?: DirectionType;
}

export const Card = ({
  count = 1,
  kind = "plum",
  direction = "top",
}: CardType) => {
  return (
    <_CardWrapper direction={direction}>
      <_Wrapper direction={direction}>
        {transCount[count].map((action: ActionType) => (
          <_Fruit src={Fruit[kind]} location={position[action]} />
        ))}
      </_Wrapper>
    </_CardWrapper>
  );
};

const _CardWrapper = styled.div<DirectionPropsType>`
  position: absolute;
  ${({ direction }) => {
    const { top, left, right, bottom } = locationCard[direction];
    return css`
      left: ${left};
      top: ${top};
      right: ${right};
      bottom: ${bottom};
    `;
  }}
`;

const _Wrapper = styled.div<DirectionPropsType>`
  position: relative;
  width: 150px;
  height: 210px;
  background-color: white;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  rotate: ${({ direction }) => rotateCard[direction]}deg;
`;

const _Fruit = styled.img<{ location: Locationtype }>`
  width: 70px;
  height: 70px;
  position: absolute;
  ${({ location }) => {
    const { top, left, right } = location;
    return css`
      left: ${left}px;
      right: ${right}px;
      top: ${top}px;
    `;
  }}
`;
