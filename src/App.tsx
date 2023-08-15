import React from "react";
import "./App.scss";
import { FunFact, Form } from "./components/index";

const App = () => {
  return (
    <div className="app">
      <FunFact />
      <Form />
    </div>
  );
};

export default App;
