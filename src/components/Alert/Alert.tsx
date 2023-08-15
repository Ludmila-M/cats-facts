import React from "react";
import "./Alert.scss";

interface CardProps {
  isFetching: boolean;
  data: string;
}

const Alert: React.FC<CardProps> = ({ isFetching, data }) => {
  const randomFact = data ? data[Math.floor(Math.random() * data.length)] : "";
  return (
    <div className="alert">
      {isFetching ? (
        <span>learn a cat fact</span>
      ) : (
        <div className="alert__trivia">{randomFact}</div>
      )}
    </div>
  );
};

export default Alert;
