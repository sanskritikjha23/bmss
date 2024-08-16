import {validationResult} from 'express-validator';
import bcrypt from 'bcryptjs';

export const Login=(request, response, next)=>{
    let{email, password}=request.body;
    try{
            let user=await User.findOne({where:{email},raw:true});
            console.log(user);
            if(user)
            return User.checkpassword(password,user.password)?response.status(200).json({message:'Registration successfull',user}):response.status(401).json({error:"Bad Request | Invalid Password"})
        return response.status(401).json({error:"Bad request | Invalid Email"})
    }
    catch(err){
            return response.status(500).json({error:"Interal Server Error"});
    }
}

export const Register=(request, response, next)=>{
     try{
             const errors= ValidationResult(request);
             if(!errors.IsEmpty())
                return response.status(401).json({error: "Bad request"})

             let{username, email, password}=request.body;
             let user=await User.create({username, email, password});
             return response.status(201).json({message:"User saved", user})
     }
     catch(err){
             console.log(err)
             return response.status(500).json({error:"Internal Server Error"})
     }
}
