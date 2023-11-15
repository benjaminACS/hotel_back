require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const dbConnect = require("./config/mongo");
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3000;

app.use("/api", require("./routes/users"));
app.use("/api", require("./routes/reservas"));
// app.use("/api", require("./routes/reservas"));


app.listen(port,
    () => {
        console.log(`Tu aplicacion esta por http://localhost:${port}`);
    }
)

dbConnect()

