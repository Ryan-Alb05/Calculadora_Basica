const sumar = (a, b) => a + b;

const restar = (a, b) => a - b;

const multiplicar = (a, b) => a * b;

function dividir(a, b) {
    if (b === 0) {
        return "Error: No se puede dividir por cero.";
    }
    return a / b;
}

function calcular() {
    let opcion;
    do {
        opcion = prompt("Calculadora\nElige una opción:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir\n5. Salir");
        
        if (opcion === "5") {
            alert("Gracias por usar la calculadora.");
            break;
        }
        
        let num1 = parseFloat(prompt("Ingrese el primer número:"));
        let num2 = parseFloat(prompt("Ingrese el segundo número:"));
        let resultado;

        switch (opcion) {
            case "1":
                resultado = sumar(num1, num2);
                break;
            case "2":
                resultado = restar(num1, num2);
                break;
            case "3":
                resultado = multiplicar(num1, num2);
                break;
            case "4":
                resultado = dividir(num1, num2);
                break;
            default:
                alert("Opción no válida. Intente de nuevo.");
                continue;
        }
        
        alert("El resultado es: " + resultado);
    } while (opcion !== "5");
}

calcular();
