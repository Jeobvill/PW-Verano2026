console.log(typeof(10))
console.log(typeof("true"))
console.log(typeof (true))
//---------------------------------
const edad = 17;
const mensaje = edad >= 18 ? "mayor de edad" : "menor de edad"
console.log(mensaje);

const estudiante = {
    nombre: "pedro",
    direccion: {
        calle: "calle"
    }
}

console.log(estudiante.direccion?.calle);

console.log(estudiante.edad ?? "sin edad");

let nombre = "juan";
console.log(nombre || "invitado");  

//-------------operadores logicos

let edad = 21;
edad >= 10 && console.log("puede entrar");  

let alumno = {
    nombre: "juan",
    edad: 20,
    carrera: "isc"
}

delete alumno.edad;
console.log(alumno);
console.log("nombre" in alumno);
console.log("edad" in alumno);

const numeros = [1, 2, 3];
const copia = [...numeros];
console.log(copia);
