let mongo = require ('mongodb');
let{MongoClient} = require('mongodb')
let mongoUrl ="mongodb+srv://rohitdeveloper:IlCpS76zgiO9IFgB@cluster0.ivcxuxo.mongodb.net/?retryWrites=true&w=majority";
const mongoose = require ('mongoose')

const List = new mongoose.Schema({
    name : String,
    email : String,
    password : String,
})
const listModel = mongoose.model('RegisterList',List)

let client = new MongoClient(mongoUrl , List);
 
async function dbConnect(){
    await client.connect()
}

let db = client.db('RegisterList')


async function getData(colName,query){
    let output = [];
    try{
        const cursor = db.collection(colName).find(query);
        for  await  (const data of  cursor){
            output.push(data)
        }
        cursor.closed
    }
    catch(err){
        output.push({"Error" : "Error in get data"})
    }
    return output
}



// async function postData(colName,data){
//     let output ;
//     try{
//         output = await db.collection(colName).insertOne(data)
//     }
//     catch(err){
//         output={"response":"Error in post data"}
//     }
//     return output
// }

module.exports = listModel
