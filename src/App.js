import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
/******************************************************************** */
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };

  }

  async componentDidMount() {
    try {
      let response = await fetch("http://jsonplaceholder.typicode.com/users");
      let users = await response.json();
      this.setState({ monsters: users });
    } catch (error) {
      console.log(error);
    }
  }

  handleChange = (evt) => {
    this.setState({ searchField: evt.target.value })
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(
      monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="Search monsters..."
          handleChange={this.handleChange} />
        <CardList key="cl1" monsters={filteredMonsters} />
      </div>
    );
  }
}

/******************************************************************** */
export default App;
