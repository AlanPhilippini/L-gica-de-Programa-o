const input = prompt('Digite idades separadas por vírgula');
const values = input.split(',');
console.log('Idades', values);

let total = 0;
for(let i=0; i<values.length; i++) {
    total += parseInt(values[i]);
}

const media = total / values.length;
console.log('Média', media);