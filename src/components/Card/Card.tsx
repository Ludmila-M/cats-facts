import React from "react";
import { Circles } from "react-loader-spinner";
import "./Card.scss";

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
    <div className={`card__trivia ${image_link !== "" ? 'card__trivia--visible' : 'card__trivia--hidden'}`}>
      <img src={image_link} alt={name} height="50px" className="card__trivia-image" />
      <span>{name}</span>
      <span>{origin}</span>
      <span>{length}</span>
    </div>
  );
};

const Card: React.FC<CardProps> = ({ isFetching, data }) => {
  return (
    <div className="card">
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
          {data
            ? data.map((e: CardContentProps) => (
                <CardContent
                  key={e.name}
                  image_link={e.image_link}
                  name={e.name}
                  length={e.length}
                  origin={e.origin}
                />
              ))
            : null}
        </div>
      )}
    </div>
  );
};

export default Card;
