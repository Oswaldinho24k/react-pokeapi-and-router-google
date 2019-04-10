import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import PokemonsList from './components/PokemonsList';
import PokemonDetail from './components/PokemonDetail';
import SignUpForm from './components/SignUpForm'
import LoginForm from './components/LoginForm'

export class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/signup" component={SignUpForm} />
                <Route exact path="/login" component={LoginForm} />
                <Route exact path="/pokemons" component={PokemonsList} />
                <Route exact path="/pokemons/:pokemonId" component={PokemonDetail} />
            </Switch>
        )
    }
}

export default Routes
