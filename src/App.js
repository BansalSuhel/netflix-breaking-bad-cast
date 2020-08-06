import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/UI/Header';
import CharacterFlex from './components/CharacterFlex';
import SearchBox from './components/UI/SearchBox';
import Spinner from './components/UI/Spinner';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      setItems(result.data);
      setShowSpinner(false);
    }

    fetchItems();
  }, [query])

  return (
    <div className="container">
      <Header />
      <SearchBox query={query} setQuery={setQuery} setShowSpinner={setShowSpinner} />
     {showSpinner ? (<Spinner />) : <CharacterFlex items={items} />} 
    </div>
  );
};

export default App;
