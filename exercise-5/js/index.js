function manejarAsicronia (){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log("asicronia");
            resolve("asicronia");
            reject("no asicronia");
        }, 1000);
    });
};

manejarAsicronia()
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log(error);
    });

/*
*¿Qué sucede si cambias el tiempo de resolución de la promesa a 5 segundos o a 1 segundo?
*Al cambiar el tiempo de resolución de la promesa a 5 segundos, la promesa se resuelve en 5 segundos, y al cambiarlo a 1 segundo, la promesa se resuelve en 1 segundo.
*¿Cómo se comporta la función si la promesa es rechazada en lugar de resuelta?
*Al rechazar la promesa, la promesa no se ejecuta y no muestra nada.
*¿Puedes modificar la función para que el callback maneje diferentes tipos de información dependiendo del resultado de la promesa?
*Si, se puede realizar la funcion para que el callback maneje diferentes tipos de información, para la solucion de la funcion o para mostrar que no se pudo completar.
*/