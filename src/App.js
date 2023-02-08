import "./App.css";
// import SectionFirst from './Component/sectionFirst/SectionFirst';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from './Component/navbar/Navbar';
import SectionFirst from "./Component/SectionFirst/SectionFirst";
import SectionSecond from "./Component/SectionSecond/SectionSecond";
import SectionThird from "./Component/SectionThird/SectionThird";
import SectionFourth from "./Component/SectionFourth/SectionFourth";
import SectionFifth from "./Component/SectionFifth/SectionFifth";

function App() {
  return (
    <>
      <SectionFirst />
      <SectionSecond />
      <SectionThird/>
      <SectionFourth/>
      <SectionFifth/>
    </>
  );
}

export default App;
