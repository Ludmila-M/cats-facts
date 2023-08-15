import React, { useState } from "react";
import { Card } from "../index";
const CatData = () => {
  const [fetchedData, setFetchedData] = useState([{length: '', origin: '', image_link: '', name: ''}]);
  const [catName, setCatName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const fetchCatInfo = async () => {
    setLoading(true);
    const response = await fetch(
      "https://api.api-ninjas.com/v1/cats?name=" + catName,
      {
        method: "GET",
        headers: { "X-Api-Key": process.env.REACT_APP_CATS_API_KEY! },
      }
    );
    const catsInfo = await response.json();
    setFetchedData(catsInfo);
    setLoading(false);
    console.log(typeof fetchedData, 'fetchedData')
  };
  return (
    <React.Fragment>
      <span>sample names: Cymric, Savannah , Colorpoint Shorthair</span>
      <input
        placeholder="e.g. abyssinian"
        onChange={(e) => setCatName(e.target.value)}
      />
      <button onClick={fetchCatInfo}>fetch</button>
      <Card isFetching={loading} data={fetchedData} />
    </React.Fragment>
  );
};

export default CatData;
