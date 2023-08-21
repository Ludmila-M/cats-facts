import React, { useEffect, useState } from "react";
import { Alert } from "../index";
import './FunFact.scss';
import {ReactComponent as Lightbulb} from '../../assets/icons/lightbulb-outline.svg';

const FunFact = () => {
  const [fetchedData, setFetchedData] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [triviaVisibleFirstTime, setTriviaVisibleFirstTime] = useState(false);
  const handleClick = () => {
    setShowAlert(true);
    setTriviaVisibleFirstTime(true);
    if (showAlert) {
      fetchCatsFacts()
    }
  };

  const fetchCatsFacts = async () => {
    const response = await fetch("https://cat-fact.herokuapp.com/facts", {
      method: "GET",
    });
    const catsFacts = await response.json();
    const catFact = catsFacts.map((fact: { text: string }) => fact.text);
    setFetchedData(catFact);
  };

  useEffect(() => {
    fetchCatsFacts();
  }, []);

  return (
    <div className="fun-fact">
      <button onClick={handleClick} className="fun-fact__button">
        <Lightbulb className="fun-fact__icon" />
      </button>
      {showAlert && <Alert isFetching={!fetchedData} data={fetchedData} className={`cat-alert pt-3 pt-md-0 ${triviaVisibleFirstTime && 'cat-alert--animate'}`}/>}
    </div>
  );
};

export default FunFact;
