let cont = parseInt(prompt("Que valor deseas incrementar: "));

function pedir (a){
    let incrementar = 1
    function contador(){
        return cont = a + incrementar
        
    };
    console.log(contador());
};

let i = true;

while(i){
    let n = confirm("¿Deseas incrementar?");
    if (!n){
        console.log("Hasta luego");
        i = false;
    } else  {
        pedir(cont);
    };
};