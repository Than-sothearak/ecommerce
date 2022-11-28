// const mongoose = require('mongoose');
import mongoose from "mongoose";
const connection = {};

async function db() {
    if(connection.isConnected) {
        return;
    }

    const db = await mongoose.connect(process.env.MONGODB_URI)

    connection.isConnected = db.connections[0].readyState;
    console.log("connection.isConnected");
}



export default db;