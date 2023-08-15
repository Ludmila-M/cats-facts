import React, { useEffect, useState } from "react";
import { Alert, Emoji } from "../index";

const FunFact = () => {
  const [fetchedData, setFetchedData] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const handleClick = () => {
    setShowAlert(!showAlert);
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
    <div className="navbar">
      <button onClick={handleClick}>
        <Emoji symbol="🐱" label="cat" />
        cool cat fact?
      </button>
      {showAlert && <Alert isFetching={!fetchedData} data={fetchedData} />}
    </div>
  );
};

export default FunFact;
