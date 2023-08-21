import React from "react";
import "./Alert.scss";

interface CardProps {
  isFetching: boolean;
  data: string;
  className: any;
}

const Alert: React.FC<CardProps> = ({ isFetching, data, className }) => {
  const randomFact = data ? data[Math.floor(Math.random() * data.length)] : "";
  return (
    <div className={className}>
      {isFetching ? (
        <span>learn a cat fact</span>
      ) : (
        <div className="cat-alert__trivia">{randomFact}</div>
      )}
    </div>
  );
};

export default Alert;
