import { isConstructorDeclaration } from "typescript"

class Vehiculo {
    private _matricula: string
    private _marca: string
    private _gama: string
    private _potencia: number

    constructor( _matricula: string, _marca: string, _gama: string, _potencia: number){
        this._matricula = _matricula
        this._marca = _marca
        this._gama = _gama
        this._potencia = _potencia
    }

    getMatricula(){
        return this._matricula
    }

    getMarca(){
        return this._marca
    }

    get Precio(){
        if ( this._gama == "Alta"){
            if ( this._potencia >= 180 ){
                let _precio = 30000 + 15000
                return _precio
            } else if (this._potencia <= 100 ){
                let _precio = 30000 + 5000
                return _precio
            } else {
                let _precio = 30000 + 10000
                return _precio
            }
        } else if (this._gama == "Media"){
            if ( this._potencia >= 180 ){
                let _precio = 20000 + 15000
                return _precio
            } else if (this._potencia <= 100 ){
                let _precio = 20000 + 5000
                return _precio
            } else {
                let _precio = 20000 + 10000
                return _precio
            }
        } else if (this._gama == "Baja"){
            if ( this._potencia >= 180 ){
                let _precio = 10000 + 15000
                return _precio
            } else if (this._potencia <= 100 ){
                let _precio = 10000 + 5000
                return _precio
            } else {
                let _precio = 10000 + 10000
                return _precio
            }
        }
    }
}

let miVehiculo = new Vehiculo("1234 ABC","Opel","Baja",75)

console.log(`Los datos de mi Vehiculo son: Matricula: ${miVehiculo.getMatricula()} Marca: ${miVehiculo.getMarca()} Con un precio de : ${miVehiculo.Precio}`)