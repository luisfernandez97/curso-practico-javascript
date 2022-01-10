//Código del cuadrado
console.group("Cuadrados");
const ladosCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladosCuadrado + " cm");

const perimetroCuadrado = ladosCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");

const areaCuadrada = ladosCuadrado * ladosCuadrado;
console.log("El área del cuadrado es: " + areaCuadrada + " cm2");
console.groupEnd();

//Código del triágulo
console.group("Triángulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log("Los lados del triángulo mide " + ladoTriangulo1 + " y " + ladoTriangulo2 + " y su base mide " + baseTriangulo + " cm.");

const alturaTriangulo = 5.5;
console.log("La altura del triángulo es " + alturaTriangulo + " cm.");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo es " + perimetroTriangulo + " cm.");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triángulo es " + areaTriangulo + " cm2.")
console.groupEnd();

//Código del círculo
console.group("Círculos");

const radioCirculo = 4;
console.log("El radio del círculo es" + radioCirculo + " cm.");

const diametroCirculo = radioCirculo * 2;
console.log("El diámetro del círculo es " + diametroCirculo + " cm.");

const PI = Math.PI;

const perimetroCirculo = diametroCirculo * PI;
console.log("El perímetro del círculo es " + perimetroCirculo + " cm.");

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El área del círculo es " + areaCirculo + " cm2.");


console.groupEnd();