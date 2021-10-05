//Típos de Dato TS
    //1. Number
    //1.a Tipado Explicito
    let phone: number;
    phone = 4771400882;

    //1.b Tipado Inferido
    let phoneNumber = 4771508693;

    //1.1 Hexadecimales
    let hex: number = 0xf00d;
    /*La notacion '0xf' indica, podemos usar números del 0 al 9 y 'a' a la 'f' */
    
    //1.2 Binarios
    let binary: number = 0b1010;
    /*La notación '0b' se usa para identificar números binarios (0-1)*/

    //1.3 Valor Octal
    let octal: number= 0o744;
    /*La notación '0o' se usa para identificar números octales (0-7)*/


    //2 Boolean
    //2.a Tipado Explicito
    let isPro: boolean;
    isPro = true;

    //2.b Tipado Inferido
    let isUserPro = false;

    //3 String
    let userName: string ;
    userName = "elRefas";

    //3.1 Template String
    // Uso de back-trick '`'
    let userInfo: string;
    userInfo = `
        User Info: 
        usarName: ${userName}
        firstName: ${userName + ' Vindex'}
        phone: ${phone}   
        isPro: ${isPro}
    `;

    console.log('userInfo', userInfo);

    //4 Any
    //4.a Tipo Explícito
    let idUser: any;
    idUser = 1;  //Number
    idUser = '1' //String

    //4.a Tipo Inferido
    let otherId;
    otherId = 2;
    otherId = '2';

    let surprise: any = 'Hello TypeScript';
    const res = surprise.substring(6);
    /*Imprime apartir del caracter 6*/
    console.log('res', res);

    //5 Void
    //5.a Tipado explícito
    function showInfo(user: any) : any {
        console.log('User Info', user.idVF, user.usernameVF, user.firstNameVF);
    }

    showInfo({idVF:1, usernameVF: 'elRefas', firstNameVF: 'Bernardo'})

    //5.b Tipado Inferido
    function showFormattedInfo(user: any) {
        console.log('Userinfo', `
            id: ${user.idVF}
            username: ${user.usernameVF}
            firstName: ${user.firstNameVF}
        `)
    }

    showFormattedInfo({idVF:1, usernameVF: 'elRefas', firstNameVF: 'Bernardo'})

    //Tipo Void, como tipo de dato en una variable
    let unusable: void;
    unusable = null;
    unusable = undefined; 

    //Tipo: Never
    function handleError(code: number, message: string): never {
        //Process your code here
        //Generate a message
        throw new Error(`${message}. Code: ${code}`);
    }

    try {
        handleError(404, 'Not Found');
    } catch (error){

    }

    /*
    function sumNumbers(limit: number): never {
        let sum = 0
        while(true){
            sum++
        }
    }

    
    sumNumbers(10);
    */

    //6 Null
    //6.a Tipado explícito    
    let nullVariable: null;
    nullVariable = null

    //6.b Tipado Implicito   
    let otherVariable = null;

    //7 Undefined
    //7.a Tipado explícito    
    let undefVariable: undefined;
    

    //7.b Tipado Implicito   
    let otherundfVariable = undefined;
    /*El compilador lo infiere como 'any'*/

    //7 Object
    //7.a Tipado explícito   
    let userOb: object;
    userOb = {
        id: 1,
        username: 'ElRefotas',
        firstName: 'Cabrera',
        isPro: true,
    };

    console.log('userOB', userOb);
    //Object(JS) VS object(TS)
    let MyObj = {
        id: 1,
        username: 'ElRefotas',
        firstName: 'Cabrera',
        isPro: true,
    };

    const isInstance = MyObj instanceof Object;
    console.log('isInstance', isInstance)
    console.log('user.username', MyObj.username)
    
    //8 Array
    //8.a Tipado explícito 
    //Con corchetes
    let userArC: string[];
    userArC = ['perros', 'gatos', 'conejos'];

    //8.b Tipado Implicito 
    let userArC1 = ['perros', 'gatos', 'conejos'];

    //Con Array <Tipo>
    let pictureTitles: Array<string>;
    pictureTitles = ['Favorites', 'Other', 'Organize'];

    //Accediendo a los valores e un Array
    console.log('first collect', userArC[0]);
    console.log('first album', pictureTitles[0]);

    //Propiedades en Array
    console.log('userArc1', userArC1.length);

    //Usos de funciones en Array
    userArC1.push('pokemones');
    userArC1.sort();

    console.log('userArc1', userArC1);
    
    //9 Tupla
    //
    let userT:  [number, string];
    userT = [1, 'Maldamba'];

    console.log('userT', userT);
    console.log('ID:', userT[0]);
    console.log('username:', userT[1]);
    console.log('username.length:', userT[1].length);

    //Tuplas cn varios valores
    // id, user, isPro

    let userInfoTupla: [number, string, boolean];
    userInfoTupla = [2, 'Skye', true];

    console.log('userInfoTupla', userInfoTupla);

    //Arreglo de Tuplas
    let array: [number, string][] = [];
    array.push([1,'Phone']);
    array.push([2,'TV']);
    array.push([3,'Laptop']);
    console.log('array', array);

    //Uso de funciones Array TV -> TV Smart

    array[1][1] =  array[1][1].concat(' Smart');
    console.log('array', array);

    //Enum
    enum photoOrientation {
        Landscape,
        Portrait,
        Square,
        Panorama
    }

    const landscpe: photoOrientation = photoOrientation.Landscape;
    console.log('landscape', landscpe)
    console.log('landscape', photoOrientation[landscpe])
    
    enum pictureOrientation {
        Landscape = 10,
        Portrait,
        Square,
        Panorama
    }
    
    console.log('portrait', pictureOrientation.Portrait)

    enum Country {
        Bolivia = 'bol',
        Colombia = 'col',
        Mexico = 'mex',
        EEUU = 'usa',
        Espana = 'esp'
    }

    const country: Country = Country.Colombia;
    console.log('country', country);

    //Unión de Tipos
   /* let idUserUnion: number | string;
    idUserUnion = 10;
    idUserUnion = '10';

    //Buscar username dade un ID
    function getUsernameById(id: number | string){
        return 'Kalifa';
    }

    getUsernameById(20);
    getUsernameById('20');
*/
    //Alias de Tipos: TS
    type IdUserAT = number | string; 
    type UsernameAT = String;

    let idUserUnion: IdUserAT;
    idUserUnion = 10;
    idUserUnion = '10';

    //Buscar username dade un ID
    function getUsernameById(id: IdUserAT): UsernameAT{
        return 'Kalifa';
    }

    getUsernameById(20);
    getUsernameById('20');

    //Tipos Literales
    //Fotografías admitidas 100x100, 500x500, 1000x1000
    type SqareSize = '100x100' | '500x500' | '1000x1000';
    
    //let smallPicture: SqareSize = '200x200' //ERROR
    let smallPicture: SqareSize = '100x100'
    let mediumPicture: SqareSize = '500x500'

    //Aserciones de tipo
    // Sintaxys: <tipo> //Angle Bracket
    let userNameAB: any;
    userNameAB = 'Furia myw';

    // tenemos una cadena, TS confía en mi!
    let messageAB: string = (<string>userNameAB).length > 5 ? 
                          `Welcome ${userNameAB}`:
                          `Username is too short`
    console.log('messageAB', messageAB)
                        
    let userNameWithId: any = "Cassie    15"
    //Cómo obtener el userName?
    userNameAB = (<string>userNameWithId).substring(0,10);
    console.log('Only Username', userNameAB);

    // Sintaxys: "as"
    messageAB = (userNameAB as string).length > 5 ? 
                `Welcome ${userNameAB}`:
                `Username is too short`;
    
    let helloUser: any;
    helloUser = 'hello Wfu'
    userNameAB = (helloUser as string).substring(6)
    console.log('userName', userNameAB)