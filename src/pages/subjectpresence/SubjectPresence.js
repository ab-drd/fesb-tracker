import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../modules/header/Header";
import Subject from "../../modules/subject/Subject";
import Footer from "./../../modules/footer/Footer";

function SubjectPresence() {
  const { state } = useLocation();

  return (
    <div>
      <Header />
      <Subject subject={state} />
      <Footer />
    </div>
  );
}

export default SubjectPresence;
