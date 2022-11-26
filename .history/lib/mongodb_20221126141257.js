const mongoose = require('mongoose');
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

mongoose.connect(process.env.MONGODB_URI, () => {
    console.log('coonected')
},
e => console.error(e)
)