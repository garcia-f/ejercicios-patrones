import { Configuracion } from "./Patrones/Singleton/ejercicio1";



// PATRON SINGLETON
// Ejercicio 1: Gestionar Configuración Global del Sistema
const conf1 = Configuracion.obtenerInstancia();
conf1.idioma = 'es';
console.log(conf1.idioma);
conf1.idioma = 'en';
console.log(conf1.idioma);