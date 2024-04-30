console.log(
    "Intentando llamar a 'funcionDeclarada' antes de su declaración:"
  );
  try {
    console.log(funcionDeclarada());
  } catch (error) {
    console.log("Error:", error.message);
  }
  
  console.log(
    "Intentando llamar a 'funcionExpresada' antes de su declaración:"
  );
  try {
    console.log(funcionExpresada());
  } catch (error) {
    console.log("Error:", error.message);
  }
  
  // Declaración de una función declarada
  function funcionDeclarada() {
    return "Función declarada ha sido llamada.";
  }
  
  // Declaración de una función expresada
  const funcionExpresada = function () {
    return "Función expresada ha sido llamada.";
  };
  
  console.log("Llamando a 'funcionDeclarada' después de su declaración:");
  console.log(funcionDeclarada());
  
  console.log("Llamando a 'funcionExpresada' después de su declaración:");
  console.log(funcionExpresada());

/*
*¿Qué sucedió cuando intentaste llamar a las funciones antes de su declaración?
*La función declarada actuo y mostro el mensaje que contenia, aun siendo llamada antes de su creación, la función exparesada no lo hizo.
*¿Cómo difieren los resultados entre la función declarada y la función expresada?
*La funcion declarada tiene hosting que hace que suba desde el principio, en cambio la expresada no sube porque se toma como si fuera una variable.
*¿Qué indica esto sobre cómo el JavaScript maneja estas dos diferentes declaraciones de funciones?
*Esto indica que js es un Lenguaje flexible que te brinda demasiadas cosas apara realizar el codigo y evitar errores si sabes de todos estos temas.
*/