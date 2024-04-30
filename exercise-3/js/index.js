const sumarCinco = parseInt(prompt("Ingresa un numero: "));

function crearSumador (a){
    let segundoNumero = parseInt(prompt("Ingresa un numero: "));
    function segundoSumador(b){
        return a + b;
    };
    console.log(segundoSumador(segundoNumero));
};

crearSumador(sumarCinco)
console.log(`Este es el primer valor ingresado ${sumarCinco}`)

/*
* ¿Cómo mantienen las funciones su acceso a variables externas después de que la función externa ha terminado de ejecutarse?
*La función al ya estar ejecutada realiza un cierre, pero las funciones externas todavia tienen acceso, hasto se le conoce como closure,
esto gracias a que js maneja el alcance de las variables.
*¿Cuáles son las implicaciones de memoria de mantener estos closures, especialmente si se crean muchas instancias de funciones con closures?
*Esto puede generar ciertos problemas, ya que en la memoria se guardar archivos que ya no son requeridos hasta que se llamen esto haciendo que 
la pagina sea mas lenta y que js presente problemas a la hora de 
*/