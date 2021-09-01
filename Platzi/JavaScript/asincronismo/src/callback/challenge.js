let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;  //Instaniando la extención
                                                                //ESTO ES UN OBJETO DE JAVASCRIPT
let API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api,callback) {                          //fetch es de ES6, es una funcion vieja, silo aplica en callbacks
    let xhttp = new XMLHttpRequest();                           //
    xhttp.open('GET', url_api, true);                           //'GET' es la solicitud al servidor, url_api es de donde lo trerá y true que se active de forma asincrona
    xhttp.onreadystatechange = function (event) {               //Es como un 'addEveteListener' pero para servidores,
        if(xhttp.readyState === 4) {                            //Si el estado (4) es satisfactorio /( estado:0  "inicialiado", estado:2 "cargando", estado:2 "descargando", etado:3 "completado" )
            if (xhttp.status === 200) {                         //Estado de la peticion; 200"OK", 500"algo falló", 400"no lo encontró"
                callback(null, JSON.parse(xhttp.responseText))  //el primer valor es el error, el segundo es el resultado
            } else {                        
                const error = new Error('Error' + url_api);     //En caso que ocurra un error
                return callback(error, null)    
            }
        }
    }
    xhttp.send();
}

fetchData(API, function (error1, data1){
    if (error1) return console.error(error1);
    fetchData(API + data1.results[0].id, function (error2, data2) {
        if (error2) return console.error(error2);
        fetchData(data2.origin.url, function (error3, data3) {
            if(error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    })
})