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
    if (mongoose.connection[0].readyState) {
        console.log('Conected')
    }else {
        console.log('not noc');
    }
}
export default connect;