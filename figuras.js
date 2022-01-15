//Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado){
    return lado * 4;
} 


function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();

//Código del triágulo
console.group("Triángulos");


function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
} 

function areaTriangulo(base, altura){
    return (base * altura) / 2;
} 
console.groupEnd();

//Código del círculo
console.group("Círculos");


function diametroCirculo(radio){
    return radio * 2;
} 

const PI = Math.PI;

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI;
} 

console.groupEnd();

//Aqui interactuamos con HTML y el cuadrado
function calcularAreaCuadrado(){
    const input = document.getElementById("centimeter");
    const value = input.value;

    const result = document.getElementById("result");

    const area = areaCuadrado(value);
    result.innerHTML = "Area: " + area + " cm";
}
function calcularPerimetroCuadrado(){
    const input = document.getElementById("centimeter");
    const value = input.value;

    const result = document.getElementById("result");

    const perimetro = perimetroCuadrado(value);
    result.innerHTML = "Perimeter: " + perimetro + " cm";
}
//Interactuamos con HTML y el circulo
function calcularAreaCirculo(){
    const input = document.getElementById("centimeter-circle");
    const value = input.value;

    const result = document.getElementById("result-circle");

    const area = areaCirculo(value);
    result.innerHTML = "Area: " + area.toFixed(2) + " cm";
}
function calcularPerimetroCirculo(){
    const input = document.getElementById("centimeter-circle");
    const value = input.value;

    const result = document.getElementById("result-circle");

    const area = perimetroCirculo(value);
    result.innerHTML = "Perimetro: " + area.toFixed(2) + " cm";
}

//Interacción con el HTML Triángulo
function calcularAreaTriangulo(){
    const inputBase = document.getElementById("triangle-base");
    const baseValue = inputBase.value;

    const inputHeight = document.getElementById("triangle-height");
    const heightValue = inputHeight.value;

    const result = document.getElementById("triangle-result");

    const area = areaTriangulo(baseValue, heightValue);
    result.innerHTML = "Area: " + area.toFixed(2) + " cm";
}
function calcularPerimetroTriangulo(){
    const inputBase = document.getElementById("triangle-base");
    const baseValue = inputBase.value;

    const inputSideA = document.getElementById("triangle-side-a");
    const sideA = inputSideA.value;

    const inputSideB = document.getElementById("triangle-side-b");
    const sideB = inputSideB.value;

    const result = document.getElementById("triangle-result");

    const area = perimetroTriangulo(sideA, sideB, baseValue);
    result.innerHTML = "Perimetro: " + area + " cm";
}

//Triángulo isóceles
function isocelesTriangle(sides, bases){
    const side = sides * sides;
    const base = bases * bases;
    const height = Math.sqrt(side - (base / 4) );
    return "La altura del triángulo isóceles es " +  height + " cm.";
}