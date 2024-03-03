const value = window.prompt('Digite um número inteiro:', '10');

const pares = []; // pares
const impares = []; // ímpares

for(let i=1; i<=value; i++) {
    if (i % 2 === 0) {
        pares.push(i);
    } else {
        impares.push(i);
    }
}

console.log('Numeros pares:', pares);
console.log('Numeros ímpares:', impares);