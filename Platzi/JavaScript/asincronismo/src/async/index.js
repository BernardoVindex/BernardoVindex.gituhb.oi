const doSomethingASync = () => {
    return new Promise ((resolve, reject) => {
        (true) 
        ? setTimeout (() => resolve ('Do Somethin Aync'), 3000)
        : reject(new Error ('Test Eror'))
    });
}

const doSomething = async () => {
    const something = await doSomethingASync()
    console.log(something);
}

console.log('Before');
doSomething();
console.log('After');

//Cachar los errores
const anotherFunction = async () => {
    try {
       const something = await doSomethingASync();
       console.log(something);
    } catch (error) {
        console.error(error)
    }
}

console.log('Before 1');
anotherFunction();
console.log('After 1');
