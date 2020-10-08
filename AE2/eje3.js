// ejercicio 3


const array=[2,5,7,9,12];
const findMinimum=array.reduce((acumulador,item)=>{
    return Math.min(acumulador,item)

});



console.log(findMinimum);