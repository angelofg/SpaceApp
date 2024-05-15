
//Callback
function uno(dos){
    console.log("uno");
    setTimeout(dos,2000);
}

function dos(){
    console.log("dos");

}

setTimeout(() => uno(dos),5000);

//setTimeout(uno,5000);


//Funcion Anonima
const nombre = function(){
    console.log("nombre");
}
nombre();

//Funcion Flecha
const persona = () => console.log("Angelo");
persona();