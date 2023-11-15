const express = require("express");
const { getReservas, getReserva, createReserva, deleteReserva, updateReserva } = require("../controllers/reservas");
const router = express.Router();


router.get("/reservas", getReservas);
router.get("/reservas:id", getReserva);
router.post("/reservas", createReserva);
router.put("/reservas", updateReserva);
router.delete("/reservas", deleteReserva);

module.exports = router;