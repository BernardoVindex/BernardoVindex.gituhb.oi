/* Clases */
class Student {
    constructor ({
        nombre,
        edad,
        email,
        twitter = undefined,
        facebook = undefined,
        instagram = undefined,
        cursosAprobados = [],
        rutasDeAprendisaje = [],
    }) {
        this.nombre = nombre;
        this.edad = edad;
        this.email = email;
        this.redesSociales = {
            twitter,
            instagram,
            facebook,
        }
        this.cursosAprobados = cursosAprobados;
        this.rutasDeAprendisaje = rutasDeAprendisaje;
        }
}

class rutasDeAprendisaje {
    constructor ({
        nombreR,
        crusos = [],
    }) {
        this.nombreR = nombreR;
        this.cursos = crusos;
    }

}

class curso {
    constructor({
        nombreC,
        maestro,
        clases = [],
    }) {
        this.nombreC = nombreC;
        this.maestro = maestro;
        this.clases = clases;
    }
}

const cursoProgBasica = new curso ({
    nombre: "Curso Gratis de Programación Básica",
    calses: {}
})


/* Instancias Alumnos*/

const juana2 = new Student ({
    nombre: "JuanaPl",
    username: "juanaP",
    email: "juanaP@gmail.com",
    twitter: "juanaDEST",
    rutasDeAprendisaje: [
        escuelaDesarrolloWeb,
        escuelaVgs,
    ],
})

const miguel = new Student ({
    nombre: "Miguel",
    username: "ElMiguel",
    email: "miguelM@gmail.com",
    instagram: "miguelo_Men",
})


/* Instancias Rutas de Aprendizaje*/

const escuelaDesarrolloWeb = new rutasDeAprendisaje({
    name: "Escuela de Desarrollo Web",
    cursos: [
        cursoProgBasica,
        cursoDefHTMLCSS,
        cursoPracticoHTMLCSS,
    ],
}) 

const escuelaDataSc = new rutasDeAprendisaje({
    name: "Escuela de Data Science",
    cursos: [
        cursoProgBasica,
        "Curso Data Bussiness",
        "Curso Data Visualización de Datos",
    ],
}) 

const escuelaVgs = new rutasDeAprendisaje({
    name: "Escuela de Videojuegos",
    cursos: [
        cursoProgBasica,
        "Curso de Unity",
        "Curso de Unreal",
    ],
}) 

/* Instancias de los crusos*/ 

const cursoProgBasica = new curso ({
    nombre: "Curso Gratis de Programación Básia"
})

const cursoDefHTMLCSS = new curso ({
    nombre: "Curso Definitivo HTML y CSS"
})

const cursoPracticoHTMLCSS = new curso ({
    nombre: "Curso de Práctico HTML y CSS"
})


/* Encapsulación con módulos */
function videoPlay(id) {
    const urlSecreta = "https://platziarea51.com/" + id;
    console.log("Se esá reproduciendo la url sereta" + urlSecreta)
}

function videoStop(id) {
    const urlSecreta = "https://platziarea51.com/" + id;
    console.log("Se pausó la url sereta" + urlSecreta)
}



class PlatziClass {
    constructor ({
        name,
        videoID,
    }) {
        this.name = name;
        this.videoID = videoID;
    }

    reproducir () {
        videoPlay(this.videoID);
    }

    pausar () {
        videoStop(this.videoID);
    }
}