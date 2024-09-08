import { DataTypes } from "sequelize";
import bcrypt from "bcryptjs";
import sequelize from "../db/user.db.js";

// import { genSaltSync } from "bcryptjs";

const User = sequelize.define("users", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey : true,
        // allowNull: false,       
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            isEmail : true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(v) {
            let saltkey = bcrypt.genSaltSync(12);
            let encryptedPassword = bcrypt.hashSync(v, saltkey);
            this.setDataValue('password', encryptedPassword);
        }
    },
});

User.checkPassword = (password, encryptedPassword) => {
    let status = bcrypt.compareSync(password, encryptedPassword);
    console.log(password, encryptedPassword)
    console.log(status);
    return status;
}
export default User;