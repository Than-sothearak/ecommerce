import mongoose from "mongoose";
const MONGODB_URI = "mongodb+srv://admin:BmoELSOiN3jiBnQE@cluster0.bouh4yq.mongodb.net/?retryWrites=true&w=majority";
if (!MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}


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

      console.log("connected");
  
      cached.promise = mongoose.connect(MONGODB_URI, opts).then(mongoose => {
        return mongoose
      })
    }
    console.log("connected");
    cached.conn = await cached.promise
    return cached.conn
    
  }
  
  export default db;