var sigep = require('../index')

sigep('dev')
  .then(function(sigepClient){
    sigepClient
      .consultarCEP('89053-030')
      .then(function(endereco){
        console.log(endereco)
      })
      .catch(function(err){
        console.log(err)
      })
  })
  .catch(function(err){
    console.log(err)
  })