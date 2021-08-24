const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./db/db");
const Library = require("./routes/library"); 
require("dotenv").config();

const User = require("./routes/user");


const app = express();
const Role = require("../backend/routes/role");
app.use(express.json());
app.use(cors());
<<<<<<< HEAD

app.use("/api/user", User);

app.use('/api/role',Role);
app.use("/api/library" ,Library);
=======
app.use('/api/role',Role);
app.use("/api/library" ,Library);

>>>>>>> dev

app.listen(process.env.PORT, () =>{
    console.log("Backend server running OK, on port: ",process.env.PORT );
});

dbConnection();