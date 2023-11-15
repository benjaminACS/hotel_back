const { body, validationResult } = require("express-validator");

const UserRegisterValidation = () => {
    return [
        body("name").exists().notEmpty().isLength({ min: 1, max: 100 }),
        body("age").exists().notEmpty().isLength({ min: 1, max: 3 })
        /*(req, res, next) => {
            try {
                validationResult(req).throw();
                return next();
            } catch (err) {
                res.status(400);
                res.send({ errors: err.array() });
            }
        }*/
    ];
}

const UserLoginValidation = () => {
    return [
        body("email").exists().notEmpty().isLength({ min: 1, max: 100 }),
        body("password").exists().notEmpty().isLength({ min: 1, max: 10 })
        /*(req, res, next) => {
            try {
                validationResult(req).throw();
                return next();
            } catch (err) {
                res.status(400);
                res.send({ errors: err.array() });
            }
        }*/
    ];
}
module.exports = { UserRegisterValidation, UserLoginValidation };