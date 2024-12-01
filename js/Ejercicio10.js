let frase = prompt('Escriba una frase: ').trim();

frase = frase.toLowerCase();

console.log(frase);

console.log(frase.length);

let vocalesEncontradas = '';

for (let i = 0; i < frase.length; i++) {
    let caracter = frase.charAt(i);

    if (
        caracter === 'a' ||
        caracter === 'e' ||
        caracter === 'i' ||
        caracter === 'o' ||
        caracter === 'u' 
        
    ) {
        vocalesEncontradas += caracter;
    }
    
}
console.log(`Cantidad de vocales encontradas: ${vocalesEncontradas.length} , ${(vocalesEncontradas)}`);


document.write(`<h1>Cantidad de vocales encontradas: ${vocalesEncontradas.length} , ${(vocalesEncontradas)}</h1>`);
