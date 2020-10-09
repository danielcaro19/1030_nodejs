class Equipo{
    private "procesador": String
    private "memoria": number

    constructor(pro: string){
        this.procesador = pro
    }

    darpro(){
        return this.procesador
    }

    //dar
}

let E01 = new Equipo("i5")

console.log(E01.darpro)
console.log()