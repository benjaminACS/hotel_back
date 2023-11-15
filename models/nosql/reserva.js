const mongoose = require("mongoose");

const ReservaScheme = new mongoose.Schema(
    {
        llegada: {
            type: Date,
        },
        salida: {
            type: Date,
        },
        cliente: {
            type: String,
        },
        numeropersonas: {
            type: Number
        },
        numerohabitaciones: {
            type: Number
        },
        numerohabitaciones: {
            type: Number
        },
        desayuno:{
            type : String
        },
        wifi:{
            type : String
        },
        spa:{
            type : String
        },
        email:{
            type : String
        },
        tipohabitacion: {
            type: String
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);
module.exports = mongoose.model("reserva", ReservaScheme);