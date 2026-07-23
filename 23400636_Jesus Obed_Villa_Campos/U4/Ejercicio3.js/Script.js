function Cajero(saldo) {
    interfaz();
    let operando = console.log(prompt("Que operacion deseas realizar?"));

    switch (operando.trim()) {

        case "1":
            console.log(`Su saldo actual es: ${saldo}`);
            mostrarMenu();
            break;
        case "2":
            const monto = parseFloat(input);
            if (isNaN(monto) || monto <= 0) {
                console.log("Monto inválido. Debe ser un número mayor a cero.");
            } else {
                saldo += monto;
                console.log(`Depósito exitoso. Nuevo saldo: ${saldo}`);
            }
            mostrarMenu();
            break;
        case "3":
            const monto = parseFloat(input);

            if (isNaN(monto) || monto <= 0) {
                console.log("Monto inválido. Debe ser un número mayor a cero.");
            } else if (monto > saldo) {
                console.log("Fondos insuficientes. No puede retirar más de su saldo disponible.");
            } else {
            saldo -= monto;
                console.log(`Retiro exitoso. Nuevo saldo: ${saldo}`);
            }
            mostrarMenu();
      
            break;
            case "4":
                console.log("Gracias por usar el cajero. ¡Hasta luego!");
                break;
                default:
                console.log("Opción no válida. Intente nuevamente.");
                mostrarMenu();
                break;
                    
    }
}//fin funcion cajero


function interfaz() {
    console.log("\n=== CAJERO AUTOMÁTICO ===");
    console.log("1. Consultar saldo");
    console.log("2. Depositar");
    console.log("3. Retirar");
    console.log("4. Salir");
}
