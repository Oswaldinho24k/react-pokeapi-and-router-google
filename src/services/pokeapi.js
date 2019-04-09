import axios from 'axios'

const apiURL = 'https://pokeapi.co/api/v2/pokemon/'

export const getPokemons = () => {
    return axios.get(apiURL)
        .then(res => {
            return res.data
        }).catch(e => {
            console.log(e)
        })
}

export const getPokemon = () => {
    return axios.get(`${apiURL}4/`)
        .then(res => {
            return res.data
        }).catch(e => {
            console.log(e)
        })
}