const { body, validationResult } = require("express-validator");

const ReservaRegisterValidation = () => {
    return [
        body("name").exists().notEmpty().isLength({ min: 1, max: 100 }),
        body("age").exists().notEmpty().isLength({ min: 1, max: 3 })
      
    ];
}


module.exports = { ReservaRegisterValidation };