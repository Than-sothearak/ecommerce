// const mongoose = require('mongoose');
import mongoose from "mongoose";
import { connect } from 'mongoose';

const MONGODB_URI = "mogodb+srv://admin:ohgyWA0j8JcfnJ9s@cluster0.bouh4yq.mongodb.net/?retryWrites=true&w=majority"

if (!MONGODB_URI) {
    throw new Error(
      'Please define the MONGODB_URI environment variable inside .env.local'
    )
}
    let cached = global.mongoose
    if (!cached) {
      cached = global.mongoose = { conn: null, promise: null }
    }
    
    async function db () {
      if (cached.conn) {
        return cached.conn
      }
    
      if (!cached.promise) {
        const opts = {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          bufferCommands: false,
          bufferMaxEntries: 0,
          useFindAndModify: true,
          useCreateIndex: true
        }
    
        cached.promise = mongoose.Isconnect(MONGODB_URI, opts).then(mongoose => {
          return mongoose
        })
      }
      cached.conn = await cached.promise
      return cached.conn
    }
    
    export default db;