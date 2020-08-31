import React, { useEffect, useState } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import axios from 'axios';

export const Abilities = () => {
  const [effect, setEffect] = useState('');

  const history = useHistory();
  const match = useRouteMatch();
  const { abilitiesIndex } = match.params;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://pokeapi.co/api/v2/ability/${abilitiesIndex}/`,
      );
      setEffect(result.data.effect_entries[1].effect);
    };
    fetchData();
  }, []);

  return (
    <>
      <button onClick={() => history.goBack()}>Go back</button>
      <p>
        <b>Effect Description</b>
      </p>
      <p>{effect}</p>
    </>
  );
};
