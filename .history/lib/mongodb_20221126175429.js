import mongoose from "mongoose";
required('dotenv').config();
// const MONGODB_URI = "mongodb+srv://admin:BmoELSOiN3jiBnQE@cluster0.bouh4yq.mongodb.net/?retryWrites=true&w=majority";
const MONGODB_URI = process.env.MONGODB_URI;
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
    return ;
  }
  const db = await mongoose.connect(MONGODB_URI)
  connection.isConnected = db.connections[0].readyState;
}
  
  export default dbConnect;