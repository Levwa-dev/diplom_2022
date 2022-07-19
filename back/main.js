import  express  from "express";
import hbs from 'hbs';
import path from 'path';
import { fileURLToPath } from 'url';
import bcrypt from 'bcrypt';
import { sequelize } from "./models.js";
import { Admin } from "./models.js";

const app = express()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static('static'));


sequelize.sync().then(
    () => app.listen(5555, ()=>console.log('listen at 5555'))
).catch(err => console.log(err))

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
  });

app.get('/login', (req, res)=>{
    res.render('login.hbs')
})
app.get('/main', (req,res)=>{
    res.render('main.hbs')
})