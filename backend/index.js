const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./db/db");
const Library = require("./routes/library"); 
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/library" ,Library);

app.listen(process.env.PORT, () =>{
    console.log("Backend server running OK, on port: ",process.env.PORT );
});

dbConnection();