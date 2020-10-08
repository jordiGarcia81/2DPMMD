//ejercicio 4


   const findGreaterThan=(num,values)=>{
     let mayores=true;
    values.reduce((acumulador, item) => item < num ? mayores= false : null);
    return mayores;
   }
   console.log(findGreaterThan(6,[2,5,7,9,12]));

