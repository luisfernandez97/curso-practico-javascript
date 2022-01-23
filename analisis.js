// Helpers
function esPar (number){
    return (number % 2 === 0);
}

function mediaArimetica (number){
    const sumarLista = number.reduce(
        function(a = 0, b) {
            return a + b;
        }
    )
    const promedioLista = sumarLista / number.length;
    return promedioLista;
}


//Mediana Colombia
const salariosCol = colombia.map(
    function(personas){
        return personas.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB;
    }
)

//Calculadora Mediana
function calculateMediana(lista){
    const mitad = parseInt(lista.length / 2);
    if(esPar(lista.length)){
        // const element1 = lista[mitad];
        // const element2 = lista[mitad - 1];
        const mediana = (lista[mitad] + lista[mitad - 1]) / 2;    
        return mediana;    
    }else {
        return mediana = lista[mitad];
    }
}

const medianaGeneralCol = calculateMediana(salariosColSorted); 

// Mediana del Top 10%
const spliceStart = (salariosColSorted.length * 90)/100;
const spliceEnd = salariosColSorted.length - spliceStart;

//Calculo del Top 10%

const salariosTop10 = salariosColSorted.splice(
    spliceStart,
    spliceEnd,
);
const medianaTop10 = calculateMediana(salariosTop10); 


console.log(
    {medianaGeneralCol,
    medianaTop10,}
);