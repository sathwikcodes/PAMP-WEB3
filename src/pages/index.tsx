import { HeaderAction } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { InvestmentSection } from "../components/Investement/Investement";
import React from "react";

const Home = () => {
  return (
    <>
      <HeaderAction />
      <Hero />
      <InvestmentSection />
    </>
  );
};

export default Home;
