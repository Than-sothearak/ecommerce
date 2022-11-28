import mongoose from "mongoose";



const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}
const connection= {};
 
async function dbConnect () {
  if(dbConnect.isConnected) {
    alert('Connected')
    return ;
  }

  const db = await mongoose.connect(MONGODB_URI)
  connection.isConnected = db.connections[0].readyState;
}
  
  export default dbConnect;