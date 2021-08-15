import React from "react";
import UnderHeader from "../Components/UnderHeader/index";
import FruitSection from "../Components/FruitsSection";
import VeggiesSection from "../Components/Veggies";
import Navbar from "../Components/Navbar/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <UnderHeader />
      <FruitSection />
      <VeggiesSection />
    </div>
  );
}

export default Home;
