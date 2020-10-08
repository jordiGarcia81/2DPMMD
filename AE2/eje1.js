//ejercicio 1a

const nombres=(nombre) =>{
    return typeof (nombre) === 'string';
}

const valoresA= ["Ana", 2, "Javi", 5, "Roberto", 7,"Vanessa", 10];
let newArrayA = valoresA.filter(nombres);
console.log(newArrayA);



//ejercicio 1b

const filtrar=(num)=>{
   if(typeof (num) !== 'string'){
    
    return num%2 == 1;
   }
    
}

let valoresB= ["Ana", 2, "Javi", 5, "Roberto", 7,"Vanessa", 10];
let newArrayB = valoresB.filter(filtrar);
console.log(newArrayB);