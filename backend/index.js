const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./db/db");
const Library = require("./routes/library"); 
require("dotenv").config();

const app = express();
const Role = require("../backend/routes/role");
const Book = require("../backend/routes/book");
app.use(express.json());
app.use(cors());


app.use('/api/role',Role);
app.use("/api/library" ,Library);
app.use("/api/books",Book);


app.listen(process.env.PORT, () =>{
    console.log("Backend server running OK, on port: ",process.env.PORT );
});

dbConnection();