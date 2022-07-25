import express from "express";
import { unlinkSync } from 'fs';
import bcrypt from 'bcrypt';
import { __dirname } from "./settings.js"
import cors from 'cors'
import { sequelize } from "./models.js";
import { Admin, Agency} from "./models.js";
import { upload } from "./multerConfig.js";


const app = express()

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
app.get('/admin/agencies', jsonParser, (req,res)=>{
    Agency.findAll({
        attributes: [
            'id',
            'name',
            'email',
            'password',
            'city',
            'number',
            'date'
        ]
    }).then(agencies=>res.json(agencies))
    .catch(err=>{
        console.log(err)
        res.json(err.message)
    })
})
app.post('/admin/agencies', jsonParser, (req, res)=>{
    let requestValue = req.body.input
    Agency.findAll({
        where:{name:requestValue},
        attributes: [
            'id',
            'name',
            'email',
            'password',
            'city',
            'number',
            'date'
        ]
    })
    .then(agencies=>{
        if(agencies.length === 0){
            Agency.findAll({
                where:{email:requestValue},
                attributes: [
                    'id',
                    'name',
                    'email',
                    'password',
                    'city',
                    'number',
                    'date'
                ]
            })
            .then(agencies=>{
                if(agencies.length===0){
                    Agency.findAll({
                        where:{city:requestValue},
                        attributes: [
                            'id',
                            'name',
                            'email',
                            'password',
                            'city',
                            'number',
                            'date'
                        ]
                    })
                    .then(agencies=>{
                        if(agencies.length===0){
                            Agency.findAll({
                                where:{number:requestValue},
                                attributes: [
                                    'id',
                                    'name',
                                    'email',
                                    'password',
                                    'city',
                                    'number',
                                    'date'
                                ]
                            })
                            .then(agencies=>{
                                if(agencies.length === 0){
                                    res.json([{id: 1, err:'Такої агенції не існує'}])
                                }
                                else{
                                    res.json(agencies)
                                }
                            })
                            .catch(err=>{
                                console.log(err)
                                res.json(err.message)
                            })
                        }
                        else{
                            res.json(agencies)
                        }
                    })
                    .catch(err=>{
                        console.log(err)
                        res.json(err.message)
                    })
                }
                else{
                    res.json(agencies)
                }
            })
            .catch(err=>{
                console.log(err)
                res.json(err.message)
            })
        }
        else{
            res.json(agencies)
        }
    })
    .catch(err=>
        {console.log(err)
         res.json(err.message)   
        })
})
app.post('/admin/create-agency', upload.single('image'), (req, res)=>{
        let copy = {...req.body}
        const photo = __dirname + '/static/AgenciesPhoto/' + req.file.filename
        copy.logo = photo
        Agency.create({...copy})
        .then(()=>res.send(JSON.stringify({resp:true})))
        .catch(err=>{
            console.log(err)
            let errorMessage = err.errors
            unlinkSync(photo)
            res.send(JSON.stringify({resp:false, message:errorMessage[0].message}))
        })
})