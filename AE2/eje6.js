// ejercicio 6

const usuariosNoBaneados=(users,blackListed)=> users.reduce((acumulador,item) =>{
if(blackListed.indexOf(item) === -1){
    acumulador.push(item)
}
    return acumulador;

},[]);

console.log(usuariosNoBaneados((["jordi","juan","noe","cristian","raquel"]),(["juan","noe","ana"])));

