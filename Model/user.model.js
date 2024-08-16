import {Datatype, DataTypes} from "sequelize";
import bcrypt from "bcrypt.js";
import { genSaltSync } from "bcryptjs";

const User= sequelize.define("user",{
    username:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false,
        set(v){
            let saltkey= bcrypt.genSaltSync(12);
            let encryptedPassword= bcrypt.hashSync(v,saltkey)
            this.setDataValue("password", encryptedPassword)
        }
    }, 
    email:{
        type: DataTypes.STRING,
        allowNull: false ,
        primarykey:true
    }
});
sequelize.sync()
.then(result =>{
    console.log("User table created")
}).catch(err=>{
    console.log("Something wrong");
})
User.checkPassword=(password, encryptedPassword)=>{
    let status = bcrypt.compareSync(password, encryptedPassword);
    console.log(password,encryptedPassword)
    console.log(status);
    return status;
}
export default User;