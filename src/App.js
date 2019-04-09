import React, { Component } from 'react'
import Routes from './Routes';
import { Link } from 'react-router-dom'

export class App extends Component {
  render() {
    return (
      <div>

        <nav>
          <Link to="/pokemons">lista</Link>
          <Link to="/detail">detalle</Link>
        </nav>

        <Routes />
      </div>
    )
  }
}

export default App
