const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js");

main().then((result)=>{
    console.log("Connection Successful with database");
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/velvet");
}

const initDB = async()=>{
    await Listing.deleteMany({});
    initdata.data = initdata.data.map((obj)=>({...obj,owner: "686eb127d9a78241254359dd"}))
    await Listing.insertMany(initdata.data);
    console.log("Data was initialized");
}
initDB();