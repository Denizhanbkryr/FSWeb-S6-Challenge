import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Header from "./components/Header";
import Karakterler from "./components/Karakterler";
import axios from "axios";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");

  const changeHandler = (e) => {
    const { value } = e.target;
    console.log(value);
    setSearch(value);
  };

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/`)
      .then((res) => {
        const searchResults = res.data.filter((item) => {
          return (
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.hair_color.toLowerCase().includes(search.toLowerCase())
          );
        });
        setCharacters(searchResults);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [search]);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <Header search={search} changeHandler={changeHandler} />
      <Karakterler characters={characters} />
    </div>
  );
};

export default App;
