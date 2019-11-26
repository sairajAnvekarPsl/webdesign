import React, { useEffect } from "react";
import Home from "../Home";
import { ParallaxProvider } from "react-scroll-parallax";

import Footer from "../../components/Footer"

import "./style.css";

export interface Props {
  name?: string;
  enthusiasmLevel?: number;
}

const App = ({ name = "e", enthusiasmLevel = 2 }: Props) => {


  return (
    <ParallaxProvider>
    <div className="App">
      <Home></Home>
    </div>
    </ParallaxProvider>
  );
};

export default App;
