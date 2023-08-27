let express = require ('express');
let api = express();
let port = process.env.PORT || 5678
require ('./db/connection')
let RegisterModel = require ('./model/Signup')
api.use(express.json())

api.post('/signup',  (req,res) => {
        let users =  new RegisterModel(req.body);
        console.log(req.body)
    users.save()
    // res.send(users);
    .then((users) => {
        res.send(users);
    })
    .catch((err) => {
       res.send(err)
    })
})
api.listen(port , () => {
    console.log(`server is running on port no. ${port}`)
})