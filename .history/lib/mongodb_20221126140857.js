import mongoose from "mongoose";
// const connection = {};

// async function dbConnect() {
//     if(connection.isConnected) {
//         return;
//     }

//     const db = mongoose.connect(process.env.MONGODB_URI)

//     connection.isConnected = db.connections[0].readyState;
//     console.log("connection.isConnected");
// }

// export default dbConnect;

const connect = () => {
    if (mongoose.connections[0].readyState) {
        console.log('Conected')
    }else {
        mongoose.connect(process.env.MONGODB_URI, () => {
            console.log('Your Db is connected');
        })
    }
}
export default connect;