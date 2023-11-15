const express = require("express");
const fs = require("fs");
const router = express.Router();
const PATH_ROUTES = __dirname;

const removeExtension = (filename) => {
    return filename.split('.').shift();
};

const a = fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = removeExtension(file);
    if (name !== 'index') {
        console.log(`Cargando rutan ${name}`)
        router.use(`/${name}`,require(`./${file}`)) //TODO http://localhost:3000/api/tracks
    }
})
//console.log({ a });



module.exports = router;