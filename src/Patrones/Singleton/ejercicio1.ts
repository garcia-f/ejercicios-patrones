
export class Configuracion {
    private static instancia: Configuracion;
    private _idioma: string;
    private _rutaBaseDatos: string;
    private _nivelRegistro: string;

    private constructor() {
        this._idioma = 'es';
        this._rutaBaseDatos = 'path/to/db';
        this._nivelRegistro = 'root';
    }
    
    public static obtenerInstancia(): Configuracion {
        if(!Configuracion.instancia) {
            Configuracion.instancia = new Configuracion();
        }
        return Configuracion.instancia;
    }

    get idioma(): string {
        return this._idioma;
    }
    set idioma(nuevoIdioma: string) {
        if (nuevoIdioma.length > 0) {
            this._idioma = nuevoIdioma;
        } else {
            console.log('El idioma no puede estar vacío');
        }
    }

    get ruta(): string {
        return this._rutaBaseDatos;
    }
    set ruta(nuevaRuta: string) {
        if (nuevaRuta.length > 0) {
            this._rutaBaseDatos = nuevaRuta;
        } else {
            console.log('La ruta no puede estar vacía');
        }
    }

    get nivel(): string {
        return this._nivelRegistro;
    }
    set nivel(nuevoNivel: string) {
        if (nuevoNivel.length > 0) {
            this._nivelRegistro = nuevoNivel;
        } else {
            console.log('El nivel de registro no puede estar vacío');
        }
    }
    
}




// export class Configuracion {
//     private static instancia: Configuracion;

//     private idioma: string;
//     private rutaBaseDatos: string;
//     private nivelRegistro: string;

//     private constructor() {
//         this.idioma = 'es'; 
//         this.rutaBaseDatos = '/path/to/db';
//         this.nivelRegistro = 'INFO'; 
//       }

//     public static obtenerInstancia(): Configuracion {
//         if(!Configuracion.instancia) {
//             Configuracion.instancia = new Configuracion();
//         }
//         return Configuracion.instancia;
//     }

//     public obtenerIdioma() {
//         return this.idioma;
//     }
//     public actulizarIdioma( nuevoIdioma: string ) {
//         this.idioma = nuevoIdioma;
//     }

//     public obtenerRutaBaseDatos() {
//         return this.rutaBaseDatos;
//     }
//     public actulizarRutaBaseDatos( nuevaRuta: string ) {
//         this.rutaBaseDatos = nuevaRuta;
//     }

//     public obtenerNivelRegistro() {
//         return this.nivelRegistro;
//     }
//     public actulizarNivelRegistro( nuevoNivel: string ) {
//         this.nivelRegistro = nuevoNivel;
//     }

// }


// const config1 = Configuracion.obtenerInstancia();
// console.log(config1.obtenerIdioma());

// config1.actulizarIdioma('en');
// console.log(config1.obtenerIdioma());