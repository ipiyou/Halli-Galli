import { ReactNode } from "react";
import { GlobalStyle } from "./global";

interface PropsType {
  children: ReactNode;
}

export const GlobalProvider = ({ children }: PropsType) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};
