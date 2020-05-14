import axios from 'axios';

export const getPokemons = (callback) => {
  axios.get('https://pokeapi.co/api/v2/type/13').then((response) => {
    const pokemons = response.data.pokemon.map((pokemonData) => ({
      name: pokemonData.pokemon.name.toUpperCase(),
    }));
    callback(pokemons);
  });
};

export const getPokemon = (name, callback) => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((response) => {
    callback(response.data);
  });
};
