import  {Sequelize} from "sequelize";

const sequelize = new Sequelize("restapi", "root", "",{
    host :'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(result=>{
    console.log("Database connnected");
}).catch(err=>{
    console.log(err);
})
export default sequelize;