let numero1 = parseInt( prompt('Ingrese un primer numero: '))
let numero2 = parseInt( prompt('Ingrese un segundo numero: '))
let numero3 = parseInt( prompt('Ingrese un tercer numero: '))

if(numero1>numero2 && numero1>numero3){
    document.write('<h1>El numero '+numero1+ ' es mayor a ' +numero2+ ' y ' +numero3+'</h1>')
}else{
    if (numero2>numero1 && numero2>numero3) {
        document.write('<h1>El numero '+numero2+ ' es mayor a ' +numero1+ ' y ' +numero3+'</h1>')
    }if (numero3>numero1 && numero3>numero2) {
        document.write('<h1>El numero '+numero3+ ' es mayor a ' +numero1+ ' y ' +numero2+'</h1>')
    } else {
        document.write('<h1>Los numero ingresados son iguales ('+numero1+')</h1>')
    }
}