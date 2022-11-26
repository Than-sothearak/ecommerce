// const mongoose = require('mongoose');
import mongoose from "mongoose";
import { connect } from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI

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
    
        cached.promise = mongoose.connect(MONGODB_URI, opts).then(mongoose => {
          return mongoose
        })
      }
      cached.conn = await cached.promise
      return cached.conn
    }
    
    export default db;