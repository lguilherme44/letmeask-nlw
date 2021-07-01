import { AsideStyled } from "./styles";
import illustrationImg from "../../assets/images/illustration.svg";

export function Aside() {
  return (
    <AsideStyled>
      <img
        src={illustrationImg}
        alt="Ilustração simbolizando perguntas e respostas"
      />

      <strong>Crie salas de Q&amp;A a-vivo</strong>
      <p>Tire as dúvidas da sua adiência em tempo-real</p>
    </AsideStyled>
  );
}
