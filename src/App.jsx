import React,{useEffect, useState} from "react";
import CardSection from "./Components/CardSection";
import HeaderSection from './Components/HeaderSection';
import MainSection from './Components/MainSection';
import "./App.css";
import FooterSection from "./Components/FooterSection";
import Featured from "./Components/Featured";
const App = () => {
  return (
    <div>
      <HeaderSection/>
      <MainSection/>
      <CardSection/>
      <Featured/>
      <FooterSection/>
      
    </div>
  )
}

export default App
