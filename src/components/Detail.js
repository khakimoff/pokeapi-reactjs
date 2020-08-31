import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';

import axios from 'axios';

import { generateKey } from '../Data/genetateKey';

export const Detail = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [name, setName] = useState('');
  const [abilities, setAbilities] = useState([]);
  const [stats, setStats] = useState([]);
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [types, setType] = useState([]);
  const [id, setId] = useState('');

  const history = useHistory();
  const match = useRouteMatch();
  const { pokemonIndex } = match.params;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`,
      );
      setName(result.data.name);
      setImageUrl(result.data.sprites.front_default);
      setAbilities(result.data.abilities);
      setStats(result.data.stats);
      setHeight(result.data.height);
      setWeight(result.data.weight);
      setType(result.data.types);
      setId(result.data.id);
    };
    fetchData();
  }, []);

  return (
    <>
      <button onClick={() => history.goBack()}>Go back</button>
      <div className="details">
        <div className="details_item">
          <img src={imageUrl} alt={name} />
        </div>
        <div className="details_item">
          <h3>Main characteristics</h3>
          <p>
            <b>Name:</b>
            {name}
          </p>
          <p>
            <b>ID:</b>
            {id}
          </p>
          <p>
            <b>Height:</b>
            {height}
          </p>
          <p>
            <b>Weight:</b>
            {weight}
          </p>
          <div className="details_item--wrappList">
            <p>
              <b>Types:</b>
            </p>
            <ul>
              {types.map((item) => (
                <li key={generateKey(item.type.name)}>{item.type.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="details_item">
          <h3>Stats</h3>
          <ul>
            {stats.map((item) => (
              <li key={generateKey(item.stat.name)}>
                <b>
                  {item.stat.name}
                  :
                </b>
                {item.base_stat}
              </li>
            ))}
          </ul>
        </div>
        <div className="details_item">
          <h3>Abilities</h3>
          <ul>
            {abilities.map((item) => (
              <li key={generateKey(item.ability.name)}>
                <Link
                  to={`${match.url}/${item.ability.name}`}
                  className="details_item_link"
                >
                  {item.ability.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
