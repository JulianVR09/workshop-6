// Global Scope
var globalVariable = "Soy una variable global.";

function testScope() {
  // Function Scope
  var functionVariable = "Soy una variable local.";

  if (true) {
    // Block Scope
    let blockVariable = "Soy una variable de bloque.";
    console.log("Dentro del bloque:", blockVariable);
  }

  console.log("Dentro de la función:", functionVariable);
}

console.log("Fuera de la función:", globalVariable);
testScope();

const guessingOne =  parseInt(prompt("Si llamo la variable global en todo el codigo, ¿Donde se va a ver?\
\n1) En todos los lugares.\
\n2) En el local y en el bloque.\
\n3) Solo en el blouqe."));

switch(guessingOne){
    case 1: {
        console.log("Estas en lo correcto. La variable global es accesible en todo el codigo.");
        break;
    };
    case 2: {
        console.log("Ya casi lo tienes, te falto la global, ya que como su nombre lo indica se ve en todo los lugares.");
        break;
    };
    case 3: {
        console.log("Estas perdido, esta no es. La variable global recorre todo el codigo no se mostrara en un solo lado.");
        break;
    };
};

const guessingtwo = parseInt(prompt("Si llamo la variable local en todo el codigo, ¿Donde se va a ver?\
\n1) En todos los lugares.\
\n2) En el local y en el bloque.\
\n3) Solo en el blouqe."));

switch(guessingtwo){
    case 1: {
        console.log("Estas perdido, esta no es. La variable local no se muestra de forma global solo existe internamente.");
        break;
    };
    case 2: {
        console.log("Estas en lo correcto.");
        break;
    };
    case 3: {
        console.log("Ya casi lo tienes, te falta la parte local, ya que esta se ve en dos sitios.");
        break;
    };
};

const guessingtree = parseInt(prompt("Si llamo la variable local en todo el codigo, ¿Donde se va a ver?\
\n1) En todos los lugares.\
\n2) En el local y en el bloque.\
\n3) Solo en el blouqe."));

switch(guessingtree){
    case 1: {
        console.log("Estas perdido, esta no es. La variable de bloque se ve solo en un sitio");
        break;
    };
    case 2: {
        console.log("Ya casi lo tienes, te sobra, el bloque, la variable solo se muestra en una pequeña porción");
        break;
    };
    case 3: {
        console.log("Estas en lo correcto.");
        break;
    };
};