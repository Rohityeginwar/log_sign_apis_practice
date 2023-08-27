let express = require ("express");
let mongoose = require ('mongoose')
let app = express();
let port = 1234;
let cors = require ('cors')
const listModel = require('./controller/dbcontroller')

app.use(express.json())
app.use(cors())
let { dbConnect,getData,postData ,List} = require('./controller/dbcontroller')

mongoose.connect('mongodb://127.0.0.1:27017/RegisterList')

app.post('./signUp',(req,res)=> {
    listModel.create(req.body)
    .then(RegisterList => req.json(RegisterList.signUp))
    .catch(err => res.json(err))
})

app.get('/', (req,res) => {
    res.send('using express')
})

app.get('/registration', async(req,res) => {
    let query = {};
    let collection = "registration"
    let output = await getData(collection , query )
    res.send (output);

})

app.get('/logIn', async (req,res) => {
    let query = {};
    let collection = "registration"
    let output = await getData(collection, query);
    res.send(output)
})


app.post('./signUp' , async(res,req) => {
    let data = req.body;
    let collection = "registration"
    let output = await postData(collection , data)
    res.send(output)
})



app.listen(port , (err)=>{
    dbConnect()
    if (err )throw err 
    console.log('server is running on port no. 1234')
})



