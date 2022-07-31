import express from "express";
import { unlinkSync } from 'fs';
import bcrypt from 'bcrypt';
import { __dirname } from "./settings.js"
import cors from 'cors'
import { sequelize } from "./models.js";

import { Admin, Agency, Realtor} from "./models.js";
import { upload } from "./multerConfig.js";
import { insertAgencyName } from "./helpers.js";


const app = express()
const host = 'http://localhost:5555'

app.use(express.static('public'));

const jsonParser = express.json();

sequelize.sync().then(
    () => app.listen(5555, ()=>console.log('listen at 5555'))
).catch(err => console.log(err))

app.use(cors({
    origin: 'http://localhost:3000'
}))
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
        const photo = `${host}/static/AgenciesPhoto/` + req.file.filename
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
app.get('/admin/agency/:id', jsonParser, (req, res)=>{
    const id = req.params.id
    Agency.findByPk(id)
    .then(agency=>{
        if(!agency){
            res.json({error:'404'})
        }
        else{
            res.json(agency)
        }
    })
    .catch(err=>{
        console.log(err.message)
        res.json({error:err.message})
    })
})
app.delete('/admin/agency/:id', jsonParser, (req, res)=>{
    const agencyId = req.params.id
    Agency.findByPk(agencyId)
    .then(agency=>{
        let photo = agency.logo
        photo = photo.split('/').slice(3, photo.length-1).join('\\')
        photo = __dirname+'\\public\\'+photo
        Agency.destroy({
            where:{id:agencyId}
            })
            .then(()=>{
                unlinkSync(photo)
                res.json(true)})
            .catch((err)=>{
                console.log(err)
            res.json(false)})
    })
    .catch(()=>res.json(false))
})
app.post('/admin/agency/:id', upload.single('logo'), (req,res)=>{
    const agencyId = req.params.id
    let copy = {...req.body}
    let photo
    if(req.file){
        photo = `${host}/static/AgenciesPhoto/` + req.file.filename
        copy.logo = photo
        Agency.findByPk(agencyId)
        .then(agency=>{
            let logo = agency.logo
            logo = logo.split('/').slice(3, logo.length-1).join('\\')
            logo = __dirname+'\\public\\'+logo
            unlinkSync(logo)
        })
        .catch(()=>res.send(JSON.stringify(false)))

    }
    Agency.update({...copy},{
        where: {id:agencyId}
    })
    .then(()=> res.send(JSON.stringify(true)))
    .catch(()=>{
        unlinkSync(photo)
        res.send(JSON.stringify(false))
    })
})

app.get('/admin/realtors', jsonParser,(req, res)=>{
    async function load () {
        let realtors =  await Realtor.findAll({
            attributes: [
            "id",
            "name",
            "email",
            "password",
            "city",
            "number",
            "agencyId",
        ]})
        let data = await insertAgencyName(realtors, Agency)
        res.json(data)
    }
    load()
})
app.post('/admin/realtors', jsonParser, (req, res)=>{
    async function load () {
        try {
            let request = req.body.input
            const attributes = [
                "id",
                "name",
                "email",
                "password",
                "city",
                "number",
                "agencyId"
            ]
            let agency =  await Agency.findOne({where:{name:request}, raw:true})
            if(agency){
                let agencyId = agency.id
                let realtors = await Realtor.findAll({where:{agencyId:agencyId}, attributes})
                let data = await insertAgencyName(realtors, Agency)
                res.json(data)   
            }
            else{
                let name = await Realtor.findAll({where:{name:request}, attributes})
                if(name.length === 0) {
                    let email = await Realtor.findAll({where:{email:request}, attributes})
                    if(email.length === 0) {
                        let number = await Realtor.findAll({where:{number:request}, attributes})
                        if(number.length === 0) {
                            res.json([{id: 1, err:'Такого рієлтора не існує'}])
                        }
                        else {
                            let data = await insertAgencyName(number, Agency)
                            res.json(data)    
                        }  
                    }
                    else {
                        let data = await insertAgencyName(email, Agency)
                        res.json(data)
                    }
                }
                else {
                    let data = await insertAgencyName(name, Agency)
                    res.json(data)
                }
            }
        } catch (err) {res.send(false)}
    }
    load()
})
//const date = new Date()
//await Agency.create({name:'Olimp', password:'NoexuL123', email:'asd@ds.com', city:'NIkopol', street:'Usova', building:'4', description:'asdasd', workingFrom: date, number:'0667270180' })
//await Realtor.create({firstName:'Jane', lastName:'Smith', name:'John Smith', email:'john@gmail.com', password:'NoexuL123', city:'Nikopol', description:'asdasdasd', number:'0667270180', agencyId: 1 })
