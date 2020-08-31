import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Card } from './Card';

export const List = () => {
  const [filterText, setFilterText] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://pokeapi.co/api/v2/pokemon?limit=30');
      setItems(result.data.results);
    };
    fetchData();
  }, []);

  const filteredItems = items.filter((item) => item.name.toLocaleLowerCase().includes(filterText));

  const itemsToDisplay = filterText ? filteredItems : items;

  return (
    <>
      <div className="list_top">
        <h1>Pokemon search</h1>
        <input
          type="text"
          placeholder="Name"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value.toLocaleLowerCase())}
        />
      </div>
      <hr />
      {itemsToDisplay.map((item) => (
        <Card name={item.name} url={item.url} />
      ))}
    </>
  );
};
