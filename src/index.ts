import {menuPral} from './view/menuPral'
import { leerTeclado } from './view/entradaTeclado'
const main = async () => {
    let n: number
    do {
        n = await menuPral()
        switch(n){
            case 1:
                console.log("Estoy en opción 1")
                await sumar()
                break
            case 2:
                console.log("Estoy en opción 2")
                let n1: number
                let n2: number
                n1 =  parseInt( await leerTeclado('Dame un número')) 
                n2 =  parseInt( await leerTeclado('Dame otro número'))
                console.log(`El resultado es: ${multiplicar(n1, n2)}`)
                break
            case 0:
                console.log('\nAdios')
                break
            default:
                console.log("Opción incorrecta")
                break
        }
    }while (n != 0)
}
const sumar = async () => {
    let n1: number
    let n2: number
    n1 =  parseInt( await leerTeclado('Dame un número')) 
    n2 =  parseInt( await leerTeclado('Dame otro número'))
    console.log(`La suma es ${n1 + n2}`)
}

const multiplicar = (n1: number, n2: number): number => n1 * n2

main()
/*
import { leerTeclado } from '../view/entradaTeclado'
const lee = async () => {
    let n: string
    n = await leerTeclado('nombre: ')
    return n
}
lee()
*/


