setTimeout(function(){
    console.log("Mensaje 2: Con timeout de 0 segundos");
},0);
console.log("Mensaje 1: Inmediatamente");
setTimeout(function(){
    console.log("Mensaje 3: Con timeout de 1 segundo");
},1000)
console.log(1)
/*
*¿Por qué "Mensaje 2: Con timeout de 0 segundos" no se muestra inmediatamente después de "Mensaje 1: Inmediatamente", a pesar de tener un retardo de 0 segundos?
*Esto es erroneo, ya que el mensaje 2 si se ejecuta de una.
*¿Que nos dicen este comportamiento sobre el event loop, las macro y micro tareas, y la forma en que JavaScript maneja las operaciones asíncronas?
*Esto nos indica que el mensaje 2 se ejecuta despues de que el mensaje 1 se ejecuta, ya que el mensaje 1 se ejecuta inmediatamente y el mensaje 2 se ejecuta despues de 0 segundos, pero esto como lo hace el level loop se muestra casi inmediatamente, ya que este trabaja de manera interna de fomra mas rapida.
*/