import express from "express";
import contas from "./contasRoutes.js"

const routes = (app) => {
    app.route('/').get((req,res) => {
        res.status(200).send({titulo: "API CONTA BANCARIA"})
    });

    app.use(
        express.json(),
        contas
    )
}


export default routes;