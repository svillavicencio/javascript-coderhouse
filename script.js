let button = document.getElementById("start");

let script = function() {
    let number1 = parseInt(prompt(`Ingrese el primero numero a sumar`));
    let number2 = parseInt(prompt(`Ingrese el segundo numero a sumar`));

    let result = number1+number2;

    if(isNaN(result)){
        alert("Ingresar dos valores numericos por favor!");
        return;
    }

    alert(number1+number2);
}

button.addEventListener("click", script);