import styled from "styled-components";
import { Bell, InGameBack } from "../assets/img";
import { Card } from "../components/card/card";
import { useRandomCard } from "../hooks/useRandomCard";
import { useEffect } from "react";
import { Heart } from "../assets/svg";
import { useScore } from "../hooks/useScore";

export const InGame = () => {
  const { state, isFive, current, next, clear } = useRandomCard();
  const { user, reStartData, increase, decrease } = useScore();

  useEffect(() => {
    const actionId = setTimeout(() => {
      next();
    }, user.time * 1000);
    const spaceBarDown = (e: KeyboardEvent) => {
      if (e.key === " " && isFive) {
        increase(2, 0.1);
        clear();
        if (isFive) clearTimeout(actionId);
      }
    };
    console.log(user)
    document.addEventListener("keydown", spaceBarDown);
    return () => document.removeEventListener("keydown", spaceBarDown);
  }, [state]);

  return (
    <_Wrapper>
      <_Content>
        {state.map(({ count, key, kind, direction }, idx) => (
          <Card
            key={key}
            count={count}
            kind={kind}
            direction={direction}
            zIndex={idx === 4 ? 0 : 10}
          />
        ))}
        <_Bell src={Bell} />
        <_BoardWrapper>
          <_Board>name: ipiyou</_Board>
          <_Board>
            <Heart />
            <Heart />
            <Heart />
            <Heart />
            <Heart />
          </_Board>
          <_Board>score: {user.score}</_Board>
        </_BoardWrapper>
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

const _BoardWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 10px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const _Board = styled.div`
  padding: 12px 20px;
  background-color: white;
  border-radius: 8px;
`;
