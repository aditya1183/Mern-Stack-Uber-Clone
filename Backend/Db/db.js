const mongoose=require("mongoose");


function db(){

    mongoose.connect(process.env.MONGOURI )
    .then(() => {
        console.log('Connected to DB');
    }).catch(err => console.log(err));
    
}

module.exports=db;