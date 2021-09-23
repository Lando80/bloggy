import User from "../models/User";

class UserConroller {
    async store(request, response){
        const { name, email, password, bio, avatar } = request.body
    
        const isUserRegistered = await User.findOne({ email })
        
        if(isUserRegistered) {
            return response.status(409).json({ error: 'O usuario ja foi cadastrado'})
        }
        
        const user = await User.create({
            name,
            email,
            password,
            bio,
            avatar,
        })
    
        let userResult = user.toObject();
    
        delete userResult['password'];
        
        return response.status(201).json(userResult);
    }
  
}

export default new UserConroller();
