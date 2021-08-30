/* 
1.-Default Params y Concatenación2
*/

// antes,  estableciendo los valores por defecto
function newFunction(name, age, country) {
    var name = name || 'bernardo'
    var age = age || 22 
    var country = country || 'MX'
}

// es6, estableciendo los valores por defecto
function newFunction2 (name = 'bernardo', age = 22, contry = 'MX') {
    console.log(name, age, contry)
}

newFunction2();
newFunction2('Miriam','23','FR');

// antes, concatencación
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// es6, concatencación
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

/* 
2.-LET y CONST, Multilínea, Spread Operator y Desestructuración
*/

// antes
let lorem = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...\n" + "otra frase para concatear."
console.log(lorem);
// es6

let lorem2 = `Many Fall In The Face Of Chaos, 
But Not This One.
Not Today...`

console.log(lorem2);

// antes, estructuracion de elementos
let person = {
    'name' : 'bernardo',
    'age' : 27,
    'country' : 'MX'
}

console.log(person.name, person.age);

// esc6, estructuracion de elementos

let { name, age} = person;
console.log( name, age);