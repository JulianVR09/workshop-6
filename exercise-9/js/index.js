let mensaje = Number(prompt("cunato tiempo en segundos deseas que se demore el mensaje en salir?: "));
let time = mensaje * 1000;
function promesa (a){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let a = true;
            if(a){
                resolve(console.log("Hola, mi amigo"));
            } else{
                reject(console.log("Error"));
            }
        }, a);
    });
};

promesa(time);