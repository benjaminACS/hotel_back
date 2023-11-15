// const mongoose = require("mongoose")

// const dbConnect = () => {
//     const DB_URI = process.env.DB_URI;
//     mongoose.connect(DB_URI,
//         {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         }, (err, resp) => {
//             if (!err) {
//                 console.log("***CONEXION CORRECTA ***")
//             } else {
//                 console.log("***EROR DE CONEXION ***")
//             }

//         });
// };


const mongoose = require('mongoose');
const mongoURI = process.env.DB_URI

const dbConnect = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(mongoURI)
        console.log('Mongo connected')
    }
    catch (error) {
        console.log(error)
        process.exit()
    }
}

module.exports = dbConnect;

