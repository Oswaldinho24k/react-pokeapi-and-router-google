import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import PokemonsList from './components/PokemonsList';
import PokemonDetail from './components/PokemonDetail';

export class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/pokemons" component={PokemonsList} />
                <Route path="/detail" component={PokemonDetail} />
            </Switch>
        )
    }
}

export default Routes
