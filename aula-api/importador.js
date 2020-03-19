var axios = require('axios');
var sqlite = require('sqlite3');

// isso aqui conecta com o banco de dados
var db = new sqlite.Database('./banco-corona.db', erro => {
  if (erro) {
    console.log('Erro ao conectar com o banco de dadods');
  }
})

// puxar os dados da API do corona
axios.get('https://api.covid19api.com/summary')
  .then(resultado => {

    // paises é uma lista
    var paises = resultado.data.Countries;

    // deleta todos os dados da tabela
    db.run('DELETE FROM dadosCorona', erroDelete => {
      if (erroDelete) {
        console.log('Erro ao deletar colunas: ', erroDelete);
      }
      paises.forEach(pais => {
          // inserir um pais no meu banco-corona
          db.run('INSERT INTO dadosCorona (pais, totalDeCurados) VALUES (?, ?)', [pais.Country, pais.TotalRecovered], erro => {
            if (erro) {
              console.log('Erro ao inserir dados: ', erro);
            }
          })
        })
    })
  })
