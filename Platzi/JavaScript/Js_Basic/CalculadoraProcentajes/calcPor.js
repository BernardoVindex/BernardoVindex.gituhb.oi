//const precioOriginal = 100;
//const descuento = 5;

const cupones = [
    {nombre: "DescuentoVerano", descuento: 10},
    {nombre: "DescuentoOtoño", descuento: 20},
    {nombre: "DescuentoPrimavera",descuento: 15},
    {nombre: "DescuentoInvierno", descuento: 30}
]

function calcularPrecioConDescuento(precio, descuento) {    
    const porcentajePrecioConDescuento = 100 - descuento ;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;     

    return precioConDescuento;
}

function calcularDescuentoCupon(inputCupon,precio) {
   

   if(inputCupon = false) {
        descuentoConCupon = 0;
   }
   else if(inputCupon != cupones.nombre) {
       alert("Cupon no valido");
   } 
   else {
        const tipoDeCupon = cupones.filter(function(cupones) {
            return cupones.nombre == inputCupon
    }); 
    const descuentoConCupon =  precio * (tipoDeCupon.descuento) / 100;
   }
   
   return descuentoConCupon;    
}


function onClickButtonPriceDisscount(){
    const inputPrice = document.getElementById("InputPrice")
    const priceValue = inputPrice.value;

    const inputDisscount = document.getElementById("InputDisscount")
    const disscountValue = inputDisscount.value;

    const inputCupon = document.getElementById("InputCupon")
    
    const precioConDescuento = calcularPrecioConDescuento(priceValue, disscountValue); 
    const descuentoConCupon = calcularDescuentoCupon(inputCupon, priceValue)
    
    const precioConDescuentoTotal = precioConDescuento - descuentoConCupon;

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuentoTotal;
}

/*s
console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
}*/