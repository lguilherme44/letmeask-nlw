import { useParams, useHistory } from "react-router-dom";
import { database } from "../../services/firebase";

/** images */
import deleteImg from "../../assets/images/delete.svg";
import checkImg from "../../assets/images/check.svg";
import answerImg from "../../assets/images/answer.svg";

/** components */
import { Button } from "../../components/Button";
import { Question } from "../../components/Question";
import { Header } from "../../components/Header";

/** hooks */
import { useRoom } from "../../hooks/useRoom";

import "../../styles/room.scss";
import Swal from "sweetalert2";

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  // const { user } = useAuth()
  const history = useHistory();
  const params = useParams<RoomParams>();
  const roomId = params.id;

  const { title, questions } = useRoom(roomId);

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      closedAt: new Date(),
    });

    history.push("/");
  }

  function handleDeleteQuestion(questionId: string) {
    Swal.fire({
      title: "Are you sure you want to delete this question?",
      showCancelButton: true,
      showConfirmButton: true,
      cancelButtonText: `Cancel`,
      confirmButtonText: `Yes`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Question deleted with success.", "", "success");
        database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
      }
    });
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    });
  }

  async function handleHighlightQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true,
    });
  }

  return (
    <div id="page-room">
      <Header roomId={roomId}>
        <Button isOutlined onClick={handleEndRoom}>
          Encerrar sala
        </Button>
      </Header>

      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>

        <div className="question-list">
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
                isAnswered={question.isAnswered}
                isHighlighted={question.isHighlighted}
              >
                {!question.isAnswered && (
                  <>
                    <button
                      type="button"
                      onClick={() => handleCheckQuestionAsAnswered(question.id)}
                    >
                      <img
                        src={checkImg}
                        alt="Marcar pergunta como respondida"
                      />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleHighlightQuestion(question.id)}
                    >
                      <img src={answerImg} alt="Dar destaque à pergunta" />
                    </button>
                  </>
                )}
                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <img src={deleteImg} alt="Remover pergunta" />
                </button>
              </Question>
            );
          })}
        </div>
      </main>
    </div>
  );
}
