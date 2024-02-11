import React from "react";
import { useEffect, useState } from "react";

export default function Lecture({ lecture }) {
  const { name, time, classroom, type } = lecture;
  const [colorClass, setColorClass] = useState("");

  useEffect(() => {
    switch (type) {
      case "predavanja":
        setColorClass("color-blue");
        break;
      case "auditorne":
        setColorClass("color-green");
        break;
      case "labovi":
        setColorClass("color-red");
        break;
      default:
        setColorClass("");
    }
  }, [type]);

  return (
    <div className="lecture">
      <h2>{name} </h2>
      <div className="date">
        <h3>
          <span className="time">{time} </span>
          <span>&middot;</span>
          <span className="classroom"> {classroom}</span>
        </h3>
      </div>
      <div className={"type " + colorClass}></div>
    </div>
  );
}
