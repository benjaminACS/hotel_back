const express = require("express");
const { getUsers, getUser, createUser, deleteUser, updateUser, loginUser } = require("../controllers/users");
const router = express.Router();

const { UserRegisterValidation, UserLoginValidation } = require("../validators/users");

router.get("/users", getUsers);
router.get("/users:id", getUser);
router.post("/users", UserRegisterValidation(), createUser);
router.post("/users/login", UserLoginValidation(), loginUser);
router.put("/users", updateUser);
router.delete("/users", deleteUser);

module.exports = router;