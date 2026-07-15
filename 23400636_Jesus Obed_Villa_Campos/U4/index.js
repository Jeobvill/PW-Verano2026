var nombre = "Hola mundo"
console.log(nombre);

var nombre2 = "daniflow"
console.log(nombre2);

const edad = 20;

let promedio = 0;

//---------------------------------------------
/*
if(true){
    var libro = "libro 1";
    let animal = "perro";
    animal = 5;
    console.log(animal);
} 
console.log(libro);
console.log(animal);
*/
/*
let num2 = parseInt(prompt("ingresa un numero"));
let num1 = parseInt(prompt("ingresa un numero"));
console.log(num1);
console.log(num2);
let suma = num1+num2
console.log(suma);


let sum2= 10+5;
let resta= 10-5;
let multiplicacion= 10*5;
let division = 10/5;
let residuo =10 % 3;

console.log("suma:" +sum2);
console.log("resta:" +resta);
console.log("multiplicacion" +multiplicacion)
console.log(division)
console.log(residuo)
*/
//expresiones booleanas
/*
console.log(5>3);
console.log(5<3);
console.log(5>=5);
console.log(5<="5");
console.log(5 == 5);
console.log(5 === 5);
console.log(5 != 3);
*/

let calificacion =95;
if(calificacion>=90){
    console.log("excelente");
}
else if(calificacion>=70){
    console.log("aprobado");
}else{
    console.log("reprobado")
}

//ciclos

for(let i=1;i<=5;i++){
    console.log("interacion:" + i);
}

let tabla=5;
for(let i=1;i<=5;i++){
    console.log(`${tabla} x ${i} = ${tabla*i}`);
}

let contador =1;

while(contador <=5){
    console.log(contador);
    contador++;
}

//funciones

function saludos(nombre){
    console.log("hola mundo soy " +nombre);
}
saludos("obed");

function aleatorio(){
    let n= Math.floor(Math.random()*100)+1;
    console.log(n);
}
aleatorio();

//arreglos y arrays
let numeros=[5,2]
console.log(numeros);
numeros.push(20);
numeros.push(8);
numeros.push(53);
console.log(numeros);
//console.log(numeros[2]);

for(let i =0;i<=numeros.length;i++){
    console.log(i);
}

let persona= {
    nombre: "yo",
    edad: 10,
    ciudad: "tepic"
}

console.log(persona);

persona.nombre = "carlitos"
persona.carrera = "ISC"
console.log(persona);


