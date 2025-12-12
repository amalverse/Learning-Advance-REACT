import React from "react";

const Card = (props) => {
  return (
    <div>
      <a href={props.user.url} target="_blank" rel="noopener noreferrer">
        <img
          src={props.user.download_url}
          alt={props.user.author}
          className="h-40 w-44 object-cover rounded-2xl"
        />
        <h2 className="text-center font-bold">{props.user.author}</h2>
      </a>
    </div>
  );
};

export default Card;
