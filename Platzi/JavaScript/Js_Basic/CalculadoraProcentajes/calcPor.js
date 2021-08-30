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

function valorDelCupon(,) {
    const descuentoCupon =

    switch (inputCupon) {
        case "DescuentoVerano":
            function calcularPrecioConDescuento(precio, 10);  
            break;
        case "DescuentoOtoño":
            function calcularPrecioConDescuento(precio, 20);  
            break;
        case "DescuentoPrimavera":
            function calcularPrecioConDescuento(precio, 15);  
            break;
        case "DescuentoInvierno":
            function calcularPrecioConDescuento(precio, 30);  
                break;
        default:
            break;
    }
}


function onClickButtonPriceDisscount(){
//Se obtiene el valor del precio desde el HTML
    const inputPrice = document.getElementById("InputPrice")
    const priceValue = inputPrice.value;

//Se obtiene el valor del descuento desde el HTML
    const inputDisscount = document.getElementById("InputDisscount")
    const disscountValue = inputDisscount.value;

//Se obtiene el código del cupón desde HTML
    const inputCupon = document.getElementById("InputCupon")
    
//Se calcula el Precio final del producto
    const precioConDescuento = calcularPrecioConDescuento(priceValue, disscountValue); 
    

//Se sobreescribe en el HTML el resultado de precio
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

/*s
console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
}*/