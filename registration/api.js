let express = require ('express');
let api = express();
let port = process.env.PORT || 5678
require ('./db/connection')
let RegisterModel = require ('./model/Signup')
api.use(express.json())



//create new document
api.post('/signup', async (req,res) => {
    try{
        let users =  new RegisterModel(req.body);
        console.log(req.body)
        res.send(users)
        await users.save()
    }
    catch(err){
        res.send(err)
    }
})


//get all documents
api.get('/signup' , async (req,res) => {
    try{
        let studentData = await RegisterModel.find()
        res.send(studentData)
    }
    catch(err){
        res.send(err)
    }
})


api.post('/login', async (req,res)=> {
    let newEmail = req.body.email;
    let newPassword = req.body.password;
    let userData = await RegisterModel.find({email:newEmail})
    if(userData.password === newPassword){
        res.send('password matched')
        // res.render()
    }
    else{
        res.send('email or password s wrong')
    }
    res.send(userData)
    console.log(userData)
})

//get document only by id

/*api.get('/signup/:id' , async (req,res) => {
    try{
        let _id = req.params.id;
        console.log(req.params)
        let getData = await RegisterModel.findById(_id)
        console.log(getData)
        res.send(getData)
    }
    catch(err){
        res.send(err)
    }
})*/


//get document only by name

api.get('/signup/:name' , async (req,res) => {
    try{
        let name = req.params.name;
        let data = await RegisterModel.find({name})
        console.log(data)
        res.send(data)
    }
    catch(err){
        res.send(err)
    }
})

//delete document by id

/*api.delete('/signup/:id' , async (req,res) => {
    let _id = req.params.id;
    let deleteData = await  RegisterModel.findByIdAndDelete(_id)
    res.send(deleteData)
})*/

//delete document by name

api.delete('/signup/:name' , async(req,res) => {
    let name = req.params.name;
    let deleteData = await  RegisterModel.findOneAndDelete({name}) 
    res.send(deleteData)
})

//update by id

/*api.patch('/signup/:id' , async (req,res)=> {
    let _id = req.params.id;
    let updateData = await RegisterModel.findByIdAndUpdate(_id , req.body,{
        new :true
    } ) 
    console.log(updateData)
    res.send(updateData)
})*/


//update by name

api.patch('/signup/:name' , async(req,res) => {
    let name = req.params.name;
    let updateData = await RegisterModel.findOneAndUpdate({name} , req.body,{new:true})
    res.send(updateData)
})


api.listen(port , () => {
    console.log(`server is running on port no. ${port}`)
})

