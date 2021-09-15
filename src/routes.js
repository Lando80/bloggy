import express from 'express';
import UserController from './controllers/UserController'; 

const routes = express.Router()

// routes.get('/', (request, response) => {
//    response.status(201).json({ menssagem: 'Olá enfermeira!' })
// })

routes.post('/users', UserController.store)


export default routes




