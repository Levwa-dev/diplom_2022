import  express  from "express";
import path from 'path';
import { fileURLToPath } from 'url';
import bcrypt from 'bcrypt';
import cors from 'cors'
import { sequelize } from "./models.js";
import { Admin} from "./models.js";

const app = express()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(express.static('static'));
const jsonParser = express.json();
sequelize.sync().then(
    () => app.listen(5555, ()=>console.log('listen at 5555'))
).catch(err => console.log(err))


app.use(cors({
    origin: 'http://localhost:3000'
}))

app.get('/admin/realtors', jsonParser,(req, res)=>{
    Admin.findAll({ raw:true// attributes: ["id","name"]
    })
    .then(users=>res.json(users))
    .catch(err=>console.log(err))
})
app.post('/admin/realtors', jsonParser, (req, res)=>{
    let request = req.body.input
    Admin.findAll({where:{name:request}, raw:true})
    .then(users=>{
        if(users.length === 0){
            Admin.findAll({where:{email:request}, raw:true})
            .then(users=>{
                if (users.length === 0){
                    res.json([{id: 1, err:'Такого рієлтора не існує'}])
                }
                else{
                    res.json(users);
                  
                }
            })
            .catch(err=>{console.log(err)})
        }
        else{
            res.json(users)}
        })
        .catch(err=>console.log(err))
})
