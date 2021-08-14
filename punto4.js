function calcular_resultado() {
 var ingresar_nota = prompt("ingrese su nota")
 
 if (ingresar_nota >= 0 && ingresar_nota <= 5){
     if (ingresar_nota >= 3 && ingresar_nota <= 5){
         alert("Usted aprobó") 
     }

     else if (ingresar_nota >= 0 && ingresar_nota < 3){
        alert("Usted no aprobó")
    }
 }
else {
    alert("La nota ingresada no es correcta. Por favor, intentelo nuevamente")
}
}