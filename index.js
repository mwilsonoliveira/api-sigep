var soap = require('soap')

module.exports = function(env){
  var url = 'https://apphom.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl'
  if(env==='prod'){
    'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl'
  }

  function sigepClient(client){
    return {
      buscarCEP: function(cep){
        client.consultaCEP({ cep: cep }, function(err, result){
          console.log(err, result)
        })
      }
    }
  }

  return new Promise(function(resolve, reject){
    soap
      .createClient(url, function(err, client){
        if(err){
          reject(err)
        }else{
          resolve(sigepClient(client))
        }
      })
  })

  console.log('SIGEP', env, url)
}

