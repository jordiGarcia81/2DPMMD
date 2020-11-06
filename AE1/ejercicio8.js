let num=prompt("introduzca un numero del 1 al 12: ");
num=Math.floor(num);

while(Math.floor(num)< 1 || Math.floor(num) > 12){
    alert("[ERROR] el numero introducido"+num+" no es correcto");
    num=prompt("introduzca un numero del 1 al 12: ");
}

function tirada(){
    let lanzar=Math.floor(Math.random()*12);
    return lanzar;
}

let num_tirada=tirada();
let acertar=prompt("introduzca un numero del 1 al 12 para acertar el resultado de la tirada de los dados: ");
acertar=Math.floor(acertar);

if(acertar == num_tirada){
    console.log("felicidades has acertado el numero!!");
}else{
    console.log("lo siento,fallaste. Intentelo de nuevo!");
}