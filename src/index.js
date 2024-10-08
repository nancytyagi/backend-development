import dotenv from "dotenv"
import mongoose from "mongoose";
//import  { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, ()=> {
        console.log(`server is running at port: ${process.env.port}`)
    })
}) // once mongo db is connected then start the server
.catch((err) => {
    console.loh("Mongo DB connection failed!!!!", err);
})


























/* approach 1: 
import express from "express"

const app = express()
;( async ()=> {
try{
 await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
 app.on("error", (error)=> {
    console.log("ERR", error)
    throw error
 })

 app.listen(process.env.PORT, ()=> console.loh(`app is listening on port ${process.env.PORT}`));
}
catch(error){
console.error("EROOR: ", error)
}
}

) ()

*/