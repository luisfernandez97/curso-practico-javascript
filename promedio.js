// const lista1 = [
//     100,
//     200,
//     500,
//     600,
// ];

function calculateAverage(lista){
    // let sumaLista = 0;
    // for(let i = 0; i < lista.length; i++ ){
    //     sumaLista += lista[i];
    //     console.log(sumaLista);    
    // }
    //Otra forma de realizar la operaciones usando metodos de arrays
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    )
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
    
}



