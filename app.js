require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const dbConnect = require("./config/mongo");
app.use(cors());
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
app.use(express.json());
const port = process.env.PORT || 3000;

const swaggerOptions = {
    swaggerDefinition: {
        openapi:'3.0.0',
        info: {
            title: 'API RESERVAS',
            description: "API RESERVAS definition",
            contact: {
                name: 'Desarrollo'
           
            },
            servers: [`http://localhost:${port}}`]
        }
    },
    apis: ["./routes/*.js"]
};
const swaggerDocs= swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/api", require("./routes/users"));
app.use("/api", require("./routes/reservas"));
// app.use("/api", require("./routes/reservas"));


app.listen(port,
    () => {
        console.log(`Tu aplicacion esta por http://localhost:${port}`);
    }
)

dbConnect()

