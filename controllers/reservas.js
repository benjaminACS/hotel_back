const {  reservaModel } = require("../models");

/**
 * Obtener una lista
 * @param {*} req 
 * @param {*} res 
 */
const getReservas = async (req, res) => {
    const data = await reservaModel.find({});
    /*
    var query = { FieldToSearch: new RegExp('^' + keyword) };
    collection.find(query).toArray(...)
    */
    res.send({ data });
}

/**
 * obtener un usuario
 * @param {*} req 
 * @param {*} res 
 */
const getReserva = async (req, res)  => {
    const data = await reservaModel.find({});
    res.send({ data });
}

/**
 * Crea un usuario
 * @param {*} req 
 * @param {*} res 
 */
const createReserva = async (req, res) => {
    const { body } = req;
    console.log(body);
    const data = await reservaModel.create(body)
    res.send({ data });
}
/**
 * Actualiza un usuario
 * @param {*} req 
 * @param {*} res 
 */
const updateReserva = async (req, res) => {
    const data = await reservaModel.find({});
    res.send({ data });
}

/**
 * elimina un usuario
 * @param {*} req 
 * @param {*} res 
 */
const deleteReserva = async (req, res) => { }

module.exports = { getReservas, getReserva, createReserva, updateReserva, deleteReserva };