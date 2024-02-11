import React from "react";
import { useNavigate } from "react-router-dom";
import Arrow from "../../components/arrow/Arrow";
import Statistic from "../../components/statistic/Statistic";
import { presence } from "../../const/lectures";

function Subject({ subject }) {
  const navigate = useNavigate();
  const { id, name } = subject;

  const subjectPresence = presence.filter((value) => value.subjectId === id);

  return (
    <div className="presence-list">
      <button
        className="btn btn-color btn-login presence-button"
        onClick={() => navigate(`/presence`)}
      >
        <Arrow />
        <p className="presence-button-text">Natrag</p>
      </button>
      <div className="presence-list-title-container">
        <h2 className="presence-list-title">{name}</h2>
      </div>
      <Statistic subjectPresence={subjectPresence} />
    </div>
  );
}

export default Subject;
