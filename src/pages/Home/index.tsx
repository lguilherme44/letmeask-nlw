import { FormEvent, useState } from "react";
import { database } from "../../services/firebase";
import { useAuth } from "../../hooks/useAuth";
import { useHistory } from "react-router-dom";
import { Button } from "../../components/Button";
// import { useTheme } from "../../hooks/useTheme";
import { Aside } from "../../components/Aside";
import logoWhite from "../../assets/images/logo-white.svg";
import googleIconImg from "../../assets/images/google-icon.svg";
import "../../styles/auth.scss";
import toast from "react-hot-toast";

export function Home() {
  const history = useHistory();
  // const { theme } = useTheme();
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState("");

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push("/rooms/new");
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === "") {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      toast.error("Room does not exists.");
      return;
    }

    if (roomRef.val().closedAt) {
      toast.error("Room already closed.");
      return;
    }

    history.push(`/rooms/${roomCode}`);
  }

  return (
    <div id="page-auth">
      <Aside />

      <main>
        <div className="main-content">
          <img src={logoWhite} alt="Letmeask" />
          <button className="create-room" onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>

          <div className="separator">ou entre em uma sala existente</div>

          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={(e) => setRoomCode(e.target.value)}
              value={roomCode}
            />

            <Button type="submit">Entrar</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
