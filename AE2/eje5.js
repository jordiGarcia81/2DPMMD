// ejercicio 5


const multiple = (values) => values * values
const factorial = values => {
    if(values <=1) {
        return 1;
    }else{
        return multiple(values, factorial(values-1));
    }
   
}

console.log(factorial(5));

 


   


    
    
    