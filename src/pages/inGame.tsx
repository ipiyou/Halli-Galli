import styled from "styled-components";
import { Bell, InGameBack } from "../assets/img";
import { Card } from "../components/card/card";
import { useOrderCard } from "../hooks/useOrderCard";
import { useRandomCard } from "../hooks/useRandomCard";
import { useEffect } from "react";

export const InGame = () => {
  const [] = useOrderCard();
  const [state, current, next] = useRandomCard();
  return (
    <_Wrapper>
      <_Content>
        {state.map(({ count, kind, direction }, idx) => (
          <Card count={count} kind={kind} direction={direction} />
        ))}
        <_Bell src={Bell} />
      </_Content>
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${InGameBack});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

const _Content = styled.div`
  width: 820px;
  height: 720px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const _Bell = styled.img`
  cursor: pointer;
  width: 200px;
  height: 200px;
`;
