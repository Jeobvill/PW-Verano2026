
let rand1 = Math.floor(Math.random()*10)+1;
let rand2 = Math.floor(Math.random()*10)+1;
console.log(rand1);
console.log(rand2);

function trueOrFalse(){
    if(rand1 == rand2){
        console.log("los numeros son iguales")
    }else if (rand1 > rand2) {
        console.log("el mayor es: "+ rand1);     
    }else{
        console.log("El mayor es: " + rand2);
    }
}

trueOrFalse();

// nuemeros hasta que salga el 0
function zeroAppear(){
    console.log("numeros hasta que aparezca el 0")
    let i = Math.floor(Math.random()*5);;   
    while (i != 0 ) {
        console.log("numero: "+ i);
        i=Math.floor(Math.random()*5);
    }
}
zeroAppear();

// brinca la tablita

function tablaDeMultiplicar(){
    let numTab=Math.floor(Math.random()*(10-2)+2);
    console.log("tabla de multiplicar del: "+numTab);
    for (let i = 0; i <= 10; i++) {
        console.log(`${numTab} x ${i} = ${numTab*i}`);
    }
}
//tablaDeMultiplicar();

// numero par o inpar
function paresOinpares() {
    console.log("Pares o inpares");
    for (let i = 10; i >= 1 ; i--) {
        let num = parseInt(prompt("ingresa un numero del 1 al 100"));
        if (num % 2 ==0) {
            console.log("El numero "+ num + " es par"); 
        }else{
            console.log("El numero "+ num + " es inpar")
        } 
    }
}
//paresOinpares();

// ejercicio 5- empleados----------------------------------------

function calcularComision() {
    let ventas = parseFloat(prompt("Ingrese el monto de ventas($5000-$30000):"));

    while (isNaN(ventas) || ventas < 5000 || ventas > 30000) {
        ventas = parseFloat(prompt("Ingrese un número válido entre 5000 y 30000:"));
    }
    let comision;
    if (ventas < 10000) {
        comision = ventas * 0.10;
    } else {
        comision = ventas * 0.15;
    }
    console.log("Ventas: $" + ventas + "\nComisión a recibir: $", comision);
}

calcularComision();



