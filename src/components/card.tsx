import React from 'react';

interface CardProps {
  image: string;
}

export default function Card(props: CardProps) {
  return (
    <div className="card "> 
      <img src={props.image} className="card-img-top" alt="..." style={{ objectFit: 'cover', height: '200px' , width: '100%'}} /> 
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">Fun Fact About Cat</h5>
        <p className="card-text flex-fill">
        Cats sleep for many hours each day. When they are awake they need opportunities to exercise and play.
        </p>
        <a href="https://www.youtube.com/watch?v=JxS5E-kZc2s" className="btn btn-primary "> 
          Funny Cats
        </a>
      </div>
    </div>
  );
}
 
