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
      .then(response => response.json())
      .then(users => {this.setState({ heros: heros})});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    var { heros, searchfield } = this.state;
    var filteredheros = heros.filter(hero =>{
      return hero.name.toLowerCase().includes(searchfield.toLowerCase()) || hero.heroName.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !heros.length ?
      <h1 className='tc'>Loading</h1> :
      (
        <div className='tc'>
          <h1>Marvel Cinematic Universe</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <CardsList heros={filteredheros} />
        </div>
      );
  }
}

export default App;


