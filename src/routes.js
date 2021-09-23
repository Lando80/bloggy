import express from 'express';
import UserController from './controllers/UserController';
import SessionController from './controllers/SessionController';

const routes = express.Router()

routes.post('/users', UserController.store)
routes.post('/auth', SessionController.store)

// routes.put('/users', UserController.update)

export default routes
