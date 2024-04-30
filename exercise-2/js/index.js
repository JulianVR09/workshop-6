console.log("// vars call\
\nconsole.log(Valor de a:, a);\
\nconsole.log(Valor de b:, b);\
\nconsole.log(Valor de c:, c);\
\n\
\n// functions call\
\nconsole.log(Resultado de funcionDeclarada:, funcionDeclarada());\
\nconsole.log(Resultado de funcionExpresada:, funcionExpresada());\
\n\
\n// vars declaration\
\nvar a = 1;\
\nlet b = 2;\
\nconst c = 3;\
\n\
\n// functions declarations\
\nfunction funcionDeclarada() {\
\n  return Función declarada ha sido llamada.;\
\n}\
\n\
\nconst funcionExpresada = function () {\
\n  return Función expresada ha sido llamada.;\
\n};)");

const answerVars = parseInt(prompt("¿Qué va a pasar con las variables declaradas asi?\
\n1)Nos va a arrojar un error.\
\n2)Nos mostrar el valor de cada una de las variables"));

if(answerVars === 1){
    console.log("Estas en lo correcto");
} else {
    console.log("Estas equivocado ya que primero se tendrian que haber declarado las variables, ya que estas no tienen hosting.");
};

const answerFunctions = parseInt(prompt("¿Qué va a pasar con las funciones como estan?\
\n1)Se mostraran las dos, ya que ambas tienen hosting.\
\n2)Ninguna de las dos se mostraran, ya que el hosting no aplica para ellas.\
\n3)Solo se aplicara hosting a una."));

if(answerFunctions === 3){
    let question = parseInt(prompt("¿Cual de las dos esta buena?\
    \n1)La funcion declarada.\
    \n2)La funcion expresada."));
    if(question === 2){
    console.log("Estas equivocado. La respuesta correcta es la función declarada.");
    } else {
        console.log("La respuesta es correcta.");
    };
};

if(answerFunctions != 3){
    console.log("Estas equivocado. La respuesta correcta es la función declarada solamente.")
}