import React, {useEffect, useState} from 'react'
import { IoMdTime } from "react-icons/io"
import { HiUserCircle } from "react-icons/hi"
import { SiGoogleclassroom } from "react-icons/si"
import { FaUsers } from "react-icons/fa"
import { CiLocationOn } from "react-icons/ci"

export default function SubjectInfo({sch}) {

   const [colorClass, setColorClass] = useState("");

  const {name, classroom, professor, group, type, time }=sch; 

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
    <div className='subject-info'>
      <div className={"name " + colorClass}><h2 className='text-center capitalize'>{name}</h2></div>
      <div className="info">
        <div className="type">
          <SiGoogleclassroom />
          <p>{type}</p>
        </div>
         <div className="group">
          <FaUsers />
          <p>{group}</p>
        </div>
        <div className="professor">
          <HiUserCircle />
          <p>{professor}</p>   
        </div>
         <div className="classroom">
          <CiLocationOn />
          <p>{classroom}</p>
        </div>
        <div className="time">
          <IoMdTime />
          <p>{time}</p>
        </div>
       
       
      </div>

    </div>
  )
}
