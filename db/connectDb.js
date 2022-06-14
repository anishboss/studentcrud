const mongoose = require('mongoose')

const connectDb = async (DATABASE_URL)=>{
    
    try{
        const DB_OPTIONS = {
            dbName : "student",
        };
        await mongoose.connect(DATABASE_URL,DB_OPTIONS);
        console.log("sucessfully connected to database");
    }
    catch(err){
        console.log("unable to connect database");
    }

}

module.exports = connectDb