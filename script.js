let button = document.getElementById("start");

let script = function() {
    let number1 = parseInt(prompt(`Ingrese el primero numero a sumar`));
    let number2 = parseInt(prompt(`Ingrese el segundo numero a sumar`));

    alert(number1+number2);
}

button.addEventListener("click", script);