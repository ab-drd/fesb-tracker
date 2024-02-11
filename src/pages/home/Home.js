import React from "react";
import Header from "./../../modules/header/Header";
import Footer from "./../../modules/footer/Footer";
import Lectures from "../../modules/lectures/Lectures";

function Home() {
  return (
    <div className="home">
      <Header />
      <Lectures />
      <Footer />
    </div>
  );
}

export default Home;
