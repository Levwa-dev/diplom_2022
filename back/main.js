import  express  from "express";

const app = express()

const data = {
    name:'Bob',
    lastName: 'Foor'
}

app.listen(5555, ()=>console.log('listen'))

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
  });

app.get('/', (req, res)=>{
    //get
    if(data) {
        return res.json(data)
    }
})

