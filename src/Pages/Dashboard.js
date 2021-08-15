import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../Components/Auth";
import Navbar from "../Components/Navbar/NavbarAuth";
import UnderHeader from "../Components/UnderHeader";
import FruitSection from "../Components/FruitsSection";
import VeggiesSection from "../Components/Veggies";

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Redirect to="/home" />;
  }

  return (
    <div>
      <Navbar />
      <UnderHeader />
      <FruitSection />
      <VeggiesSection />
    </div>
  );
};

export default Dashboard;
