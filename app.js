//const { request, response } = require('express');
//const express = require('express');
import express from "express";

const app = express();
const port = 3000;

app.get('/', (request, response) => {
    response.status(200).send('Olá enfermeira!');
});

app.listen(port, ()=> {
    console.log(`API esta executando em http://localhost:${port}`);
});
