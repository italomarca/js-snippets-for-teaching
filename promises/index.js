var axios = require('axios')

axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then((dados)=>{
        console.log('chegaram meus pokemons e deu tudo certo:', dados.data)
    })


