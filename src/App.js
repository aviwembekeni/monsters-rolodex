// import { Component } from "react";
import { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import "./App.css";

import React from "react";

// FUNCTIONAL COMPONENT

const App = () => {
  const [searchField, setSeachField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name?.toLowerCase().includes(searchField?.toLowerCase());
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLowerCase();
    setSeachField(searchFieldString);
  };

  return (
    <div>
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          className="search-box"
          placeholder="search monsters"
          onSearchChange={onSearchChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    </div>
  );
};

//CLASS BASED COMPONENT

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return {
//             monsters: users,
//           };
//         })
//       );
//   }

//   onSearchChange = (e) => {
//     this.setState(() => {
//       return {
//         searchField: e.target.value.toLowerCase(),
//       };
//     });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name?.toLowerCase().includes(searchField?.toLowerCase());
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           className="search-box"
//           placeholder="search monsters"
//           onSearchChange={onSearchChange}
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
