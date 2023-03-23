import styled from "styled-components";
import { Card } from "../components/card/card";

export const InGame = () => {
  return (
    <_Wrapper>
      <Card count={1} kind="plum" />
      <Card count={2} kind="plum" direction="right" />
      <Card count={3} kind="plum" direction="left" />
      <Card count={4} kind="plum" direction="bottom" />
      <Card count={5} kind="plum" />
    </_Wrapper>
  );
};

const _Wrapper = styled.div``;
