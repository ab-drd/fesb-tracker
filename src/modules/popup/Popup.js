import React from "react";

function Popup({ trigger, setTrigger, lecture, handlePresence }) {
  if (trigger) {
    if (lecture.presence === true)
      return (
        <div className="popup-holder">
          <div className="popup">
            <p>Već ste evidentirani!</p>
            <button className="btn btn-color" onClick={() => setTrigger(false)}>
              Ok
            </button>
          </div>
        </div>
      );
    return (
      <div className="popup-holder">
        <div className="popup">
          <p>Želite li nastaviti sa evidencijom predmeta:</p>
          <h2 className="h2-bold text-center">{lecture.name}</h2>

          <div className="buttons-holder">
            <button className="btn btn-empty" onClick={() => setTrigger(false)}>
              Odustani
            </button>
            <button className="btn btn-color" onClick={() => handlePresence()}>
              Evidentiraj
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
