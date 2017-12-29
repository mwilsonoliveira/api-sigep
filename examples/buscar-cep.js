var sigep = require('../index')

sigep('dev')
  .then(function(sigepClient){
    sigepClient.
  })
  .catch(function(err){
    console.log(err)
  })