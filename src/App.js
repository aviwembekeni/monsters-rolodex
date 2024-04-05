import { React, Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return {
              monsters: users,
            };
          },
          () => console.log(this.state)
        )
      );
  }

  onSearchChange = (e) => {
    this.setState(
      () => {
        return {
          searchField: e.target.value.toLowerCase(),
        };
      },
      () => console.log(this.state)
    );
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name?.toLowerCase().includes(searchField?.toLowerCase());
    });

    return (
      <div className="App">
        <input
          name="search-box"
          type="search"
          placeholder="search monsters"
          onChange={(e) => this.onSearchChange(e)}
        />
        {filteredMonsters.map((monster) => (
          <h1 key={monster.id}> {monster.name} </h1>
        ))}
      </div>
    );
  }
}

export default App;
