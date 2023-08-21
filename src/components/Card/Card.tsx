import React from "react";
import { Circles } from "react-loader-spinner";
import "./Card.scss";

const MAX_CATS_NUMBER = 1;

interface CardContentProps {
  image_link: string;
  name: string;
  length: string;
  origin: string;
}

interface CardProps {
  isFetching: boolean;
  data: CardContentProps[];
}

const CardContent = ({
  image_link,
  name,
  length,
  origin,
}: CardContentProps) => {
  return (
    <div
      className={`cat-card__trivia ${
        image_link !== ""
          ? "cat-card__trivia--visible"
          : "cat-card__trivia--hidden"
      }`}
    >
      <img
        src={image_link}
        alt={name}
        height="50px"
        className="cat-card__trivia-image"
      />
      <span>Name: {name}</span>
      <span>Origin: {origin}</span>
      <span>Length: {length}</span>
    </div>
  );
};

const Card: React.FC<CardProps> = ({ isFetching, data }) => {
  return (
    <div className="cat-card mt-5">
      {isFetching ? (
        <Circles
          height="80"
          width="80"
          color="#fffffe"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      ) : (
        <div>
          {data.length ? (
            data
              .slice(0, MAX_CATS_NUMBER)
              .map((e: CardContentProps) => (
                <CardContent
                  key={e.name}
                  image_link={e.image_link}
                  name={e.name}
                  length={e.length}
                  origin={e.origin}
                />
              ))
          ) : (
            <span>no results</span>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
