import React from "react";
import { useNavigate } from "react-router-dom";
import { subjects } from "./../../const/lectures";

function SubjectList() {
  const navigate = useNavigate();

  return (
    <div className="list">
      <div className="list-title-container">
        <h2 className="list-title">PREDMETI</h2>
      </div>
      {subjects.map((subject) => {
        return (
          <div
            onClick={() =>
              navigate(`/presence/${subject?.id}`, { state: subject })
            }
            className="list-content-container"
            key={subject.id}
          >
            <h1 className="list-content">{subject.name}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default SubjectList;
