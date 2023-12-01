const express = require("express");
const { getReservas, getReserva, createReserva, deleteReserva, updateReserva } = require("../controllers/reservas");
const router = express.Router();


/**
 * @swagger
 * tags:
 *  name: Reservas
 *  description: API Mantenimiento de Reservas.
 */


/**
 * @swagger
 * /api/reservas:
 *  get:
 *      summary: Devuelve la lista de Reservas
 *      tags: [Reservas]
 *      responses:
 *          200:
 *            description: Lista de Reservas
 *            content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                           
 * 
 */

router.get("/reservas", getReservas);
router.get("/reservas:id", getReserva);

/**
 * @swagger
 * /api/reservas:
 *   post:
 *     summary: Crear un Reserva.
 *     tags: [Reservas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               llegada:
 *                 type: string
 *                 description: La llegada al Hotel .
 *                 example: 2023-11-12
 
 *               salida:
 *                 type: string
 *                 description: La salida del Hotel.
 *                 example: 2023-12-12 
 
 *               cliente:
 *                 type: string
 *                 description: El nombre completo del cliente.
 *                 example: Benjamin Anderson Curay Suarez 
  
 *               numeropersonas:
 *                 type: integer
 *                 description: La cantidad de Personas.
 *                 example: 5 
 
 *               numerohabitaciones:
 *                 type: integer
 *                 description: Las Habitaciones seleccionadas.
 *                 example: 8
 
 *               desayuno:
 *                 type: string
 *                 description: El desayuno seleccionado.
 *                 example: Desayuno buffet
 
 *               wifi:
 *                 type: string
 *                 description: El wifi proporcionado por la empresa .
 *                 example: X
 
 *               spa:
 *                 type: string
 *                 description: Entrada al spa.
 *                 example: X
 
 *               email:
 *                 type: string
 *                 description: El email del cliente para comunicarse.
 *                 example:  benjamin.curay.suarez@gmail.com
  
 *               tipohabitacion:
 *                 type: string
 *                 description: Habitación seleccionada por el Cliente.
 *                 example: Doble         
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
 *                      llegada:
 *                          type: string
 *                          description: La llegada al Hotel .
 *                          example: 0
 *                      salida:
 *                          type: string
 *                          description: La salida del Hotel.
 *                          example: 2023-12-12 
 *                      cliente:
 *                          type: string
 *                          description: El nombre completo del cliente.
 *                          example: Benjamin Anderson Curay Suarez 
 *                      numeropersonas:
 *                          type: integer
 *                          description: La cantidad de Personas.
 *                          example: 5 
 *                      numerohabitaciones:
 *                          type: integer
 *                          description: Las Habitaciones seleccionadas.
 *                          example: 8
 *                      desayuno:
 *                          type: string
 *                          description: El desayuno seleccionado.
 *                          example: Desayuno buffet
 *                      wifi:
 *                          type: string
 *                          description: El wifi proporcionado por la empresa .
 *                          example: X
 
 *                      spa:
 *                          type: string
 *                          description: Entrada al spa.
 *                          example: X
 
 *                      email:
 *                          type: string
 *                          description: El email del cliente para comunicarse.
 *                          example:  benjamin.curay.suarez@gmail.com
  
 *                      tipohabitacion:
 *                          type: string
 *                          description: Habitación seleccionada por el Cliente.
 *                          example: Doble  
*/


router.post("/reservas", createReserva);
router.put("/reservas", updateReserva);
router.delete("/reservas", deleteReserva);

module.exports = router;