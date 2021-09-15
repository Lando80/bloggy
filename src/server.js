import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import routes from './routes';

dotenv.config();

const server = express();
const port = process.env.PORT || 3000;

mongoose.connect(
    `mongodb+srv://lando:${process.env.DB_PASSWORD}@cluster0.iwn59.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
{ useNewUrlParser: true, useUnifiedTopology: true }
);



server.use(express.json());
server.use(routes);


server.listen(port, () => {
    console.log(`Nova conf. da API rodando em http://localhost:${port}`)
});