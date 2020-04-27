import axios from 'axios';

export function buscaPokemon(id) {
    axios.get('httpo://api.pokemon/alguma-coisa')
        .then(resultado => return resultado.data)
}
