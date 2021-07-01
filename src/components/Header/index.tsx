import { ReactNode } from "react";
import { useTheme } from "../../hooks/useTheme";
import { RoomCode } from "../../components/RoomCode";
import { HeaderStyled, Content } from "./styles";

import logoImg from "../../assets/images/logo.svg";
import logoWhite from "../../assets/images/logo-white.svg";

type HeaderProps = {
  roomId: string;
  children?: ReactNode;
};

export function Header({ roomId, children }: HeaderProps) {
  const { theme } = useTheme();

  return (
    <HeaderStyled>
      <Content>
        <img src={theme === "light" ? logoImg : logoWhite} alt="Letmeask" />
        <div>
          <RoomCode code={roomId} />
          {children}
        </div>
      </Content>
    </HeaderStyled>
  );
}
