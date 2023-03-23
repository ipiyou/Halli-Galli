import styled from "styled-components";
import { Bell, InGameBack } from "../assets/img";
import { Card } from "../components/card/card";

export const InGame = () => {
  return (
    <_Wrapper>
      <_Content>
        <Card count={5} kind="banana" direction="top" />
        <Card count={2} kind="strawBerry" direction="right" />
        <Card count={3} kind="lime" direction="left" />
        <Card count={4} kind="plum" direction="bottom" />
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
  background-size: 100%;
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
