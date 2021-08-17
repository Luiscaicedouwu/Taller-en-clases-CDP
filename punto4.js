function calcular_resultado(nota) {
    var calcular_resultado = prompt("ingresa tu nota");

    if (calcular_resultado > 0 && calcular_resultado < 5) {
        if (calcular_resultado >= 0 && calcular_resultado < 3) {
            alert("No aprobo");
        } else if (calcular_resultado >= 3 && calcular_resultado <= 5) {
            alert("congrats, aprobaste");
        } 
        
    }
    else {
        alert("Numero ingresado invalido")
    }
}


calcular_resultado()
