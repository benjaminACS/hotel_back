const express = require("express");
const { getUsers, getUser, createUser, deleteUser, updateUser, loginUser } = require("../controllers/users");
const router = express.Router();

const { UserRegisterValidation, UserLoginValidation } = require("../validators/users");

/**
 * @swagger
 * tags:
 *  name: Usuarios
 *  description: API Mantenimiento de Usuarios.
 */

/**
 * @swagger
 * /api/users:
 *  get:
 *      summary: Devuelve la lista de Usuarios
 *      tags: [Usuarios]
 *      responses:
 *          200:
 *            description: Lista de Usuarios
 *            content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                           
 * 
 */

router.get("/users", getUsers);
router.get("/users:id", getUser);

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Crear un Usuario.
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              name:
 *                  type: string
 *                  description: Nombre del Usuario .
 *                  example: Benjamin Curay
 
 *              age:
 *                  type: integer
 *                  description: Edad del Usuario.
 *                  example:  19
 
 *              email:
 *                  type: string
 *                  description: El correo del Usuario.
 *                  example: 
  
 *              password:
 *                  type: string
 *                  description: La contraseña del Usuario.
 *                  example: 
 
 *              role:
 *                  type: array
 *                  description: Rol del Usuario.
 *                  example: ["user", "admin"]
 
         
 *     responses:
 *       200:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                      name:
 *                          type: string
 *                          description: Nombre del Usuario .
 *                          example: Benjamin Curay
 
 *                      age:
 *                          type: integer
 *                          description: Edad del Usuario.
 *                          example:  19
 
 *                      email:
 *                          type: string
 *                          description: El correo del Usuario.
 *                          example: 
  
 *                      password:
 *                          type: string
 *                          description: La contraseña del Usuario.
 *                          example: 
 
 *                      role:
 *                          type: array
 *                          description: Rol del Usuario.
 *                          example: ["user", "admin"] 
*/

router.post("/users", UserRegisterValidation(), createUser);

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Login de usuario.
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              email:
 *                  type: string
 *                  description: El correo del Usuario.
 *                  example: 
 *              password:
 *                  type: string
 *                  description: La contraseña del Usuario.
 *                  example:        
 *     responses:
 *       200:
 *         description: Created
 *         content:
 *           application/json:
 *               schema:
 *                  type: object

 
*/

router.post("/users/login", UserLoginValidation(), loginUser);
router.put("/users", updateUser);
router.delete("/users", deleteUser);

module.exports = router;