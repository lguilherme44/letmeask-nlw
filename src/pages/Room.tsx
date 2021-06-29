import { FormEvent, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { RoomCode } from "../components/RoomCode";
import { database } from "../services/firebase";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import logoImg from "../assets/images/logo.svg";
import "../styles/room.scss";

type FirebaseQuestions = Record<
  string,
  {
    auth: {
      name: string;
      avatar: string;
    };
    content: string;
    isAnwered: boolean;
    isHighLighted: boolean;
  }
>;

type RoomParams = {
  id: string;
};

export function Room() {
  const [newQuestion, setNewQueston] = useState("");
  const { user } = useAuth();

  const params = useParams<RoomParams>();
  const roomId = params.id;

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    roomRef.once("value", (room) => {
      const databaseRoom = room.val();
      const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};

      const parsedQuestions = Object.entries(firebaseQuestions).map(
        ([key, value]) => {
          console.log(key, value);
          return {
            id: key,
            content: value.content,
            author: value.auth,
            isAnwered: value.isAnwered,
            isHighLighted: value.isHighLighted,
          };
        }
      );

      console.log(parsedQuestions);
    });
  }, [roomId]);

  async function handleSendQuestion(e: FormEvent) {
    e.preventDefault();

    if (newQuestion.trim() === "") {
      return;
    }

    if (!user) {
      throw new Error("You most be logged in ");
    }

    const question = {
      content: newQuestion,
      auth: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighLighted: false,
      isAnwered: false,
    };

    await database.ref(`rooms/${roomId}/questions`).push(question);

    setNewQueston("");
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="letmeask" />
          <RoomCode code={roomId} />
        </div>
      </header>

      <main className="content">
        <div className="room-title">
          <h1>sala react</h1>
          <span>4 perguntas</span>
        </div>

        <form onSubmit={handleSendQuestion}>
          <textarea
            placeholder="O que você quer perguntar?"
            onChange={(e) => setNewQueston(e.target.value)}
            value={newQuestion}
          />

          <div className="form-footer">
            {user ? (
              <div className="user-info">
                <img src={user.avatar} alt={user.name} />
                <span>{user.name}</span>
              </div>
            ) : (
              <span>
                Para enviar uma pergunta, <button>faça seu login</button>.
              </span>
            )}
            <Button type="submit" disabled={!user}>
              Enviar pergunta
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}
