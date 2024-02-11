import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TbSettings } from "react-icons/tb";
import { AiOutlineReload } from "react-icons/ai";

function Header() {
  const pathname = window.location.pathname;
  const [headingText, setHeadingText] = useState("");
  const [isHomePage, setIsHomePage] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    switch (pathname) {
      case "/home":
        setHeadingText("FESB Tracker");
        setIsHomePage(true);
        break;
      case "/calendar":
        setHeadingText("Raspored");
        setIsHomePage(false);
        break;
      case "/presence":
        setHeadingText("Prisutnost");
        setIsHomePage(false);
        break;
      case `/presence/${id}`:
        setHeadingText("Prisutnost");
        setIsHomePage(false);
        break;
      default:
        setHeadingText("");
        setIsHomePage(false);
    }
  }, [id, pathname]);
  return (
    <header>
      <h1>{headingText}</h1>
      <div className="icon-holder">
        {isHomePage ? <AiOutlineReload /> : ""}
        <TbSettings />
      </div>
    </header>
  );
}

export default Header;
