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
        console.log("Estas en lo correcto.");
        break;
    };
    case 3: {
        console.log("Estas en lo correcto.");
        break;
    };
    default: {
        console.log("Estas en lo correcto.");
        break;
    };
}
