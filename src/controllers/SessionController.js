import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from "../models/User";

class SessionController {
    async store(request, response){
        const { email, senha } = request.body

        const user = await User.findOne({ email })

        if (!user) {
            return response.status(401).json ({ error: 'Usuário não registrado'})
        }

// Este bloco 'if' não funciounou seguindo o passo a passo da aula
//
//        if (!(await bcrypt.compare(senha, user.password))) {
//            return response.status(401).json({error: 'senha inválida'})
//        }
//------------------------------------------------------------------

        if (!(await senha == user.password)){
            return response.status(401).json({error: 'senha inválida'})
            
        }

        const { id, name } = user

        return response.status(200).json({
            user: {
                id,
                name,
                email,
            },
            token: jwt.sign({ id }, process.env.JWT_SECRET, {
                expiresIn: process.env.JWT_EXPIRATION,
            }),
        })
    }
}

export default new SessionController();
