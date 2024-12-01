let numero = prompt('Ingrese un número: ')

switch (true) {
    case numero % 2 == 0:
        document.write('<h1>El numero ' + numero + ', es divible por 2 </h1>')
        break;
    case numero % 3 == 0:
        document.write('<h1>El numero ' + numero + ', es divible por 3 </h1>')
        break;
    case numero % 5 == 0:
        document.write('<h1>El numero ' + numero + ', es divible por 5 </h1>')
        break;
    case numero % 7 == 0:
        document.write('<h1>El numero ' + numero + ', es divible por 7 </h1>')
        break;

    default:
        break;
}