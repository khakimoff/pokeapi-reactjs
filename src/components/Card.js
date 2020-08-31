import React from 'react';
import { Link } from 'react-router-dom';

export const Card = ({ name, url }) => {
  const index = url.split('/')[url.split('/').length - 2];
  const urlImg = `https://pokeres.bastionbot.org/images/pokemon/${index}.png`;

  return (
    <>
      <Link to={`/${name}`}>
        <div className="list_card">
          <div className="list_card--wrappTitle">
            <h2>
              Id:&nbsp;
              {index}
            </h2>
            <h2>
              Name:&nbsp;
              {name}
            </h2>
          </div>
          <img src={urlImg} alt={name} />
        </div>
      </Link>
    </>
  );
};
