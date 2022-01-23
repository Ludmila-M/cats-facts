import { useState } from 'react';
import "./Card.scss";

function Card(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleButton = () => setIsOpen(!isOpen);
  console.log(props.data)
  const randomFact = props.data[Math.floor(Math.random()*props.data.length)]
  return (
    <div className="card">
      {props.isFetching ? (
        <span>learn a cat fact</span>
      ) : (
          <div className="card__content">
            <div className="card__content-item" onClick={toggleButton}>click to learn</div>
            {isOpen && <div>{randomFact}</div>}
          </div>
        )}
    </div>
  );
}

export default Card;
