import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../components/button";
import { ReactNode } from "react";

interface LinkType {
  to: string;
  children: ReactNode;
}

const LinkButton = ({ to, children }: LinkType) => (
  <Link to={to}>
    <_LevelButton>{children}</_LevelButton>
  </Link>
);

export const HomePage = () => {
  return (
    <_Wrapper>
      <_Content>
        <_Title>Halli Galli</_Title>
        <_LevelWrapper>
          <LinkButton to="">easy</LinkButton>
          <LinkButton to="">normal</LinkButton>
          <LinkButton to="">hard</LinkButton>
        </_LevelWrapper>
        <_OnLineButton>onLine</_OnLineButton>
      </_Content>
    </_Wrapper>
  );
};

const _Title = styled.span`
  font-size: 70px;
  font-weight: bold;
  margin-top: 100px;
`;

const _Wrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
`;

const _Content = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const _LevelWrapper = styled.div`
  margin-top: 200px;
  display: flex;
  gap: 10px;
`;

const _LevelButton = styled(Button)`
  width: 160px;
  height: 50px;
  font-size: 28px;
  font-weight: normal;
  text-decoration: none;
`;

const _OnLineButton = styled(Button)`
  font-size: 32px;
  margin-top: 30px;
`;
