import React from "react";
import "./App.scss";
import { FunFact, CatFact } from "./components/index";
import GithubCorner from 'react-github-corner';

const App = () => {
  return (
    <div className="app">
      <GithubCorner href="https://github.com/Ludmila-M/cats-facts" size={70}/>
      <FunFact />
      <CatFact />
    </div>
  );
};

export default App;
