import { request, response } from "express";
import { where } from "sequelize";

export const updateCategory =async(request, response, next)=>{
    try{
        let id= request.params.id;
        let category = await Category.findOne({where:{id}});
        if(Category){
            category.name = request.body.name;
            category.slug = request.body.slug;
            category.url  = request.body.url;
            await category.save();
            return response.status(200).json({message:"update successfully"});
        }
        return response.status(404).json({error:"Resource not found"});
    }catch(err){
           console.log(err);
           return response.status(500).json({error:"Internal server error"});
    }
}  

export const getCategory = async(request, response, next)=>{
    Category.findByPK(request.params.email)
    .then(result=>{
        return response.status(200).json({categories: result});
    })
}