const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

const PORT = 3000;

let peliculas = [
    {id: 1,
     titulo: "interestellar",
     director: "Christopher Nolan",
     año: 2014
    },
    {
        id:2,
        titulo:"Pacific rim",
        director:"Guillermo del toro",
        año:2016
    },
    {
        id:3,
        titulo: "el dia de la revelacion",
        director:"Steven Spilverg",
        año: 2026
    }
];

let idActual= peliculas.length + 1;

app.get("/peliculas",(req,res)=>{
    res.json(peliculas)}
)

app.get("/peliculas/:id",(req,res)=>{
    const id= Number(req.params.id);
    const pelicula = pelicula.find(pelicula.id == id);
    if (pelicula) {
        return res.status(404).json({
            mensaje: "pelicula no encontrada"
        })
    }
})

app.post("/peliculas",(req,res) => {
    const {titulo, director, año} = req.body;
    if (!titulo || !director || !año) {
        return  res.status(400).json({
            mensaje: "faltan datos de la pelicula"
        })
    }
    const nuevaPelicula = {
        id: idActual++,
        titulo: titulo,
        director: director,
        año: Number(año)
    }
    peliculas.push(nuevaPelicula);
    res.status(201).json({
        mensaje: "pelicula registraad correctamente",
        pelicula: nuevaPelicula
    });
})
app.put("/peliculas/:id",(req,res)=>{
    const id = Number(req.params.id);
    const{titulo,director,año} = req.body;
    if (!titulo || !director ||!año) {
        return res.status(400).json({
            mensaje: "faltan datos de la pelicula"
        })
    }
    const indice = peliculas.findIndex(peliculas => peliculas.id === id);
    if (indice === -1) {
        return res.status(400).json({
            mensaje: "pelicula no encontrada"
        });
    }
    peliculas[indice]={
        id:id,
        titulo:titulo,
        director:director,
        año: Number(año)
    }
    res.json({mensaje: "pelicula actualizada correctamente",
        pelicula: peliculas[indice]
    })
})

app.delete("/peliculas/:id",(req,res)=>{
    const id = Number(req.params.id);
    const indice = peliculas.findIndex(peliculas => peliculas.id === id);
    if (indice === -1) {
        return res.status(400).json({
            mensaje: "pelicula no encontrada"
        });
    }
    const peliculaEliminada = peliculas[indice];

    peliculas.splice(indice,1);

    res.json({
        mensaje: "pelicula eliminada correctamente",
        pelicula: peliculaEliminada
    })
})






/*
app.get("/",(req, res) => {res.send("Binevenido a al servidor con express")});


app.get("/pagina",(req,res)=>{res.send(`
    <style>
        h1{color: green}
    </style>
    <h1>Mi pagina</h1> 
    <p>creada con express</p>`)}
);
// hola mundo   
app.get("/Saludo/:nombre", (req,res)=>{const nombre= req.params.nombre;
    res.send("hola mundo: "+ nombre)}
);    

*/
/*
//----------------------------------------------------------------------------------------------------------Ejercicios
// par o inpar ejercicio 1
//pares
app.get("/par/:numero",(req,res)=>{
    const numero = req.params.numero;
    if (numero % 2 == 0) {
        res.send(numero + " es un numero par")
    }else{
        res.send(numero + " es un numero impar");
    }
});

//mayor de edad ejercicio 2
app.get("/edad/:edad",(req,res)=>{
    const edad = req.params.edad;
    if (edad >= 18) {
        res.send("eres mayor de edad");
    }else{
        res.send("eres menor de edad");
    }
})

// calculadora rustica ejercicio 3
app.get("/calculadora/:operacion/:a/:b", (req,res)=>{

    const operacion= req.params.operacion;
    const a = req.params.a;
    const b = req.params.b;
    let R = 0;

    if (operacion == "suma") {
        R=parseFloat(a)+parseFloat(b); 
    }else if (operacion == "resta") {
        R=parseFloat(a-b);        
    }else if (operacion == "multiplicacion") {
        R=parseInt(a*b);
    }else if (operacion == "division") {
        R=parseInt(a/b);         
    }
    res.send("resultado: "+ R )}
);

//tabla de multiplicar
app.get("/tabla/:numero",(req,res)=>{
    const numero = req.params.numero;
    let resultado ="";
    for (let i = 1 ; i < 11 ; i++){
       resultado= resultado + numero + "X" + i + "=" + parseFloat(numero*i) +"<br>"
    }
    res.send(resultado);
});

//Ejercicio 5. Calificacion
app.get("/calificacion/:nota",(req,res)=>{
    const nota = req.params.nota;
    if (nota < 70) {
        res.send(`<h1 style ="color: red;"> Reprobado </h1>`);
    } else if (nota >= 70 && nota < 80) {
        res.send(`<h1 style ="color: orange;"> Aprobado </h1>`);
    }else if (nota >= 80 && nota < 90) {
        res.send(`<h1 style ="color: lightgreen;"> muy bien </h1>`);
    }else if (nota >= 90 && nota < 101) {
        res.send(`<h1 style ="color: lightblue;"> Excelente </h1>`);
    }else{
        res.send(`<h1 style ="color: red;"> calificacion no valida </h1>`)
    }
})
//---------------------------------------------------------------------------------------------------------------------ejercicios
*/
app.listen(PORT, ()=>{console.log("servidor iniciado en http://localhost: "+PORT)});
