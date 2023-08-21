import React, { useState } from "react";
import { Card } from "../index";
import "./CatFact.scss";

const sampleNames = ["Cymric", "Savannah", "Colorpoint Shorthair"];

const CatFact = () => {
  const [fetchedData, setFetchedData] = useState([
    { length: "", origin: "", image_link: "", name: "" },
  ]);
  const [customCatName, setCustomCatName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const fetchCatInfo = async (providedCatName?: string) => {
    setLoading(true);
    const response = await fetch(
      "https://api.api-ninjas.com/v1/cats?name=" +
        (providedCatName ? providedCatName : customCatName),
      {
        method: "GET",
        headers: { "X-Api-Key": process.env.REACT_APP_CATS_API_KEY! },
      }
    );
    const catsInfo = await response.json();
    setFetchedData(catsInfo);
    setLoading(false);
  };

  const nameChangeHandler = (e: any) => {
    setCustomCatName(e.target.value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    fetchCatInfo();
  };

  const resetInput = (e: any) => {
    e.target.value = "";
    setCustomCatName("");
  };

  return (
    <div className="cat-fact container col-12">
      <div>
        sample names:{" "}
        {sampleNames.map((name: string) => (
          <button key={name} onClick={() => fetchCatInfo(name)}>
            {name}
          </button>
        ))}
      </div>
      <form onSubmit={onSubmit} className="cat-fact__form">
        or input your own:{" "}
        <input
          placeholder="e.g. Bengal"
          onChange={nameChangeHandler}
          value={customCatName ? customCatName : ""}
          onFocus={(e) => resetInput(e)}
        />
        <button type="submit" disabled={!customCatName}>
          fetch
        </button>
        <Card isFetching={loading} data={fetchedData} />
      </form>
    </div>
  );
};

export default CatFact;
