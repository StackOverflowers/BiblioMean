const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./db/db");
const Library = require("./routes/library"); 
require("dotenv").config();

const app = express();
const Role = require("../backend/routes/role");
app.use(express.json());
app.use(cors());
<<<<<<< HEAD

app.use('/api/role',Role);



=======
app.use("/api/library" ,Library);
>>>>>>> ab5ffd42e101d2201921c5922c64f0727a98a6a4

app.listen(process.env.PORT, () =>{
    console.log("Backend server running OK, on port: ",process.env.PORT );
});

dbConnection();