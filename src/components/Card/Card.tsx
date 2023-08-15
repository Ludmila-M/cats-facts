import React from "react";
import { ProgressBar } from "react-loader-spinner";
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
    <div>
      <img src={image_link} alt={name} height="50px" />
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
        <ProgressBar
          height="80"
          width="80"
          ariaLabel="progress-bar-loading"
          wrapperStyle={{}}
          wrapperClass="progress-bar-wrapper"
          borderColor="#F4442E"
          barColor="#51E5FF"
        />
      ) : (
        <div className="card">
          <div className="card__trivia">
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
        </div>
      )}
    </div>
  );
};

export default Card;
