import contas from "../models/Conta.js";
 
 
let numero, agencia, cpf;

const constaCad = [];
 
class ContaController {

      static listarContas = ((req, res) => {
        
            res.status(200).json(constaCad);
        }); 
        
      static listarPorId = ((req, res) => {
        let index = buscarContaPorID(req.params.id);
        res.json(constaCad[index]);         

      });  

      static cadastraConta = ((req, res) => {                         
               
               constaCad.push(req.body);

               const valores = Object.values(constaCad);
               for(const v of valores){
                numero = v.numero;
                agencia = v.agencia;
                cpf = v.cpf;
              }
                              
               const somenteNumeros = new RegExp('^[0-9]+$');
               
             if( numero.length > 6 || somenteNumeros.test(numero) == false){
                 console.log("O campo numero precisa ter somente numeros e não pode ter mais que 6 digitos")
             }  
             else if(agencia.length > 4 || somenteNumeros.test(agencia) == false){
                    console.log("O campo agencia precisa ter somente numeros e não pode ter mais que 4 digitos")
                 }
                 else if (cpf.length > 11 || somenteNumeros.test(cpf)  == false){
                    console.log("O campo CPF precisa ter somente numeros e não pode ter mais que 11 digitos")
              } else {                    
                res.status(201).send('Conta cadastrada com sucesso!');
                 
             }
        });  

        static alterarConta = ((req, res) => {
          let index = buscarContaPorID(req.params.id);
          //constaCad[index].id = req.body.id;
          constaCad[index].numero = req.body.numero;
          constaCad[index].agencia = req.body.agencia;
          constaCad[index].cpf = req.body.cpf;
          constaCad[index].status = req.body.status;
          constaCad[index].dataCriacao = req.body.dataCriacao;
          constaCad[index].dataAtualizacao = req.body.dataAtualizacao;

          const valores = Object.values(constaCad);
          for(const v of valores){
           numero = v.numero;
           agencia = v.agencia;
           cpf = v.cpf;
         }                         
          const somenteNumeros = new RegExp('^[0-9]+$');
          
        if( numero.length > 6 || somenteNumeros.test(numero) == false){
            console.log("O campo numero precisa ter somente numeros e não pode ter mais que 6 digitos")
        }  
        else if(agencia.length > 4 || somenteNumeros.test(agencia) == false){
               console.log("O campo agencia precisa ter somente numeros e não pode ter mais que 4 digitos")
            }
            else if (cpf.length > 11 || somenteNumeros.test(cpf)  == false){
               console.log("O campo CPF precisa ter somente numeros e não pode ter mais que 11 digitos")
         } else {                    
           res.json(constaCad);
            
        }

        });
      /*
      //Este método ficou comentado porque a descrição pedia apenas o delete lógico, mas vai seguir aqui como exemplo.
      static excluirConta = ((req, res) => {
        //let {id} = (id);
        let index = buscarContaPorID(req.params.id);
        constaCad.splice(index, 1);
        res.send(`Conta ${index} excluida com sucesso!`); 
      });  
      */
ra
     
      static deleteLogico = ((req, res) => {
        let {id} = req.params;
        let index = buscarContaPorID(id);
        constaCad[index].status = req.body.status;
        res.send(`Conta ${id} desativada com sucesso!`);

      })


       

}

function buscarContaPorID(id) {
  return constaCad.findIndex(conta => conta.id == id);
    
}


   

export default ContaController;