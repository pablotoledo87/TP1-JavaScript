const numero = parseInt( prompt('INgrese un número: '));

if(numero % 2 == 0 && numero % 3 == 0 && numero % 5 == 0 && numero % 7 == 0){
    document.write(`el numero (${numero}) es disivible por 2 , por 3, ni por 5 , por 7`)
}else{
    if(numero %2 === 0 ){
        document.write('El numero es divisible por 2')
    }
    if(numero %3 === 0 ){
        document.write('El numero es divisible por 3')
    }
    if(numero %5 === 0 ){
        document.write('El numero es divisible por 5')
    }
    if(numero %7 === 0 ){
        document.write('El numero es divisible por 7')
    }
}
