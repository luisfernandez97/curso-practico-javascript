// const list = [
//     1,
//     2,
//     3,
//     1,
//     2,
//     1,
//     2,
//     1,
//     1,
//     1,
//     3,
//     4,
// ];

const listCount = {};
let listArray = [];
let moda;

function calculateModa(lista){
   lista.map(
        function (element){
            if(listCount[element]){
                listCount[element] += 1;
            }else{
               listCount[element] = 1; 
            }
            return listCount;
        }
    );
    let listArray = Object.entries(listCount).sort(
        function(elementA, elementB){
            return elementA[1] - elementB[1];   
        }
    );
    moda = listArray[listArray.length - 1];
    return moda;
}
