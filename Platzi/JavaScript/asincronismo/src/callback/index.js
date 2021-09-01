function sum(num1, num2) {
    return num1 + num2;
}


function calc(num1, num2, callback) {
    return callback(num1, num2);
}
/*
    callback es solo un standar entre developers para 
    anunciar que hay una función dentro de esta
*/

console.log(calc(6,2, sum));

//Tabajando con tiempo
function date(callback) {
    console.log(new Date);
    setTimeout(function () {
        let date = new Date;
    callback(date);
    }, 3000)
}

function printDate(dateNow) {
    console.log(dateNow);
}

date(printDate);