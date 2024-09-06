import { request } from "express";
import jwt from "jsonwebtoken";
export const verifyToken = async (request,response,next) =>{
    try{
        let token = request.headers.authorization;
        token = token.split(" ")[1];
        jwt.verify(token,"Sipl@12345");
        next();
    }catch(err){
        console.log(err);
        return response.status(401).json({error:"Unauthorized access"});
    }
}
 