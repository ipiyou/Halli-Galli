import styled from "styled-components";

interface PropsType {
  width: string;
  height: string;
  radius: "8" | "4";
}

export const Button = styled.button<PropsType>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ radius }) => radius}px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
`;
