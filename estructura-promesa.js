//Estructura de una promesa
const solicitud = new Promise((resolve, reject) =>{
    const response = "resolve";

    if(response == "resolve"){
        resolve("La promesa se cumplio");
    }
    else{
        reject("La promesa no se cumplio");
    }
});

console.log(solicitud);