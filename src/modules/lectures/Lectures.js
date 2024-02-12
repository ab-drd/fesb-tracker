import React, { useState, useEffect } from "react";
import Lecture from "../../components/lecture/Lecture";
import Popup from "../popup/Popup";
import axios from "axios";
import useFetch from "../../hooks/useFetch";
import { HalfMalf } from "react-spinner-animated";
import "react-spinner-animated/dist/index.css";

export default function Lectures() {

  const accessToken = window.localStorage.getItem("token");

  const [trigger, setTrigger] = useState(false);
  const { data, error, loading } = useFetch(
    `http://localhost:4200/scheduletoday`, accessToken
  );

  const [lectures, setLectures] = useState([]);
  const [lecture, setLecture] = useState({});
  const [filtrirano, setFiltrirano] = useState([]);
  const [activeEvidentirano, setActiveEvidentirano] = useState(true);
  const [activeNeevidentirano, setActiveNeevidentirano] = useState(false);


  useEffect(()=>{
    setLectures(data);
    setFiltrirano([]);

    data.forEach((lecture) => {
      if (lecture.presence === true) {
        setFiltrirano((evid) => [...evid, lecture]);
      }
    });
  }, [data])


  const handlePresence = async () => {
    await axios.patch("http://localhost:4200/updatescheduletoday", lecture, {
      headers: {
        Authorization: accessToken.trim(),
      },
    });
    setTrigger(false);
    setTimeout(()=>{window.location.reload(true)}, 0);
  };

  const handleNeevidentirano = () => {
    setFiltrirano([]);

    lectures.forEach((lecture) => {
      if (lecture.presence === false) {
        setFiltrirano((lec) => [...lec, lecture]);
      }
    });
    setActiveEvidentirano(false);
    setActiveNeevidentirano(true);
  };

  const handleEvidentirano = () => {
    setFiltrirano([]);
    lectures.forEach((lecture) => {
      if (lecture.presence === true) {
        setFiltrirano((evid) => [...evid, lecture]);
      }
    });
    setActiveEvidentirano(true);
    setActiveNeevidentirano(false);
  };

  const handleClick = (lecture) => {
    setTrigger(true);
    setLecture(lecture);
  };

   if (loading) {
    return <HalfMalf text={"Loading..."} width={"100px"} height={"100px"} bgColor={"#2e2951"}/>;
  }
  
  if (error.isError) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="lectures">
      <h2 className="text-holder">
        <button className="btn--no-style" onClick={() => handleEvidentirano()}>
          <h2 className={activeEvidentirano ? "active" : ""}>Evidentirano</h2>
        </button>
        <span> | </span>
        <button
          className="btn--no-style"
          onClick={() => handleNeevidentirano()}
        >
          <h2 className={activeNeevidentirano ? "active" : ""}>
            Neevidentirano
          </h2>
        </button>
      </h2>
      <h2>Današnja predavanja</h2>

      {lectures.length === 0 ? (
        <p className="text-center">Danas nemate obaveza</p>
      ) : filtrirano.length !== 0 ? (
        filtrirano.map((lecture, index) => {
          return (
            <button
              className="btn--no-style"
              onClick={() => handleClick(lecture)}
              key={index}
            >
              <Lecture lecture={lecture} />
            </button>
          );
        })
      ) : (
        <p className="text-center">
          Danas nema {activeEvidentirano ? "evidentiranih" : "neevidentiranih"}{" "}
          predmeta
        </p>
      )}

      <Popup
        trigger={trigger}
        setTrigger={setTrigger}
        lecture={lecture}
        handlePresence={handlePresence}
      />
    </div>
  );
}
