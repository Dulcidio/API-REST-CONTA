import express from "express";

const date = new Date();
const status = new Boolean(true);

const conta  = {
    id: "",
    numero: "", 
    agencia: "",
    cpf:  "",
    status:  status,
    dataCriacao:  date,
    dataAtualizacao:  date
}
 
export default conta;