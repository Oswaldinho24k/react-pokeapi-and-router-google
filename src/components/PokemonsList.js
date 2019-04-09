import React, { Component } from 'react';
import { getPokemons } from '../services/pokeapi'
import { Card } from 'antd';


const { Meta } = Card;


class PokemonsList extends Component {

    state = {
        pokemons: []
    }

    componentWillMount() {
        getPokemons()
            .then(pokemons => {
                this.setState({ pokemons: pokemons.results })
            }).catch(e => {
                console.log(e)
            })
    }

    render() {
        const { pokemons } = this.state
        return (
            <div className="App">

                {pokemons.map((pok, key) => (
                    <Card
                        key={key}
                        hoverable
                        style={{ width: 240 }}
                    >
                        <Meta
                            title={pok.name}
                            description={pok.url}
                        />
                    </Card>
                ))}


            </div>
        );
    }
}

export default PokemonsList;
