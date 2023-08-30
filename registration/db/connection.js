let mongoose = require ('mongoose')

main().catch((err)=>  console.log(err))

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/List")
    console.log ("connection done")
} 


// main().catch((err)=>  console.log(err))
