import { Configuracion } from "./Patrones/Singleton/ejercicio1";
import { ConexionDB } from "./Patrones/Singleton/ejercicio2";



// PATRON SINGLETON
// Ejercicio 1: Gestionar Configuración Global del Sistema
// const conf1 = Configuracion.obtenerInstancia();
// conf1.idioma = 'es';
// console.log(conf1.idioma);
// conf1.idioma = 'en';
// console.log(conf1.idioma);
// const conf2 = Configuracion.obtenerInstancia();
// console.log(conf2.idioma);


// Ejercicio 2
const conexion1 = ConexionDB.obtenerInstancia('localhost', 5432, 'admin');
conexion1.conectar();
conexion1.desconectar();

