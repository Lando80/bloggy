import express from 'express';

const routes = express.Router()

routes.get('/', (request, response) => {
    response.status(201).json({ menssagem: 'Olá enfermeira!' })
})

export default routes




