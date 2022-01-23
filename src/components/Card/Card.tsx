import { useState } from 'react';
import "./Card.scss";

function Card(props: any) {
  const [stateAge, setState] = useState(Boolean);
  return (
    <div className="card">
      {props.isFetching ? (
        <span>how is the moon today?</span>
      ) : (
          <div className="card__content">
            <div className="card__content-item" onClick={() => setState(true)}>The moon is {props.age} days old today</div>
            {stateAge ? <div>test</div> : null}
            <div className="card__content-item" onClick={() => setState(true)}>Illumination: {props.illumination}</div>
            <div className="card__content-item" onClick={() => setState(true)}>Stage: {props.stage}</div>
          </div>
        )}
    </div>
  );
}

export default Card;
