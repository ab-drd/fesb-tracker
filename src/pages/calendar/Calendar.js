import React from "react";
import Subjects from "../../modules/subjects/Subjects";
import Header from "../../modules/header/Header";
import Footer from "./../../modules/footer/Footer";

function Calendar() {
  return (
    <div>
      <Header />
      <Subjects/>
      <Footer />
    </div>
  );
}

export default Calendar;
