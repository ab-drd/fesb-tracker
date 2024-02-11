import React, { useRef } from "react";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { data } from "../../const/dougnutData";

function Statistic({ subjectPresence }) {
  const ref = useRef();
  return (
    <div className="statistic">
      {subjectPresence.map((presence) => {
        return (
          <div className="subject-container" key={presence.id}>
            <h2 className="subject-type">{presence.type}</h2>
            <h2 className="subject-presence">
              <span className="presence-number">{presence.present}</span>/13
            </h2>
            <Doughnut ref={ref} data={data} />
          </div>
        );
      })}
    </div>
  );
}

export default Statistic;
