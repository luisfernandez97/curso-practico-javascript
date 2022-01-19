// const lista = [
//     100,
//     200,
//     500,
//     40000000,
// ];
function compareNumbers(a, b){
    return a - b;
}

function esPar (num){
    if (num % 2 === 0){
        return true;
    } else{
        return false;
    }
}

let mediana;

function calculateMediana(lista){
    const arrayList = lista.sort(compareNumbers);
    console.log(arrayList);
    const medianaLista = parseInt(arrayList.length / 2);
    if(esPar(arrayList.length)){
        const element1 = arrayList[medianaLista];
        const element2 = arrayList[medianaLista - 1];
        return mediana = (element1 + element2) / 2;        
    }else {
        mediana = arrayList[medianaLista];
        return mediana;
    }
}

