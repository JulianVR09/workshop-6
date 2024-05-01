console.log('console.log("Inicio del script");\
\nsetTimeout(() => {\
    \nconsole.log("Primer setTimeout");\
  \n}, 0);\
\nsetTimeout(() => {\
    \nconsole.log("Segundo setTimeout");\
  \n}, 0);\
\nPromise.resolve("Promesa resuelta").then(console.log);\
\nconsole.log("Fin del script");');

let question = parseInt(prompt("Segun lo anterior como se mostrara el codigo en la consola\
\n1)Mostrara el inicio del script, luego el fin del script, seguiran la promesa y por ultimo los setTimeout.\
\n2)Mostrara el inicio del script, luego los setTimeout, luego la promesa y por ultimo el fin del script.\
\n3)Mostrara el inicio del script, luego la promesa, luego los setTimeout y por ultimo el fin del script."));

switch (question) {
    case 1: {
        console.log("Estas en lo correcto.");
        break;
    };
    case 2: {
        console.log("Es incorrecto, cuando se ejecuta todo, el orden que hace es mandar el setTimeout a las macro tareas y las promesas a la microtareas, se ejecutan primero todo, depsues va la micro y por ultimo la macro.");
        break;
    };
    case 3: {
        console.log("Casi lo tienes, solo te falto que el fin del script sean antes de la promesa, esto ya que como es una tarea sin macro ni micro, se ejecuta de inmediato.");
        break;
    };
};
