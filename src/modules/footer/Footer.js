import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import { GoCalendar } from "react-icons/go";
import { FiClock } from "react-icons/fi";

function Footer() {
  const navigate = useNavigate();
  const pathname = window.location.pathname;
  const { id } = useParams();

  useEffect(() => {
    const icons =document.querySelectorAll(".icons-navigate");
    icons.forEach((day)=> day.classList.remove("active") );

    switch (pathname) {
      case "/home":
        document.getElementById("home").classList.add("active");
        break;
      case "/calendar":
        document.getElementById("calendar").classList.add("active");
        break;
      case "/presence":
        document.getElementById("presence").classList.add("active");
        break;
      case `/presence/${id}`:
        document.getElementById("presence").classList.add("active");
        break;
      default:
    }
  }, [id, pathname]);

  return (
    <footer>
      <BiHomeAlt id="home" className="icons-navigate" onClick={() => navigate("/home")} />
      <GoCalendar id="calendar" className="icons-navigate" onClick={() => navigate("/calendar")} />
      <FiClock id="presence" className="icons-navigate" onClick={() => navigate("/presence")} />
    </footer>
  );
}

export default Footer;
