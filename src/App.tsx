import React from "react";
import "./App.scss";
import { FunFact, CatFact } from "./components/index";

const App = () => {
  return (
    <div className="app">
      <FunFact />
      <CatFact />
    </div>
  );
};

export default App;
