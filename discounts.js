// const precioOriginal = 200;
// const descuento = 15;



function calculateDiscount(){
    const inputPrice = document.getElementById("originalPrice");
    const productPrice = inputPrice.value;

    const inputDiscount = document.getElementById("discountOffer");
    const discount = inputDiscount.value;

    const resultContainer = document.getElementById("result");

    const finalPrice = discountCalculator(productPrice, discount);
    console.log (finalPrice);
    if (finalPrice <= 0){
        resultContainer.innerHTML = "You won't pay anything.";
    }else{
        resultContainer.innerHTML = "You'll pay " + finalPrice;
    }
}

function discountCalculator(price, discount){
    const porcentajeAPagar = 100 - discount;
    const precioConDescuento = (price * porcentajeAPagar) / 100;
    return precioConDescuento;
}

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajeAPagar,
//     precioConDescuento,
// });