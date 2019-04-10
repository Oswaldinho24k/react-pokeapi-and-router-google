import React, { Component } from 'react'
import { getPokemon } from '../services/pokeapi'
import { Card } from 'antd';


const { Meta } = Card;

export class PokemonDetail extends Component {

    state = {
        pokemon: {}
    }

    componentWillMount() {

        const { pokemonId } = this.props.match.params
        getPokemon(pokemonId)
            .then(pokemon => {
                console.log(pokemon)
                this.setState({ pokemon })
            }).catch(e => {
                console.log(e)
            })
    }

    render() {
        const { pokemon } = this.state
        const { name, sprites } = pokemon
        return (
            <div>
                <Card
                    hoverable
                    style={{ width: 500 }}
                    cover={<img alt="example" src={sprites ? sprites.front_default : ''} />}
                >
                    <Meta
                        title={name}
                    />
                </Card>
            </div>
        )
    }
}

export default PokemonDetail
