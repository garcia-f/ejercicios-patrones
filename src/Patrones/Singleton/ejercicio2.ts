

export class ConexionDB {
    private static instancia: ConexionDB;
    private _host: string;
    private _puerto: number;
    private _usuario: string;
    private conectado: boolean = false;


    constructor(host: string, puerto: number, usuario: string) {
        this._host = host;
        this._puerto = puerto;  
        this._usuario = usuario;
    }

    public static obtenerInstancia(host?: string, puerto?: number, usuario?: string): ConexionDB {
        if(!ConexionDB.instancia) {
            if(!host || !puerto || !usuario) {
                throw new Error('Faltan datos');
            }
            ConexionDB.instancia = new ConexionDB(host, puerto, usuario);
        }
        return ConexionDB.instancia;
    }

    public conectar() {
        if (!this.conectado) {
            this.conectado = true;
            console.log(`Conectado a la base de datos `);
            return this.conectado
          } else {
            console.log("Ya está conectado a la base de datos.");
            return this.conectado
          }
    }

    public desconectar()  {
        if (this.conectado) {
            this.conectado = false;
            console.log(`Desconectado de la base de datos`);
            return this.conectado
          } else {
            console.log("Ya está desconectado de la base de datos.");
          }
    }

}   