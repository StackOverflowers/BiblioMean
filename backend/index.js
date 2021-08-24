const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./db/db");

require("dotenv").config();

const app = express();
const Role = require("../backend/routes/role");
app.use(express.json());
app.use(cors());

app.use('/api/role',Role);




app.listen(process.env.PORT, () =>{
    console.log("Backend server running OK, on port: ",process.env.PORT );
});

dbConnection();