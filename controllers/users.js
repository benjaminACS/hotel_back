const { validationResult } = require("express-validator");
const { userModel } = require("../models");

/**
 * Obtener una lista
 * @param {*} requ 
 * @param {*} resp 
 */
const getUsers = async (requ, resp) => {
    const data = await userModel.find({});
    resp.send({ data });
}

/**
 * obtener un usuario
 * @param {*} requ 
 * @param {*} resp 
 */
const getUser = async (requ, resp) => {
    const data = await userModel.find({});
    resp.send({ data });
}

/**
 * Crea un usuario
 * @param {*} requ 
 * @param {*} resp 
 */
const createUser = async (req, res) => {
    let errors = validationResult(req).array();
    if (errors.length>0) {
        res.status(400);
        res.send({ errors: errors });
    }
    else{
        const { body } = req;
        console.log(body);
        const data = await userModel.create(body)
        res.send({ data });
    }
}
/**
 * Actualiza un usuario
 * @param {*} requ 
 * @param {*} resp 
 */
const updateUser = async (requ, resp) => {
    const data = await userModel.find({});
    resp.send({ data });
}

/**
 * elimina un usuario
 * @param {*} requ 
 * @param {*} resp 
 */
const deleteUser = (requ, resp) => { }



const loginUser = async (req, res) =>{
    let password = req.body.password;
    let email = req.body.email;
    const data = await userModel.find({ password : password, email : email});
    if(data.length>0){
        res.send( data.shift() );
    }else{
        res.status(401);
        res.send({ errors: ["No se encuentra el correo o el password"] });
    }

    
    
}

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser, loginUser };