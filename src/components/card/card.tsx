import styled, { css, keyframes } from "styled-components";
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

export interface PropsType {
  count: number;
  key: number;
  kind: keyof typeof Fruit;
  direction?: DirectionType;
  zIndex: number;
}

export const Card = ({
  key,
  count = 1,
  kind = "plum",
  direction = "top",
  zIndex,
}: PropsType) => {
  return (
    <_CardWrapper direction={direction} zIndex={zIndex}>
      <_Wrapper direction={direction}>
        {transCount[count].map((action, idx) => (
          <_Fruit key={key} src={Fruit[kind]} location={position[action]} />
        ))}
      </_Wrapper>
    </_CardWrapper>
  );
};

const showCard = (direction: keyof Locationtype, value: number | undefined) => {
  const to = `${direction}: ${value !== undefined && value - 200}` + "px;";
  const from = `${direction}: ${value}` + "px;";
  const key = keyframes`
    from{
      ${to}
    }
    to {
      ${from}
    }
`;
  return key;
};
const _CardWrapper = styled.div<DirectionPropsType & { zIndex: number }>`
  position: absolute;
  ${({ direction }) => {
    const { top, left, right, bottom } = locationCard[direction];
    const animeValue = locationCard[direction][direction];
    return css`
      left: ${left};
      top: ${top};
      right: ${right};
      bottom: ${bottom};
      > div {
        rotate: ${rotateCard[direction]}deg;
      }
      animation: ${showCard(direction, animeValue)} 1s forwards;
    `;
  }}
  z-index: ${({ zIndex }) => zIndex};
`;

const _Wrapper = styled.div<DirectionPropsType>`
  position: relative;
  width: 150px;
  height: 210px;
  background-color: white;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
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
