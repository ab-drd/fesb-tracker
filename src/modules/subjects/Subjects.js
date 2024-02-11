import React, { useEffect, useState } from 'react'
import SubjectInfo from '../../components/subjectInfo/SubjectInfo'
import useFetch from '../../hooks/useFetch';

import { HalfMalf } from "react-spinner-animated";
import "react-spinner-animated/dist/index.css";

function Subjects() {

  const [schedule, setSchedule] = useState([]);
  const week = ["pon", "uto", "sri", "cet", "pet"];
  const [day, setDay] = useState([]);

  const accessToken = window.localStorage.getItem("token");
  const { data, error, loading } = useFetch(`http://localhost:4200/scheduleweek`, accessToken);

  useEffect(() => {
    const day = "pon";
    setSchedule(data);

    document.getElementById("pon").classList.add("active");

    data.forEach((d) => {
      if (Object.keys(d)[0] === day) {
        setDay(d[day]);
      }
    })
  }, [data])

  const setClassActive = (e) => {
    const days =document.querySelectorAll(".day");
    days.forEach((day)=> day.classList.remove("active") );

    e.target.classList.add("active");
    const day = e.target.id;
    schedule.forEach((sch) => {
      if (Object.keys(sch)[0] === day) {
        setDay(sch[day]);
      }
    })
  }

   if (loading) {
      return <HalfMalf text={"Loading..."} width={"100px"} height={"100px"} bgColor={"#2e2951"} />;
    }
  
  if (error.isError) {
    return <p>{error.message}</p>;
  }
  return (
    <div className='subjects'>
      <div className="week">
        {week.map((w, index) => {
          return (
            <div className='day' onClick={(e) => setClassActive(e)} id={w} key={index}><p className='text-center'  >{w + " " + (index + 15)}</p></div>
          )

        })}
      </div>

      <div className="subject-info-holder">
        {day.length !==0 ? day.map((d, index) => {
          return (
            <SubjectInfo sch={d} key={index} />
          )
        }): <h2>Danas nemate predmeta</h2>
        }

      </div>

      <button className="btn btn-color">Odaberi tjedan</button>
    </div>
  )
}

export default Subjects