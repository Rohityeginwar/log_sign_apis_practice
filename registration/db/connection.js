let mongoose = require ('mongoose')

main().catch((err)=>  console.log(err))

async function main(){
    await mongoose.connect("mongodb://localhost:27017/List" , {
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    console.log ("connection done")
} 

main().catch((err)=>  console.log(err))
