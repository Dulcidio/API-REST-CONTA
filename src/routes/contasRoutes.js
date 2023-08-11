import express from "express";
import ContaController from "../controllers/contaController.js";

const router = express.Router();


router 
      
      .get("/contas", ContaController.listarContas)
      .get("/contas/:id", ContaController.listarPorId)
      .post("/contas", ContaController.cadastraConta)
      .put("/contas/:id", ContaController.alterarConta)
      //Este método ficou comentado porque a descrição pedia apenas o delete lógico, mas vai seguir aqui como exemplo.
      //.delete("/contas/:id", ContaController.excluirConta)
      .delete("/contas/:id", ContaController.deleteLogico)
 
      


export default router;      