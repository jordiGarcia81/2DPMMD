// ejercicio 2

/*function average(dataArray){
    
    if(dataArray.length==0){
        return undefined;
    }
    let suma= dataArray.reduce(sumar,0);
    return sumar/dataArray.length;
}

function sumar(a,b){
    return a+b;
}

const dataArray=[2,5,7,9,12];
let media= average(dataArray);
console.log(media);*/

const average=(array)=>{
    return array.reduce((acumulador,item) =>(acumulador+item)/2);
}
const dataArray=[2,5,7,9,12];
console.log(average(dataArray))