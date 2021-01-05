import React, { Component } from 'react';
import './App.css';
import CardsList from './CardList';
import SearchBox from './SearchBox'
import { heros } from './mcu'
import 'tachyons';

class App extends Component {
  constructor() {
    super()
    this.state = {
      heros: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ heros: users})});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { heros, searchfield } = this.state;
    const filteredheros = heros.filter(hero =>{
      return hero.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !heros.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <CardsList heros={filteredheros} />
        </div>
      );
  }
}

export default App;


