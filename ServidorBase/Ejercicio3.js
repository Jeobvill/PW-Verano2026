const express = require("express");
const app = express();
const PORT = 3000;
app.get("/",(req, res) => {res.send("Binevenido a al servidor con express")});



app.listen(PORT, ()=>{console.log("servidor iniciado en http://localhost: "+PORT)});